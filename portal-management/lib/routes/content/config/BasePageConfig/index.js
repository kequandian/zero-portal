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
  preventRender: {
    '1': {
      // permission: 'portal.base.edit',
      // localtion: true,
      expectedField: 'formData',
      expectedValue: 'IS_NOT_NULL'
    }
  },
  items: [{
    span: '300px',
    component: 'MenuEdit',
    config: {
      permission: 'portal.base.edit',
      localtion: true,
      edit: false,
      API: {
        listAPI: '/api/pub/ow/pages?type=html',
        createAPI: '/api/ow/pages',
        deleteAPI: '/api/ow/pages/(id)',
        getAPI: '/api/pub/ow/pages/(id)',
        updateAPI: '/api/ow/pages/(id)'
      }
    }
  }, {
    API: {},
    span: 1,
    component: 'BaseForm',
    ACTIONTYPE: 'edit',
    config: (0, _objectSpread2.default)({}, _formConfig.default, {
      REDIRECT: false
    })
  }]
};
exports.default = _default;