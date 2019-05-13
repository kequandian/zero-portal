"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.FASHION,
  models: [],
  component: function component() {
    return import('../routes/fashion');
  }
}, {
  path: routePath.FASHION_LIST,
  models: [{
    namespace: 'fashion',
    handle: require('../models/fashion').default
  }],
  component: function component() {
    return import('../routes/fashion/List');
  }
}, {
  path: routePath.FASHIONFORM,
  models: [{
    namespace: 'fashion',
    handle: require('../models/fashion').default
  }],
  component: function component() {
    return import('../routes/fashion/Form.js');
  }
}];
exports.default = _default;