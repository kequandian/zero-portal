"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.IMAGES,
  models: [],
  component: function component() {
    return import('../routes/images');
  }
}, {
  path: routePath.IMAGES_PAGE,
  models: [{
    namespace: 'images',
    handle: require('../models/images').default
  }],
  component: function component() {
    return import('../routes/images/Page');
  }
}];
exports.default = _default;