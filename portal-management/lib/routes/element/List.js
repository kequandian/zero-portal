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

var _List = _interopRequireDefault(require("./List.config"));

var _dec, _class;

var List = (_dec = (0, _dva.connect)(function (_ref) {
  var element = _ref.element,
      loading = _ref.loading;
  return {
    modelStatus: element,
    namespace: 'element',
    loading: loading.effects
  };
}), _dec(_class =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(List, _PureComponent);

  function List() {
    (0, _classCallCheck2.default)(this, List);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
  }

  (0, _createClass2.default)(List, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_zeroElement.ZEle, (0, _extends2.default)({}, this.props, {
        config: _List.default,
        CPortal: {
          'BatchOperation': function BatchOperation() {
            return null;
          }
        }
      }));
    }
  }]);
  return List;
}(_react.PureComponent)) || _class);
exports.default = List;