"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _zeroElement = require("zero-element");

var query = _zeroElement.requestSet.query,
    post = _zeroElement.requestSet.post,
    update = _zeroElement.requestSet.update,
    remove = _zeroElement.requestSet.remove;

var _default = (0, _zeroElement.modelExtend)(_zeroElement.baseModel, {
  namespace: 'video',
  state: {},
  reducers: {},
  effects: {
    demo:
    /*#__PURE__*/
    _regenerator.default.mark(function demo(_ref, _ref2) {
      var payload, call, put, select, API, restPayload, result;
      return _regenerator.default.wrap(function demo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              call = _ref2.call, put = _ref2.put, select = _ref2.select;
              console.log("demo");
              API = payload.API, restPayload = (0, _objectWithoutProperties2.default)(payload, ["API"]);
              _context.next = 6;
              return call(query, '/api/test', restPayload);

            case 6:
              result = _context.sent;

              if (!(result.code === 200)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return put({
                type: 'save',
                payload: {
                  demo: (0, _objectSpread2.default)({}, rest, {
                    data: result.data
                  })
                }
              });

            case 10:
              return _context.abrupt("return", true);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, demo);
    })
  }
});

exports.default = _default;