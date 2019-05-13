"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.VIDEO,
  models: [],
  component: function component() {
    return import('../routes/video');
  }
}, {
  path: routePath.VIDEO_LIST,
  models: [{
    namespace: 'video',
    handle: require('../models/video').default
  }],
  component: function component() {
    return import('../routes/video/List');
  }
}, {
  path: routePath.VIDEOFORM,
  models: [{
    namespace: 'video',
    handle: require('../models/video').default
  }],
  component: function component() {
    return import('../routes/video/Form.js');
  }
}];
exports.default = _default;