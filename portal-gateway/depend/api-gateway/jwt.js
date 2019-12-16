const jsonwebtoken = require('jsonwebtoken');

const jwt = {
  sign: ({key, algorithm = 'HS512', expiresIn = 60, account, id}) => {
    //定义签名
    const secret = new Buffer(key, 'base64');
    //生成token
    const token = jsonwebtoken.sign(
      { account, 'userId': id },
      secret,
      { expiresIn, algorithm, subject: account }
    );
    //console.log(token);
    return token;
  },
}

module.exports = jwt;
