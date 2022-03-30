"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardsPrograms = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RewardsPrograms = function RewardsPrograms(props) {
  var UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useState = (0, _react.useState)({
    loading: true,
    error: null,
    loyaltyPlans: [],
    pagination: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      loyaltyPlanList = _useState2[0],
      setLoyaltyPlanList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      pointWallet = _useState4[0],
      setPointWallet = _useState4[1];
  /**
   * Method to update the pointsWallet business
   */


  var handleUpdateWalletBusiness = function handleUpdateWalletBusiness(result) {
    var businesses = pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.businesses.map(function (business) {
      if (business.id === result.id) {
        return _objectSpread(_objectSpread({}, business), result);
      }

      return business;
    });
    setPointWallet(_objectSpread(_objectSpread({}, pointWallet), {}, {
      businesses: businesses
    }));
  };
  /**
   * Method to add the pointsWallet business
   */


  var handleAddWalletBusiness = function handleAddWalletBusiness(result) {
    var businesses = [].concat(_toConsumableArray(pointWallet === null || pointWallet === void 0 ? void 0 : pointWallet.businesses), [result]);
    setPointWallet(_objectSpread(_objectSpread({}, pointWallet), {}, {
      businesses: businesses
    }));
  };
  /**
   * Method to add the pointsWallet business
   */


  var handleDeleteWalletBusiness = function handleDeleteWalletBusiness(result) {
    var _pointWallet$business;

    var businesses = pointWallet === null || pointWallet === void 0 ? void 0 : (_pointWallet$business = pointWallet.businesses) === null || _pointWallet$business === void 0 ? void 0 : _pointWallet$business.filter(function (business) {
      return business.id !== result.id;
    });
    setPointWallet(_objectSpread(_objectSpread({}, pointWallet), {}, {
      businesses: businesses
    }));
  };
  /**
   * Method to update the pointsWallet
   */


  var handleUpdatePointsWallet = function handleUpdatePointsWallet(changes) {
    setPointWallet(_objectSpread({}, changes));
  };
  /**
   * Method to get loyalty plans from API
   */


  var getLoyaltyPlans = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, functionFetch, response, _yield$response$json, error, result, pagination;

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
              setLoyaltyPlanList(_objectSpread(_objectSpread({}, loyaltyPlanList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = "".concat(ordering.root, "/loyalty_plans");
              _context.next = 8;
              return fetch(functionFetch, requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;
              pagination = _yield$response$json.pagination;

              if (!error) {
                setLoyaltyPlanList(_objectSpread(_objectSpread({}, loyaltyPlanList), {}, {
                  loading: false,
                  loyaltyPlans: result,
                  pagination: pagination
                }));
              } else {
                setLoyaltyPlanList(_objectSpread(_objectSpread({}, loyaltyPlanList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](2);
              setLoyaltyPlanList(_objectSpread(_objectSpread({}, loyaltyPlanList), {}, {
                loading: false,
                error: _context.t0
              }));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 18]]);
    }));

    return function getLoyaltyPlans() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getLoyaltyPlans();
  }, []);
  (0, _react.useEffect)(function () {
    var _loyaltyPlanList$loya;

    if ((loyaltyPlanList === null || loyaltyPlanList === void 0 ? void 0 : (_loyaltyPlanList$loya = loyaltyPlanList.loyaltyPlans) === null || _loyaltyPlanList$loya === void 0 ? void 0 : _loyaltyPlanList$loya.length) === 0) return;
    var loyalty = loyaltyPlanList === null || loyaltyPlanList === void 0 ? void 0 : loyaltyPlanList.loyaltyPlans.find(function (plan) {
      return plan.type === 'credit_point';
    });
    if (loyalty) setPointWallet(_objectSpread({}, loyalty));
  }, [loyaltyPlanList === null || loyaltyPlanList === void 0 ? void 0 : loyaltyPlanList.loyaltyPlans]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    loyaltyPlanList: loyaltyPlanList,
    pointWallet: pointWallet,
    handleUpdateWalletBusiness: handleUpdateWalletBusiness,
    handleUpdatePointsWallet: handleUpdatePointsWallet,
    handleAddWalletBusiness: handleAddWalletBusiness,
    handleDeleteWalletBusiness: handleDeleteWalletBusiness
  })));
};

exports.RewardsPrograms = RewardsPrograms;
RewardsPrograms.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
RewardsPrograms.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};