"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRoutePath = setRoutePath;
exports.getRoutePath = getRoutePath;
exports.default = init;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _kqdGeneral = require("kqd-general");

var routePath = {};
var routerData = [];
var locales = [{
  zh: {}
}, {
  en: {}
}];

function getRouterData() {
  return routerData;
}

function getLocales() {
  return locales;
}

var defaultMenu = [];

function getMenu() {
  return defaultMenu;
}

function setRoutePath(data) {
  routePath = (0, _objectSpread2.default)({}, routePath, data);
}

function getRoutePath() {
  return routePath;
}

function combineLocales(res, name) {
  var currentLang;
  var locale = locales.find(function (item) {
    var result = Object.keys(item).filter(function (key) {
      return name.indexOf(key) > -1;
    });

    if (result.length > 0) {
      currentLang = result[0];
      return true;
    }

    return false;
  });

  if (locale) {
    locale[currentLang] = (0, _objectSpread2.default)({}, locale[currentLang], res);
  }
}
/**
 * account 模块的初始化入口
 * @param routePath: Object
 * @param menu: Array
 * @param headerMenu: Array
 * @return Object
 */


function init(_ref) {
  var routePath = _ref.routePath,
      menu = _ref.menu,
      headerMenu = _ref.headerMenu;
  console.log(".init:", routePath, menu, headerMenu);
  var routePathData = {};

  require.context('./routePath/', true, /\.js$/).keys().forEach(function (file) {
    var res = require("./routePath/".concat(file.slice(2))).default;

    routePathData = (0, _objectSpread2.default)({}, routePathData, res);
  });

  setRoutePath(routePathData);
  routePath && setRoutePath(routePath);
  /**
   * 绑定 model
   */

  require.context('./routerData/', true, /\.js$/).keys().forEach(function (file) {
    var res = require("./routerData/".concat(file.slice(2))).default;

    routerData.push.apply(routerData, (0, _toConsumableArray2.default)(res));
  });

  require.context('./locales/', true, /\.js$/).keys().forEach(function (file) {
    var fileName = file.slice(2); //去掉./

    var res = require("./locales/".concat(fileName)).default;

    combineLocales(res, fileName);
  });

  _kqdGeneral.locales.map(function (item) {
    Object.keys(item).map(function (key) {
      combineLocales(item[key], key);
    });
  });

  var res = {
    locales: getLocales(),
    routerData: getRouterData(),
    menu: menu ? menu : getMenu(),
    headerMenu: headerMenu ? headerMenu : []
  };
  console.log(" res = ", res);
  return res;
}