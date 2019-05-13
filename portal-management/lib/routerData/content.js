"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var routePath = (0, _index.getRoutePath)();
var _default = [{
  path: routePath.CONTENT,
  models: [],
  component: function component() {
    return import('../routes/content');
  }
}, {
  path: routePath.CONTENT_PAGE,
  models: [{
    namespace: 'content',
    handle: require('../models/content').default
  }],
  component: function component() {
    return import('../routes/content/Page');
  }
}];
exports.default = _default;