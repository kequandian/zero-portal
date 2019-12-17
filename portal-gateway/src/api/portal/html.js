const fs = require('fs-extra');
const path = require('path');
const configJson = require('../../../config.json');
const { displayAllFile } = require('../../utils/fsUtils');

module.exports = function (api, { Must, List }) {

  /** 
   * 获取 web html list
   */
  api.get('/api/gw/portal/html', async (ctx) => {
    try {
      const list = displayAllFile(configJson.webPath).filter(filePath => path.extname(filePath) === '.html');
      const { current = 1, pageSize = 10 } = ctx.query;
      const currentPageData = list.slice((current - 1) * pageSize, current * pageSize);
      const records = currentPageData.map(webPath => {
        const name = webPath.replace(/\\/g, '/').replace(configJson.webPath, '');
        const fName = name.replace(/^\//, '');
        return {
          id: fName,
          name: name,
        }
      });

      ctx.body = {
        code: 200,
        message: 'success',
        data: {
          records: records,
          current: Number(current),
          size: Number(pageSize),
          pages: Math.floor(list.length / pageSize),
          total: list.length,
        },
      }
    } catch (err) {
      throw err;
    }
  });

  api.get('/api/gw/portal/html/:id', async (ctx) => {
    const { id } = Must(ctx, ['id']);

    const fId = `/${id}`;
    const fName = id.replace(/\|/g, '/');

    return fs.readFile(path.join(configJson.webPath, fName), {
      encoding: 'utf8'
    })
      .then(content => {
        ctx.body = {
          code: 200,
          message: 'success',
          data: {
            id,
            name: id,
            content,
          },
        }
      })

  });

  api.put('/api/gw/portal/html/:id', async (ctx) => {
    const { id } = Must(ctx, ['id']);
    const { content } = ctx.request.body;
    const fId = `/${id}`;
    const fName = id.replace(/\|/g, '/');

    return fs.writeFile(path.join(configJson.webPath, fName), content, {
      encoding: 'utf8'
    })
      .then(_ => {
        ctx.body = {
          code: 200,
          message: 'success',
        }
      })
  });
}