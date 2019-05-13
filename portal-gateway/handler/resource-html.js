const request = require('request-promise-native');
const log = require('kqd-api-gateway/log');
const path = require('path');
const utils = require('../utils');
const jwt = require('kqd-api-gateway/jwt');
const fs = require('fs-extra');
const { resError, resMustArgs } = require('../utils/res');
const { displayAllFile } = require('../utils/fsUtils');
const { exec } = require('child_process');
const configJson = require('../config.json');
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart();

// 资源管理 图片
const context = [
  {
    handle: (app, config) => {
      app.get('/api/gw/portal/html', async (req, res) => {
        try {
          const list = displayAllFile(configJson.webPath).filter(filePath => path.extname(filePath) === '.html');
          const { current = 1, pageSize = 10 } = req.query;
          const currentPageData = list.slice((current - 1) * pageSize, current * pageSize);
          const records = currentPageData.map(webPath => {
            const name = webPath.replace(/\\/g, '/').replace(configJson.webPath, '');
            return {
              id: name,
              name: name,
            }
          });

          res.json({
            code: 200, message: 'OK', data: {
              records: records,
              current: Number(current),
              size: Number(pageSize),
              pages: Math.floor(list.length / pageSize),
              total: list.length,
            }
          });
        } catch (err) {
          resError(res, err);
        }
      });
      app.get('/api/gw/portal/html/*', async (req, res) => {
        try {
          const id = req.url.match(/\/{2}(\S+)\?/g)[0].replace('//', '/').replace('?', '');
          const content = fs.readFileSync(path.join(configJson.webPath, id), {
            encoding: 'utf8'
          });

          res.json({
            code: 200, message: 'OK', data: {
              id,
              name: id,
              content,
            }
          });
        } catch (err) {
          resError(res, err);
        }
      });
      // 修改
      app.put('/api/gw/portal/html/*', multipartMiddleware, async (req, res) => {
        try {
          const { id: name, content } = req.body;

          fs.writeFileSync(path.join(configJson.webPath, name), content);

          res.json({ code: 200, message: 'OK' });
        } catch (err) {
          resError(res, err);
        }
      });
    }
  },
];

module.exports = context;
