const request = require('request-promise-native');
const log = require('../log');
const redis = require('../redis');

// demo 数据聚合
// context 可以是数组，也可以是单个对象
const context = [
  {
    //disabled: true,
    handle: (app, config) => {
      app.get('/hello/:id', async (req, res) => {
        log.get().info("handle /hello");

        redis.get("a");
        const val = await redis.getAsync("a");
        log.get().debug("redis val = ", val);
        redis.getAll("g", [ "u1", "u2"], (values) => {
          log.get().debug("values = ", values);
        })
        const allRes = await redis.getAllAsync("g", ["u1", "u2", "u3" ]);
        log.get().debug("redis allRes = ", allRes);

        const rest = config.endpoints.rest;
        const result = await request(`${rest.url}/rest/product_category/84`);
        const result2 = await request(`${rest.url}/rest/product_category?promoted=true`);
        const data = {
          result: JSON.parse(result),
          result2: JSON.parse(result2)
        };
        res.json(data);
      })
    }
  },
];

module.exports = context;
