const fs = require('fs-extra');
const http = require('http');
const https = require('https');
const { displayAllFile } = require('../../utils/fsUtils');
const configJson = require('../../../config.json');
const { logger } = require('../../logger');

/** 
 *  表单管理
 *  用于暂时替代 eav 的相关 api
 * /api/generate/form
 */
module.exports = function (api, { Must, List }) {

  /** 
   * 获取 web 的图片
   */
  api.get('/api/gw/portal/images', async (ctx) => {

    try {
      const list = displayAllFile(configJson.imgPath);
      const { pageNum = 1, pageSize = 10 } = ctx.query;
      const currentPageData = list.slice((pageNum - 1) * pageSize, pageNum * pageSize);
      const records = currentPageData.map(imgPath => {
        const name = imgPath.replace(/\\/g, '/')
          .replace(configJson.imgPath, '');
        const fName = name.replace(/^\//, '');
        return {
          id: fName.replace(/\//g, '|'),
          name: fName,
          url: `${configJson.imgEndpoint}${name}`,
        }
      });

      ctx.body = {
        code: 200,
        message: 'success',
        data: {
          records: records,
          current: Number(pageNum),
          size: Number(pageSize),
          pages: Math.floor(list.length / pageSize),
          total: list.length,
        },
      }
    } catch (err) {
      throw err;
    }
  });

  /** 
   * 获取 web 图片的详情
   */
  api.get('/api/gw/portal/images/:id', async (ctx) => {
    const { id } = Must(ctx, ['id']);

    const fId = `/${id}`;
    const fName = id.replace(/\|/g, '/');

    ctx.body = {
      code: 200,
      message: 'success',
      data: {
        id: id,
        name: fName,
        url: [{ url: `${configJson.imgEndpoint}/${fName}` }],
      },
    }

  });

  /** 
   * 新建 web 图片
   */
  api.post('/api/gw/portal/images', async (ctx) => {
    const { name, url } = ctx.request.body;

    if (url[0]) {
      saveImgFile(url[0].url, configJson.imgPath, name);
    } else {
      ctx.body = {
        code: 500,
        message: '请提交有效的图片',
      }
    }
    ctx.body = {
      code: 200,
      message: 'success',
    }

  });

  /** 
   * 编辑 web 图片
   */
  api.put('/api/gw/portal/images/:id', async (ctx) => {
    const { id } = Must(ctx, ['id']);
    const { name, url } = ctx.request.body;
    const fId = `/${id}`;
    const fName = id.replace(/\|/g, '/');

    if (url[0]) {
      return fs.remove(`${configJson.imgPath}/${fName}`)
        .then(_ => {
          saveImgFile(url[0].url, configJson.imgPath, name);

          ctx.body = {
            code: 200,
            message: 'success',
          }
        })
    } else {
      ctx.body = {
        code: 500,
        message: '请提交有效的图片',
      }
    }

  });

  /** 
   * 删除 web 图片
   */
  api.delete('/api/gw/portal/images/:id', async (ctx) => {
    const { id } = Must(ctx, ['id']);
    const fName = id.replace(/\|/g, '/');

    fs.remove(`${configJson.imgPath}/${fName}`)
      .then(_ => {
        ctx.body = {
          code: 200,
          message: 'success',
        }
      })

  });

}

// 保存文件
function saveImgFile(url, outDir, fileName) {
  let ext = url.split('.').pop();
  let imgName = url.split('.')[0].split('/').pop();
  const outFileName = fileName || imgName + '.' + ext;

  let request = http;
  if (url.indexOf('https') > -1) {
    request = https;
  }

  request.get(url, (res) => {
    let imgData = '';
    res.setEncoding('binary');
    res.on('data', function (chunk) {
      imgData += chunk;
    });
    res.on('end', function () {
      if (imgData) {
        let filePath = outDir + '/' + outFileName;
        fs.writeFile(filePath, imgData, 'binary', function (err) {
          if (err) {
            logger.error(`图片 ${url} 保存到 ${filePath} 时失败`);
          }
        });
      } else {
        logger.error(`图片 ${url} 下载失败`);
      }
    });
  })
}