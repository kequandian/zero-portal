
const config = {
  "http": {
    "port": 8081
  },

  "endpoints": {
    "rest": {
      "path": "/rest",
      "url": "http://120.79.77.207:8080"
    },
    "api": {
      "path": "/api",
      "url": "http://120.79.77.207:8080",
      "jwt": {
        "key": "L7A/6zARSkK1j7Vd5SDD9pSSqZlqF7mAhiOgRbgv9Smce6tf4cJnvKOjtKPxNNnWQj+2lQEScm3XIUjhW+YVZg=="
      }
    }
  },

  "logger": {
    "category": "default"
  },
  "limit": "25mb",
  "timeout": "720s",

  "redis": {
    "enabled": false,
    "host": "127.0.0.1",
    "port": 6379
  },

  "internal": [
    "/api/hello/:id", "/api/xyz"
  ]
}

module.exports = config;
