"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletBusinessDetail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var PointsWalletBusinessDetail = function PointsWalletBusinessDetail(props) {
  var UIComponent = props.UIComponent,
      walletData = props.walletData,
      handleUpdateWalletBusiness = props.handleUpdateWalletBusiness,
      handleUpdateBusinessList = props.handleUpdateBusinessList,
      handleUpdatePointsWallet = props.handleUpdatePointsWallet,
      isBusiness = props.isBusiness,
      selectedBusinessList = props.selectedBusinessList;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];
  /**
   * Update loyalty business data
   * @param {EventTarget} evt Related HTML event
   */


  var handleChangeInput = function handleChangeInput(evt) {
    var value = evt.target.value;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, evt.target.name, value))
    }));
  };

  var handleClickSubmit = function handleClickSubmit() {
    if (Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0) return;
    if (walletData) updateLoyalty(walletData === null || walletData === void 0 ? void 0 : walletData.id, formState === null || formState === void 0 ? void 0 : formState.changes);else {
      var filteredBusiness = selectedBusinessList.filter(function (business) {
        return business.wallet_enabled;
      }).map(function (business) {
        return {
          id: business.id,
          redeems: (business === null || business === void 0 ? void 0 : business.redeems) || false,
          accumulates: (business === null || business === void 0 ? void 0 : business.accumulates) || false
        };
      });

      var loyaltyPlan = _objectSpread({
        name: 'Loyalty Point Plan',
        type: 'credit_point',
        redemption_rate: null,
        accumulation_rate: null,
        businesses: JSON.stringify(filteredBusiness)
      }, formState === null || formState === void 0 ? void 0 : formState.changes);

      addLoyaltyPlan(loyaltyPlan);
    }
  };
  /**
   * @param { Number } businessId id of loyalty business
   * @param {Object} changes data of business
   */


  var updateLoyalty = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(businessId, changes) {
      var requestOptions, fetchEndpoint, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              fetchEndpoint = isBusiness ? "".concat(ordering.root, "/loyalty_plans/").concat(walletData === null || walletData === void 0 ? void 0 : walletData.loyalty_plan_id, "/businesses/").concat(businessId) : "".concat(ordering.root, "/loyalty_plans/").concat(walletData === null || walletData === void 0 ? void 0 : walletData.id);
              _context.next = 7;
              return fetch(fetchEndpoint, requestOptions);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                showToast(_ToastContext.ToastType.Success, t('POINTS_WALLET_UPDATED', 'Points wallet updated'));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));
                handleUpdateWalletBusiness && handleUpdateWalletBusiness(result);
                handleUpdateBusinessList && handleUpdateBusinessList(changes);
                if (!isBusiness && handleUpdatePointsWallet) handleUpdatePointsWallet(result);
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }));

    return function updateLoyalty(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * @param { Number } businessId id of loyalty business
   * @param {Object} changes data of business
   */


  var addLoyaltyPlan = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(changes) {
      var requestOptions, fetchEndpoint, response, _yield$response$json2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              fetchEndpoint = "".concat(ordering.root, "/loyalty_plans");
              _context2.next = 7;
              return fetch(fetchEndpoint, requestOptions);

            case 7:
              response = _context2.sent;
              _context2.next = 10;
              return response.json();

            case 10:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                showToast(_ToastContext.ToastType.Success, t('POINTS_WALLET_CREATED', 'Points wallet created'));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));
                if (!isBusiness && handleUpdatePointsWallet) handleUpdatePointsWallet(result);
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function addLoyaltyPlan(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    setFormState: setFormState,
    handleClickSubmit: handleClickSubmit,
    handleChangeInput: handleChangeInput
  })));
};

exports.PointsWalletBusinessDetail = PointsWalletBusinessDetail;
PointsWalletBusinessDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * walletData, this must be contains an object
   */
  walletData: _propTypes.default.object,

  /**
   * Function to update wallet business
   */
  handleUpdateWalletBusiness: _propTypes.default.func,

  /**
   * Function to update business list
   */
  handleUpdateBusinessList: _propTypes.default.func,

  /**
   * Function to update points wallet
   */
  handleUpdatePointsWallet: _propTypes.default.func,

  /**
   * isBusiness, flag to check business
   */
  isBusiness: _propTypes.default.bool,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

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
PointsWalletBusinessDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};