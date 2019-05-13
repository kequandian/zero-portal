"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("antd/dist/antd.css");

require("./app.css");

var _kqdFramework = require("kqd-framework");

var _zeroElement = require("zero-element");

var _token = require("zero-element/lib/utils/request/token");

var _endpoint = require("kqd-utils/lib/endpoint");

var _token2 = require("kqd-utils/lib/token");

var _index = _interopRequireWildcard(require("./index"));

var _ImagesManage = _interopRequireDefault(require("./layout/ImagesManage"));

var setEndpoint = _zeroElement.endpointSet.set;
var endpoint = (0, _endpoint.getEndpoint)() || window.MC && window.MC.HOST || '';
var token = (0, _token2.getToken)() || window.MC && window.MC.ACCESS_TOKEN || '';
console.log('当前使用的 endpoint: ', endpoint);
console.log('当前使用的 token: ', token);
setEndpoint(endpoint); // setEndpoint(endpoint + '/portal-api');
// setEndpoint('http://192.168.2.116:8080');
// setEndpoint('http://120.79.77.207:8080');
// saveToken({
//   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRJZCI6Ijg3NjcwODA4MjQzNzE5NzgyNCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgyNyIsImFjY291bnQiOiJhZG1pbiIsImlhdCI6MTU1MzUwNjI3NywianRpIjoiODc2NzA4MDgyNDM3MTk3ODI3Iiwic3ViIjoiYWRtaW4iLCJleHAiOjE1NTM3NjU0Nzd9.MfJt1hvHSZMUbAg23lm7K0_70Qo1QPghtdl-aUzQquWCcgdtOS7tKhUyI_uOpDXJ88H_coaNietnM7k9ZwA-mg',
// });

(0, _token.saveToken)({
  token: token
});
var menu = [];

require.context('./routePath/', true, /\.js$/).keys().forEach(function (file) {
  var res = require("./routePath/".concat(file.slice(2))).default;

  var m = Object.keys(res)[0];
  menu.push({
    name: m,
    intl: m,
    path: res[m].slice(1)
  });
});

(0, _kqdFramework.addModule)((0, _index.default)({
  menu: menu
}));
(0, _kqdFramework.setDefaultRoutePath)((0, _index.getRoutePath)().MEMU);
var inject = {
  'Copyright': '可圈点',
  'Company': '可圈点后台管理系统',
  'Logo': 'none'
};
(0, _kqdFramework.framework)(inject);
(0, _kqdFramework.app)();
(0, _zeroElement.setLayoutExtends)({
  ImagesManage: _ImagesManage.default
});