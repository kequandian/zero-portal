"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _zeroElement = require("zero-element");

var _antd = require("antd");

var _BasePageConfig = _interopRequireDefault(require("./config/BasePageConfig"));

var _PageConfig = _interopRequireDefault(require("./config/PageConfig"));

var _FooterConfig = _interopRequireDefault(require("./config/FooterConfig"));

var _dec, _class;

var TabPane = _antd.Tabs.TabPane;

var Wrapped = function Wrapped(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    style: {
      padding: '16px',
      background: '#fff'
    }
  }, children);
};

var Carousels = (_dec = (0, _dva.connect)(function (_ref2) {
  var content = _ref2.content,
      loading = _ref2.loading;
  return {
    modelStatus: content,
    namespace: 'content',
    loading: loading.effects
  };
}), _dec(_class =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Carousels, _PureComponent);

  function Carousels() {
    (0, _classCallCheck2.default)(this, Carousels);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Carousels).apply(this, arguments));
  }

  (0, _createClass2.default)(Carousels, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(Wrapped, null, _react.default.createElement(_antd.Tabs, {
        defaultActiveKey: "portal",
        destroyInactiveTabPane: true
      }, _react.default.createElement(TabPane, {
        tab: "\u57FA\u7840\u9875\u9762",
        key: "portal"
      }, _react.default.createElement(Wrapped, null, _react.default.createElement(_zeroElement.ZEle, (0, _extends2.default)({}, this.props, {
        config: _BasePageConfig.default
      })))), _react.default.createElement(TabPane, {
        tab: "\u9644\u52A0\u9875\u9762",
        key: "Product"
      }, _react.default.createElement(Wrapped, null, _react.default.createElement(_zeroElement.ZEle, (0, _extends2.default)({}, this.props, {
        config: _PageConfig.default
      })))), _react.default.createElement(TabPane, {
        tab: "\u9875\u811A",
        key: "Element"
      }, _react.default.createElement(Wrapped, null, _react.default.createElement(_zeroElement.ZEle, (0, _extends2.default)({}, this.props, {
        config: _FooterConfig.default
      }))))));
    }
  }]);
  return Carousels;
}(_react.PureComponent)) || _class);
exports.default = Carousels;