"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.MEMU,
  models: [],
  component: function component() {
    return import('../routes/menu');
  }
}, {
  path: routePath.MEMU_LIST,
  models: [{
    namespace: 'menu',
    handle: require('../models/menu').default
  }],
  component: function component() {
    return import('../routes/menu/List');
  }
}, {
  path: routePath.MEMUFORM,
  models: [{
    namespace: 'menu',
    handle: require('../models/menu').default
  }],
  component: function component() {
    return import('../routes/menu/Form.js');
  }
}];
exports.default = _default;