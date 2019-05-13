"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _router = require("dva/router");

var _kqdGeneral = require("kqd-general");

var _dec, _class;

var Index = (_dec = (0, _dva.connect)(function (_ref) {
  var content = _ref.content,
      loading = _ref.loading;
  return {
    modelStatus: content,
    namespace: 'content',
    loading: loading.models.content
  };
}), _dec(_class =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Index, _PureComponent);

  function Index() {
    (0, _classCallCheck2.default)(this, Index);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Index).apply(this, arguments));
  }

  (0, _createClass2.default)(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          match = _this$props.match,
          routerData = _this$props.routerData;
      return _react.default.createElement(_router.Switch, null, (0, _kqdGeneral.getRoutes)(match.path, routerData).map(function (item) {
        return _react.default.createElement(_router.Route, {
          key: item.key,
          path: item.path,
          component: item.component,
          exact: item.exact
        });
      }), _react.default.createElement(_router.Redirect, {
        exact: true,
        from: "/website-content",
        to: "/website-content/page"
      }));
    }
  }]);
  return Index;
}(_react.PureComponent)) || _class);
exports.default = Index;