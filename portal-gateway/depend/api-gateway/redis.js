const log = require('./log');
const { promisify } = require('util');
const _redis = require("redis");
let client = null;
let getAsync = null;
let getAllAsync = null;

const redis = {
  init: (redis) => {
    if (redis && redis.enabled) {
      client = _redis.createClient(redis.port, redis.host);
      getAsync = promisify(client.get).bind(client);
      getAllAsync = promisify(client.hmget).bind(client);
      client.on('error', function (err) {
        log.get().error("error: ", err);
      });
    }
  },
  get: (key, callback) => {
    if (client) {
      client.get(key, (err, reply) => {
        log.get().debug("reply: ", reply);
        if (callback) {
          callback(reply);
        }
      })
    }
    else {
      log.get().error('redis is not started.');
    }
  },
  getAsync: async (key) => {
    return getAsync(key);
  },
  getAll: (key, fields, callback) => {
    client.hmget(key, fields, (err, reply) => {
      log.get().debug("hmget: ", reply);
      if (callback) {
        callback(reply);
      }
    })
  },
  getAllAsync: async (key, fields) => {
    return getAllAsync(key, fields);
  }

};

module.exports = redis;
