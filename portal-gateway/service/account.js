const request = require('request-promise-native');
const log = require('kqd-api-gateway/log');
const config = require('../config');
const utils = require('../utils');

const account = {

    /**
     * 检验会员账号是否有效
     */
    isValid: async (authorization) => {

      if(authorization == undefined || authorization == "Bearer undefined" ||
        authorization == "") {
        return {"code":401, "message": "账号未登录"};
      }

      const accessToken = utils.bearer(utils.sign(utils.extraAccessToken(authorization), config));
      //  查看个人会员信息
      const account = await request({
        uri: `${config.endpoints.api.url}/api/vip/accounts/app`,
        headers: {
         authorization:accessToken 
        },
        method: 'GET',
        json: true
        });
        if(account.code != 200) {
          return account;
        } else if(account.data.invalid == 1) {
          log.get().info("invalid:  " + JSON.stringify(account.data));
          return {
            "code" : 401,
            "message": "账号已锁定"
          };
        }
        return {"code": 200}
    }
};

module.exports = account;
