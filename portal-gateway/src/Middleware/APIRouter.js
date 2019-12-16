const Router = require('koa-router');
const path = require('path');
const { displayAllFile } = require('../utils/fsUtils')

const api = new Router();

const apiDir = path.join(__dirname, '../api');

displayAllFile(apiDir, ['utils']).forEach(file => {
  if (/\.js$/.test(file)) {
    const context = require(file);
    context(api, {
      Must: reqMust,
      List: resList,
    });
  }
});

/**
 * 检测是否传入了必须的参数，返回这些参数组成的对象
 *
 * @param {ctx} ctx
 * @param {array} data
 * @returns {object}
 */
function reqMust(ctx, data) {
  const rst = {};
  const miss = [];
  data.forEach(v => {
    if (ctx.params && ctx.params[v]) {
      rst[v] = ctx.params[v];
    } else {
      miss.push(v);
    }
  })
  if (miss.length) {
    ctx.throw(400, 'Missing Parameter', { code: 400, data: miss });
  }
  return rst;

}
function resList(ctx, data) {
  const formatList = Array.isArray(data) ?
    data.map(item => {
      const { userId, ...rst } = item;
      return { ...rst };
    })
    : data;

  ctx.body = {
    code: 200,
    message: 'success',
    data: formatList,
  };
}

export default api;