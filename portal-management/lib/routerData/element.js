"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.ELEMENT,
  models: [],
  component: function component() {
    return import('../routes/element');
  }
}, {
  path: routePath.ELEMENT_LIST,
  models: [{
    namespace: 'element',
    handle: require('../models/element').default
  }],
  component: function component() {
    return import('../routes/element/List');
  }
}, {
  path: routePath.ELEMENTFORM,
  models: [{
    namespace: 'element',
    handle: require('../models/element').default
  }],
  component: function component() {
    return import('../routes/element/Form.js');
  }
}];
exports.default = _default;