import Koa from 'koa';
import cors from 'koa2-cors';
import koaBody from 'koa-body';

import formatResponse from './Middleware/formatResponse';
import apiRouter from './Middleware/APIRouter';

const { logger, accessLogger } = require('./logger');

const port = 8080;
const app = new Koa();

app.use(accessLogger());
app.use(cors({
  exposeHeaders: ['Content-Disposition'],
}));
app.use(formatResponse);
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 20 * 1024 * 1024, // 20 Mb
  }
}));
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

app.on('error', (err, ctx) => {
  console.warn(err.message);
  logger.error(err);
  // ctx.body = {
  //   code: 500,
  //   message: err.message,
  //   result: 'Uncaptured',
  // };
});

console.log(`listen port to ${port}`);
app.listen(port);