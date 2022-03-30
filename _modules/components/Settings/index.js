"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settings = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var categoryHideList = ['cloudinary', 'tookan', 'apple_login', 'order_messages', 'others', 'location'];
var configHideList = ['search_by_address', 'distance_unit_km', 'pickup', 'orders_metafields_strategy', 'order_validate', 'time_format', 'driver_close_distance', 'lazy_load_products_when_necessary'];
/**
 * Component to manage Settings page behavior without UI component
 */

var Settings = function Settings(props) {
  var UIComponent = props.UIComponent,
      settingsType = props.settingsType;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    categories: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      categoryList = _useState2[0],
      setCategoryList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isUpdateConfig = _useState4[0],
      setIsUpdateConfig = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      parentId = _useState6[0],
      setParentId = _useState6[1];
  /**
   * Method to update the category
   */


  var handleUpdateCategoryList = function handleUpdateCategoryList(categories) {
    setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
      categories: categories
    }));
    setIsUpdateConfig(true);
  };
  /**
   * Method to get parent categoryid
   */


  var getParentCategory = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, filterConditons, functionFetch, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              filterConditons = [];
              filterConditons.push({
                attribute: 'key',
                value: settingsType
              });
              functionFetch = "".concat(ordering.root, "/config_categories?where=").concat(JSON.stringify(filterConditons));
              _context.next = 10;
              return fetch(functionFetch, requestOptions);

            case 10:
              response = _context.sent;
              _context.next = 13;
              return response.json();

            case 13:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error && result.length > 0) {
                setParentId(result[0].id);
              } else {
                setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](2);
              setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
                loading: false,
                error: _context.t0
              }));

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 19]]);
    }));

    return function getParentCategory() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get Configration List
   */


  var getCagegories = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, filterConditons, functionFetch, response, _yield$response$json2, error, result, _result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!loading) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              filterConditons = [];
              filterConditons.push({
                attribute: 'parent_category_id',
                value: parseInt(parentId)
              });
              functionFetch = "".concat(ordering.root, "/config_categories?orderBy=id&where=").concat(JSON.stringify(filterConditons));
              _context2.next = 10;
              return fetch(functionFetch, requestOptions);

            case 10:
              response = _context2.sent;
              _context2.next = 13;
              return response.json();

            case 13:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                _result = result.filter(function (setting) {
                  return !categoryHideList.includes(setting.key);
                }).map(function (setting) {
                  var _setting$configs;

                  var configs = (_setting$configs = setting.configs) === null || _setting$configs === void 0 ? void 0 : _setting$configs.filter(function (config) {
                    return !configHideList.includes(config.key);
                  }).sort(function (a, b) {
                    return a.rank * 1 > b.rank * 1 ? 1 : -1;
                  });
                  return _objectSpread(_objectSpread({}, setting), {}, {
                    configs: _toConsumableArray(configs)
                  });
                });
                setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
                  loading: false,
                  categories: _result
                }));
              } else {
                setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
                  loading: true,
                  error: result
                }));
              }

              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](2);
              setCategoryList(_objectSpread(_objectSpread({}, categoryList), {}, {
                loading: false,
                error: _context2.t0
              }));

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 19]]);
    }));

    return function getCagegories() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getParentCategory();
  }, []);
  (0, _react.useEffect)(function () {
    if (parentId) getCagegories(parentId);
  }, [parentId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isUpdateConfig: isUpdateConfig,
    handChangeConfig: setIsUpdateConfig,
    categoryList: categoryList,
    handleUpdateCategoryList: handleUpdateCategoryList
  })));
};

exports.Settings = Settings;
Settings.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Number to idenity setting group
   */
  settingsType: _propTypes.default.string,

  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Settings.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};