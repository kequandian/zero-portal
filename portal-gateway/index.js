const gateway = require('kqd-api-gateway/gateway');
const config = require('./config');

gateway.config(config);
gateway.handlerPath(__dirname);
gateway.run();
