"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _request = require("zero-element/lib/utils/request");

var _default = function _default(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  function handleBuildHTML() {
    setLoading(true);
    (0, _request.update)('/api/resource/images/replace').then(function (_ref) {
      var code = _ref.code,
          message = _ref.message;
      setLoading(false);
    });
  }

  var children = props.children;

  var _children = (0, _slicedToArray2.default)(children, 4),
      Advanced = _children[0],
      General = _children[1],
      Batch = _children[2],
      ListAction = _children[3];

  return _react.default.createElement("div", null, ListAction, _react.default.createElement(_antd.Button, {
    onClick: handleBuildHTML,
    loading: loading
  }, "\u751F\u6210 HTML"));
};

exports.default = _default;