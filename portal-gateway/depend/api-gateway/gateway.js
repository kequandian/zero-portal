const express = require('express');
const httpProxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
const fs = require("fs");
const path = require("path");
const redis = require('./redis');
const log = require('./log');

let config = require('./config');
let handlerPath = null;

function initHandle(app, config, handlerPath) {
  fs.readdirSync(path.join(handlerPath + '/handler')).forEach((file, index) => {
    if (/\.js$/.test(file)) {
      const context = require(path.join(handlerPath + '/handler/' + file));
      if (Array.isArray(context)) {
        context.map(ctx => ctx.disabled || ctx.handle(app, config))
      }
      else {
        context.disabled || context.handle(app, config)
      }
    }
  });
}

/**
 * 内部API访问控制
 */
function initInternalApi(app, config) {
  if (config.internal) {
    config.internal.map(url => {
      app.use(url, (req, res, next) => {
        log.get().info(`url ${url} is blocked. access denied.`);
        res.status(401).json('access denied');
      })
    })
  }
}

// 判断是否为multipart
const isMulti = req => req.headers['content-type'] && req.headers['content-type'].indexOf('multipart') > -1;
const isText = req => req.headers['content-type'] && req.headers['content-type'].indexOf('text') > -1;
// 是否使用bodyParser进行解析
// 经过bodyParser解析后 一些key value会被忽略掉，包括files
// 不经过解析就可以进行文件转发-->
const middle = (limit) => (req, res, next) => {
  if(isMulti(req)) {
    return next();
  }
  if (isText(req)) {
    return bodyParser.text({ limit, type: 'text/plain' })(req, res, next);
  }
  return bodyParser.json({ limit })(req, res, next);
}


const allowCrossDomain = function (req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
 res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type,Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With, Accept');
 res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
 next();
};

const gateway = {
  config: (conf) => {
    config = conf;
  },
  handlerPath: (path) => {
    handlerPath = path;
  },
  run: () => {
    const limit = config.limit || '5mb';
    const timeoutSec = config.timeout || '5s';

    const app = express();

    app.use(timeout(timeoutSec));

    app.use(middle(limit));

    app.use(allowCrossDomain);//运用跨域的中间件

    // 设置端口
    app.set('port', config.http.port);

    const logger = log.init(app, config.logger.category);
    const redisClient = redis.init(config.redis);

    initInternalApi(app, config);

    initHandle(app, config, __dirname);
    handlerPath && initHandle(app, config, handlerPath);

    Object.keys(config.endpoints).map(index => {
      const endpoint = config.endpoints[index];
      app.use(endpoint.path, (req, res, next) => {
        const restProxy = httpProxy(endpoint.url, {
          limit: limit,
          proxyReqPathResolver: function(req) {
            return req.originalUrl;
          }
        });
        var userip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const msg = `proxying ${req.originalUrl} from ${userip} to ${endpoint.url}`;
        logger.info(msg);
        restProxy(req, res, next);
      })
    })

    app.use(express.static('public'));

    // 监听端口
    app.listen(app.get('port'), '0.0.0.0', () => {
      logger.info(`API gateway running @${app.get('port')}`);
    });
  }
}

module.exports = gateway;
