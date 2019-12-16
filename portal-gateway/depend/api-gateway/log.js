const log4js = require('log4js');

//配置成console，会把所有的控制台打印包括 console.log()都记录到log文件中
log4js.configure({
    replaceConsole: true,
    appenders: {
        stdout: {//控制台输出
            type: 'stdout'
        },
        req: {//请求日志
            type: 'dateFile',
            filename: 'logs/reqlog/',
            pattern: 'req-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        err: {//错误日志
            type: 'dateFile',
            filename: 'logs/errlog/',
            pattern: 'err-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        oth: {//其他日志
            type: 'dateFile',
            filename: 'logs/othlog/',
            pattern: 'oth-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: { appenders: ['stdout', 'req'], level: 'debug' },//appenders:采用的appender,取appenders项,level:设置级别
        err: { appenders: ['stdout', 'err'], level: 'error' },
        oth: { appenders: ['stdout', 'oth'], level: 'info' }
    }
});

let logger4js = {};
const logger = {
  init: (app, name) => {
    logger4js = log4js.getLogger(name || 'default');
    //这个写在所有中间件之上
    app.use(log4js.connectLogger(logger4js, {
        level: log4js.levels.INFO,
        //配置日志输出级别
        format: ':method :url'
    }));

    return logger4js;
  },
  get: () => logger4js
};

module.exports = logger;
