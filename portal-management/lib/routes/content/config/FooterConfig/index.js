"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _formConfig = _interopRequireDefault(require("./formConfig"));

var _default = {
  layout: 'Flex',
  title: false,
  config: {
    align: 'flex-start'
  },
  items: [{
    span: 1,
    component: 'BaseForm',
    ACTIONTYPE: 'edit',
    config: (0, _objectSpread2.default)({}, _formConfig.default, {
      permission: 'portal.footer.edit',
      localtion: true,
      API: {
        getAPI: '/api/pub/ow/pages/one/footer',
        updateAPI: '/api/ow/pages/one/footer'
      },
      REDIRECT: false
    })
  }]
};
exports.default = _default;