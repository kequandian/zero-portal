"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.CAROUSELS,
  models: [],
  component: function component() {
    return import('../routes/carousels');
  }
}, {
  path: routePath.CAROUSELS_PAGE,
  models: [{
    namespace: 'carousels',
    handle: require('../models/carousels').default
  }],
  component: function component() {
    return import('../routes/carousels/Page');
  }
}];
exports.default = _default;