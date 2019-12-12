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
      app.get('/api/gw/portal/images', async (req, res) => {
        try {
          const list = displayAllFile(configJson.imgPath);
          const { pageNum = 1, pageSize = 10 } = req.query;
          const currentPageData = list.slice((pageNum - 1) * pageSize, pageNum * pageSize);
          const records = currentPageData.map(imgPath => {
            const name = imgPath.replace(/\\/g, '/').replace(configJson.imgPath, '');
            return {
              id: name,
              name: name,
              url: `${configJson.imgEndpoint}${name}`,
            }
          });

          res.json({
            code: 200, message: 'OK', data: {
              records: records,
              current: Number(pageNum),
              size: Number(pageSize),
              pages: Math.floor(list.length / pageSize),
              total: list.length,
            }
          });
        } catch (err) {
          resError(res, err);
        }
      });
      app.get('/api/gw/portal/images/*', async (req, res) => {
        try {
          const id = req.url.match(/\/{2}(\S+)\?/g)[0].replace('//', '/').replace('?', '');

          res.json({
            code: 200, message: 'OK', data: {
              id,
              name: id,
              url: [{ url: `${configJson.imgEndpoint}${id}` }],
            }
          });
        } catch (err) {
          resError(res, err);
        }
      });
      // 新增
      app.post('/api/gw/portal/uploadImages', multipartMiddleware, async (req, res) => {
        try {
          const name = req.body.id;
          const tempPath = req.files.file.path;

          res.json({ code: 200, message: 'OK', data: {url: tempPath} });
        } catch (err) {
          resError(res, err);
        }
      });
      // 修改
      app.put('/api/gw/portal/images/*', multipartMiddleware, async (req, res) => {
        try {
          const { id: name, url} = req.body;

          fs.copySync(url[0].url, path.join(configJson.imgPath, name));
          fs.removeSync(url[0].url);

          res.json({ code: 200, message: 'OK' });
        } catch (err) {
          resError(res, err);
        }
      });
    }
  },
];

module.exports = context;
