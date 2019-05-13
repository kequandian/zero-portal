const request = require('request-promise-native');
const jwt = require('kqd-api-gateway/jwt');
const log = require('kqd-api-gateway/log');
const utils = require('../utils');

const context = {
  //disabled: true,
  handle: (app, config) => {
    app.use((req, res, next) => {
      const authorization = req.headers.authorization;
      // 自动转换 token，并验证 token 有效性
      // 只有 /api 开头的 url 才会进行自动转换 ( 不包括 /api/gw )
      if (authorization && /^\/api\//.test(req.url) && !/^\/api\/gw\//.test(req.url))  {
          const tokenData = utils.extraAccessToken(authorization);
          if (tokenData.login_name) {
            log.get().debug(`verifying access token for ${req.url}`);
            request({
                    uri: `${config.endpoints.rest.url}/rest/verify_access_token`,
                    method: 'POST',
                    headers: req.headers,
                    json: true
                })
              .then(() => {
                log.get().debug(`exchanging access token for ${req.url}`);
                const accessToken = utils.bearer(utils.sign(tokenData, config));
                req.headers['authorization'] = accessToken;
                next();
              })
              .catch(() => {
                res.status('401').json('invalid.access_token');
              });
          }
          else {
            log.get().debug(`no exchanging access token needed for ${req.url}. just pass next.`);
            next();
          }
      }
      else {
        log.get().debug(`no authorization header or it is /rest, directly pass ${req.url}`);
        next();
      }
    });
  }
};
module.exports = context;
