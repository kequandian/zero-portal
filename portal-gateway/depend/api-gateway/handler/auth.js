const request = require('request-promise-native');
const jwt = require('../jwt');

function extraAccessToken(token) {
  let accessToken = token;
  if (/^Bearer/.test(token)) {
    accessToken = token.substring('Bearer '.length);
  }
  const res = JSON.parse(new Buffer(accessToken, 'base64').toString());
  return res;
}

const context = {
  disabled: true,
  handle: (app, config) => {
    app.use((req, res, next) => {
      const authorization = req.headers.authorization;
      if (authorization && /^\/api\//.test(req.url)) {
        const tokenData = extraAccessToken(authorization);
        const account = tokenData.login_name;
        const id = tokenData.id;
        const accessToken = jwt.sign({ key: config.endpoints.api.jwt.key ,account, id });
        req.headers['authorization'] = `Bearer ${accessToken}`;
      }

      next();
    });
  }
};
module.exports = context;



        // request({
        //   uri: `${config.endpoints.api.url}/api/oauth/login`,
        //   method: 'POST',
        //   body: {
        //     account: 'user123',
        //     password: '123456'
        //   },
        //   json: true
        // }).then((res) => {
        //   req.headers['authorization'] = `Bearer ${res.data.accessToken}`;
        //   next();
        // }).catch((err) => {
        //   //console.log("error:", err);
        //   res.status(err.statusCode).json(err.error);
        // })
