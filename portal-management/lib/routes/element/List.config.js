"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _Form = _interopRequireDefault(require("./Form.config"));

var _default = {
  layout: 'Grid',
  title: '成分党管理列表',
  items: [{
    span: 24,
    layout: 'DefaultSearch',
    component: 'BaseSearch',
    config: {
      fields: [{
        field: 'name',
        label: '名称',
        type: 'input'
      }],
      actions: [{
        title: '新增',
        type: 'modal',
        options: {
          items: [{
            layout: 'DefaultForm',
            component: 'BaseForm',
            permission: 'portal.menu.add',
            localtion: true,
            config: (0, _objectSpread2.default)({
              ACTIONTYPE: 'create',
              API: {
                createAPI: '/api/ow/menus/element'
              }
            }, _Form.default)
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
        listAPI: '/api/pub/ow/elements',
        deleteAPI: '/api/ow/menus/(id)'
      },
      fields: [{
        field: 'name',
        label: '名称'
      }, {
        field: 'seq',
        label: '排序'
      }, {
        field: 'note',
        label: '备注'
      }],
      operation: [{
        title: '编辑',
        action: 'modal',
        options: {
          outside: true,
          modalTitle: '编辑成分党',
          ACTIONTYPE: 'edit',
          items: [{
            layout: 'DefaultForm',
            component: 'BaseForm',
            config: (0, _objectSpread2.default)({
              API: {
                getAPI: '/api/pub/ow/menus/(id)',
                updateAPI: '/api/ow/menus/(id)'
              }
            }, _Form.default)
          }]
        }
      }, {
        title: '删除',
        action: 'delete'
      }]
    }
  }]
};
exports.default = _default;