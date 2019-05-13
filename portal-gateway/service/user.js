const request = require('request-promise-native');
const log = require('kqd-api-gateway/log');
const config = require('../config');

const user = {

    /**
     * 返回商城系统的用户头像列表
     * @Param userId 数组
     * @Return 用户列表
     * [{
     *   "inviter_name": null,
     *   "login_name": "user123",
     *   "phone": null,
     *   "sex": 0,
     *   "name": "user1231",
     *   "real_name": "李小龙",
     *   "id": 2,
     *   "avatar": null
     *   }
     * ]
     */
    getUserList: async (...ids) => {
        if (ids === null) {
            return [];
        }
        ids = ids.filter(function (element, index, array) {
            return array.indexOf(element) === index;
        });
        const result = await request({
                          uri: `${config.endpoints.rest.url}/rest/pub/user_info`,
                          method: 'POST',
                          body: { ids },
                          json: true
                      });
        log.get().debug(result);
        if (result.status_code === 0) {
            return result.data;
        }
        return [];
    }
};

module.exports = user;
