"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.LORE,
  models: [],
  component: function component() {
    return import('../routes/lore');
  }
}, {
  path: routePath.LORE_LIST,
  models: [{
    namespace: 'lore',
    handle: require('../models/lore').default
  }],
  component: function component() {
    return import('../routes/lore/List');
  }
}, {
  path: routePath.LOREFORM,
  models: [{
    namespace: 'lore',
    handle: require('../models/lore').default
  }],
  component: function component() {
    return import('../routes/lore/Form.js');
  }
}];
exports.default = _default;