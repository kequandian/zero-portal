const log = require('kqd-api-gateway/log');

function resError(res, err) {
  log.get().error(err.stack);
  const statusCode = err.response && err.response.statusCode || 500;
  const message = err.response && err.response.body || "Internal Error";
  res.status(statusCode).json({ code: statusCode, message });
}

function resMustArgs(reqBody, res, args = []) {
  const missArgs = [];

  args.forEach(key => {
    if (reqBody[key] === undefined) {
      missArgs.push(key);
    }
  });

  if(missArgs.length) {
    const message = `缺少必须参数: ${missArgs.join(',')}`;
    res.status(400).json({ code: 400, message });
    throw new Error(message);
  }

  return reqBody;
}

module.exports = {
  resError,
  resMustArgs,
};