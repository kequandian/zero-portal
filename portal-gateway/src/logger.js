const path = require('path');
const log4js = require('koa-log4');

log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log', //生成文件的规则
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%c] [%p] %n%m'
      },
      filename: path.join('logs/', 'access.log') //生成文件名
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] [%c] [%f{3}:%l] %n%m'
      },
      filename: path.join('logs/', 'application.log')
    },
    out: {
      type: 'stdout'
    }
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'info',
    },
    access: {
      appenders: ['access'],
      level: 'info',
    },
    application: {
      appenders: ['application'],
      level: 'warn',
      enableCallStack: true,
    }
  }
});

//记录所有访问级别的日志
exports.accessLogger = () => log4js.koaLogger(log4js.getLogger('access')); 
//记录所有应用级别的日志
exports.logger = log4js.getLogger('application');