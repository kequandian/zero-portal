
const config = {
  "http": {
    "port": 8081
  },

  "gateway": "http://localhost:8081",

  "endpoints": {
    "rest": {
      "path": "/rest",
      "url": "http://192.168.3.88:8020"
    },
    "api": {
      "path": "/api",
      "url": "http://192.168.3.88:8080",
      "jwt": {
        "key": "L7A/6zARSkK1j7Vd5SDD9pSSqZlqF7mAhiOgRbgv9Smce6tf4cJnvKOjtKPxNNnWQj+2lQEScm3XIUjhW+YVZg=="
      }
    }
  },

  "logger": {
    "category": "default"
  }
}

module.exports = config;
