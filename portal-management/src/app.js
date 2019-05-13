import 'antd/dist/antd.css';
import './app.css';
import { addRoutePath, addMenu, addModule, framework, app, setDefaultRoutePath } from 'kqd-framework';
import { endpointSet, setLayoutExtends } from 'zero-element';
import { saveToken } from 'zero-element/lib/utils/request/token';
import { getEndpoint } from 'kqd-utils/lib/endpoint';
import { getToken } from 'kqd-utils/lib/token';
import module1, { getRoutePath } from './index';

import ImagesManage from './layout/ImagesManage';

const { set: setEndpoint } = endpointSet;
const endpoint = getEndpoint() || window.MC && window.MC.HOST || '';
const token = getToken() ||  window.MC && window.MC.ACCESS_TOKEN || '';
console.log('当前使用的 endpoint: ', endpoint);
console.log('当前使用的 token: ', token);
setEndpoint(endpoint);
// setEndpoint(endpoint + '/portal-api');
// setEndpoint('http://192.168.2.116:8080');
// setEndpoint('http://120.79.77.207:8080');
// saveToken({
//   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRJZCI6Ijg3NjcwODA4MjQzNzE5NzgyNCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgyNyIsImFjY291bnQiOiJhZG1pbiIsImlhdCI6MTU1MzUwNjI3NywianRpIjoiODc2NzA4MDgyNDM3MTk3ODI3Iiwic3ViIjoiYWRtaW4iLCJleHAiOjE1NTM3NjU0Nzd9.MfJt1hvHSZMUbAg23lm7K0_70Qo1QPghtdl-aUzQquWCcgdtOS7tKhUyI_uOpDXJ88H_coaNietnM7k9ZwA-mg',
// });
saveToken({
  token,
});
const menu = [];
require.context('./routePath/', true, /\.js$/).keys().forEach(file => {
  const res = require(`./routePath/${file.slice(2)}`).default;
  const m = Object.keys(res)[0];
  menu.push({
    name: m,
    intl: m,
    path: res[m].slice(1)
  });
});

addModule(module1({
  menu
}));

setDefaultRoutePath(getRoutePath().MEMU);

const inject = {
  'Copyright': '可圈点',
  'Company': '可圈点后台管理系统',
  'Logo': 'none'
}
framework(inject);
app();


setLayoutExtends({
  ImagesManage,
});