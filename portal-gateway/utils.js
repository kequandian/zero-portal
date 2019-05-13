const jwt = require('kqd-api-gateway/jwt');
const log = require('kqd-api-gateway/log');

const utils = {

    getToken: (req) => {
      let token = req.headers.authorization || req.query.access_token;
      log.get().debug(`token=${token}`);
      return token;
    },

    extraAccessToken: (token) => {
      let accessToken = token;
      if (/^Bearer/.test(token)) {
        accessToken = token.substring('Bearer '.length);
      }
      const str = new Buffer(accessToken, 'base64').toString();
      log.get().debug(str);
      let res = {
        login_name: '',
      };
      try {
        res = JSON.parse(str);
      }
      catch(e) {
      }
      return res;
    },

    sign: (tokenData, config) => {      
        // if( Object.keys(tokenData).length === 0 ){
        //   throw new Error('invalid token. from utils sign.');
        // }
        const account = tokenData.login_name;
        const id = tokenData.id;
        const accessToken = jwt.sign({ key: config.endpoints.api.jwt.key ,account, id, expiresIn: 7200 });
        return accessToken;
    },

    bearer: (accessToken) => {
        return `Bearer ${accessToken}`;
    },

    dummy: (config) => {
        return jwt.sign({ key: config.endpoints.api.jwt.key ,account: '', id: '', expiresIn: 7200 });
    }
}

module.exports = utils;