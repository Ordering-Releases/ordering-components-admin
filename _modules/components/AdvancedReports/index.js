"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedReports = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage Advance Reports page behavior without UI component
 */
var AdvancedReports = function AdvancedReports(props) {
  var UIComponent = props.UIComponent,
      endpoint = props.endpoint,
      endpoint1 = props.endpoint1;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useState = (0, _react.useState)({
    content: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessDistanceList = _useState2[0],
      setBusinessDistanceList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    content: [],
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      businessDistanceList1 = _useState4[0],
      setBusinessDistanceList1 = _useState4[1];

  var _useState5 = (0, _react.useState)({
    from: '',
    to: '',
    businessIds: null,
    drivers_ids: null,
    franchises_id: null,
    driver_companies_ids: null,
    driver_groups_ids: null,
    delivery_types_ids: null,
    app_ids: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      filterList = _useState6[0],
      setFilterList = _useState6[1];
  /**
   * Function to get Business distance list from API
   */


  var getBusinessDistanceList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, params, functionFetch, response, _yield$response$json, error, result;

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
              setBusinessDistanceList(_objectSpread(_objectSpread({}, businessDistanceList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              params = '';
              if ((filterList === null || filterList === void 0 ? void 0 : filterList.from) !== '' && (filterList === null || filterList === void 0 ? void 0 : filterList.to) !== '') params = "from=".concat((0, _dayjs.default)(filterList === null || filterList === void 0 ? void 0 : filterList.from).format('YYYY-MM-DD'), " 00:00:00&to=").concat((0, _dayjs.default)(filterList === null || filterList === void 0 ? void 0 : filterList.to).format('YYYY-MM-DD'), " 23:59:59");
              if (filterList !== null && filterList !== void 0 && filterList.businessIds && (filterList === null || filterList === void 0 ? void 0 : filterList.businessIds.length) > 0) params = "".concat(params, "&businesses_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.businessIds));
              if (filterList !== null && filterList !== void 0 && filterList.drivers_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids.length) > 0) params = "".concat(params, "&drivers_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids));
              if (filterList !== null && filterList !== void 0 && filterList.franchises_id && (filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id.length) > 0) params = "".concat(params, "&franchises_id=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id));
              if (filterList !== null && filterList !== void 0 && filterList.driver_companies_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.driver_companies_ids.length) > 0) params = "".concat(params, "&driver_companies_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.driver_companies_ids));
              if (filterList !== null && filterList !== void 0 && filterList.driver_groups_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.driver_groups_ids.length) > 0) params = "".concat(params, "&driver_groups_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.driver_groups_ids));
              if (filterList !== null && filterList !== void 0 && filterList.delivery_types_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.delivery_types_ids.length) > 0) params = "".concat(params, "&delivery_types_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.delivery_types_ids));
              if (filterList !== null && filterList !== void 0 && filterList.app_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.app_ids.length) > 0) params = "".concat(params, "&app_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.app_ids));
              functionFetch = "".concat(ordering.root, "/reports/").concat(endpoint, "?").concat(params);
              _context.next = 17;
              return fetch(functionFetch, requestOptions);

            case 17:
              response = _context.sent;
              _context.next = 20;
              return response.json();

            case 20:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setBusinessDistanceList(_objectSpread(_objectSpread({}, businessDistanceList), {}, {
                  loading: false,
                  content: result
                }));
              } else {
                setBusinessDistanceList(_objectSpread(_objectSpread({}, businessDistanceList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](2);
              setBusinessDistanceList(_objectSpread(_objectSpread({}, businessDistanceList), {}, {
                loading: false,
                error: _context.t0
              }));

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 26]]);
    }));

    return function getBusinessDistanceList() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Function to get Business report data list from API
   */


  var getReportsData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, params, functionFetch, response, _yield$response$json2, error, result;

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
              setBusinessDistanceList1(_objectSpread(_objectSpread({}, businessDistanceList1), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              params = '';
              if ((filterList === null || filterList === void 0 ? void 0 : filterList.from) !== '' && (filterList === null || filterList === void 0 ? void 0 : filterList.to) !== '') params = "from=".concat((0, _dayjs.default)(filterList === null || filterList === void 0 ? void 0 : filterList.from).format('YYYY-MM-DD'), " 00:00:00&to=").concat((0, _dayjs.default)(filterList === null || filterList === void 0 ? void 0 : filterList.to).format('YYYY-MM-DD'), " 23:59:59");
              if (filterList !== null && filterList !== void 0 && filterList.businessIds && (filterList === null || filterList === void 0 ? void 0 : filterList.businessIds.length) > 0) params = "".concat(params, "&businesses_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.businessIds));
              if (filterList !== null && filterList !== void 0 && filterList.drivers_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids.length) > 0) params = "".concat(params, "&drivers_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.drivers_ids));
              if (filterList !== null && filterList !== void 0 && filterList.franchises_id && (filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id.length) > 0) params = "".concat(params, "&franchises_id=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id));
              if (filterList !== null && filterList !== void 0 && filterList.driver_companies_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.driver_companies_ids.length) > 0) params = "".concat(params, "&driver_companies_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.driver_companies_ids));
              if (filterList !== null && filterList !== void 0 && filterList.driver_groups_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.driver_groups_ids.length) > 0) params = "".concat(params, "&driver_groups_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.driver_groups_ids));
              if (filterList !== null && filterList !== void 0 && filterList.delivery_types_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.delivery_types_ids.length) > 0) params = "".concat(params, "&delivery_types_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.delivery_types_ids));
              if (filterList !== null && filterList !== void 0 && filterList.app_ids && (filterList === null || filterList === void 0 ? void 0 : filterList.app_ids.length) > 0) params = "".concat(params, "&app_ids=").concat(JSON.stringify(filterList === null || filterList === void 0 ? void 0 : filterList.app_ids));
              functionFetch = "".concat(ordering.root, "/reports/").concat(endpoint1, "?").concat(params);
              _context2.next = 17;
              return fetch(functionFetch, requestOptions);

            case 17:
              response = _context2.sent;
              _context2.next = 20;
              return response.json();

            case 20:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                setBusinessDistanceList1(_objectSpread(_objectSpread({}, businessDistanceList1), {}, {
                  loading: false,
                  content: result
                }));
              } else {
                setBusinessDistanceList1(_objectSpread(_objectSpread({}, businessDistanceList1), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context2.next = 29;
              break;

            case 26:
              _context2.prev = 26;
              _context2.t0 = _context2["catch"](2);
              setBusinessDistanceList1(_objectSpread(_objectSpread({}, businessDistanceList1), {}, {
                loading: false,
                error: _context2.t0
              }));

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 26]]);
    }));

    return function getReportsData() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getBusinessDistanceList();
    if (endpoint1) getReportsData();
  }, [filterList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    filterList: filterList,
    handleChangeFilterList: setFilterList,
    reportData: businessDistanceList,
    reportData1: businessDistanceList1
  })));
};

exports.AdvancedReports = AdvancedReports;
AdvancedReports.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * String to send API request
   */
  endpoint: _propTypes.default.string,

  /**
   * String to send API request
   */
  endpoint1: _propTypes.default.string,

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
AdvancedReports.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};