"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _formConfig = _interopRequireDefault(require("./formConfig"));

var _default = {
  layout: 'Grid',
  title: false,
  // 会员中心轮播图
  items: [{
    span: 24,
    layout: 'DefaultSearch',
    component: 'BaseSearch',
    config: {
      fields: [],
      actions: [{
        title: '新增图片',
        type: 'modal',
        options: {
          permission: 'portal.carousel.add',
          localtion: true,
          modalTitle: '新增图片',
          items: [{
            span: 24,
            layout: 'DefaultForm',
            component: 'BaseForm',
            config: (0, _objectSpread2.default)({
              ACTIONTYPE: 'create',
              API: {
                createAPI: '/api/banner/VIPCenter'
              }
            }, _formConfig.default)
          }]
        }
      }]
    }
  }, {
    span: 24,
    layout: 'DefaultList',
    component: 'BaseList',
    config: {
      API: {
        listAPI: '/api/pub/banner/records/VIPCenter',
        deleteAPI: '/api/banner/(id)'
      },
      fields: [{
        field: 'name',
        label: '名称'
      }, {
        field: 'enabled',
        label: '启用'
      }],
      operation: [{
        title: '编辑',
        action: 'modal',
        options: {
          outside: true,
          permission: 'portal.carousel.edit',
          localtion: true,
          modalTitle: '编辑图片',
          ACTIONTYPE: 'edit',
          items: [{
            layout: 'DefaultForm',
            component: 'BaseForm',
            config: (0, _objectSpread2.default)({
              API: {
                getAPI: '/api/pub/banner/(id)',
                updateAPI: '/api/banner/(id)'
              }
            }, _formConfig.default)
          }]
        }
      }, {
        title: '删除',
        action: 'delete',
        options: {
          permission: 'portal.carousel.delete',
          localtion: true
        }
      }]
    }
  }]
};
exports.default = _default;