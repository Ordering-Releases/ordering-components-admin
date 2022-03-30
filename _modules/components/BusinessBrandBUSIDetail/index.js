"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBrandBUSIDetail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _ToastContext = require("../../contexts/ToastContext");

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

/**
 * Component to manage BusinessBrandBUSIDetail behavior without UI component
 */
var BusinessBrandBUSIDetail = function BusinessBrandBUSIDetail(props) {
  var UIComponent = props.UIComponent,
      propsToFetch = props.propsToFetch,
      isSearchByName = props.isSearchByName;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    businesses: [],
    result: {
      error: null
    }
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      businessList = _useState4[0],
      setBusinessList = _useState4[1];

  var rex = new RegExp(/^[A-Za-z0-9\s]+$/g);

  var handleChangeCheckBox = function handleChangeCheckBox(e, businessId, brandId) {
    var changes = {
      franchise_id: brandId
    };
    if (!e.target.checked) changes = {
      franchise_id: null
    };
    updateBusinessList(businessId, changes);
  };

  var handleSelectAllBusinesses = function handleSelectAllBusinesses(isAll, brandId) {
    var changes;
    var _businesses = [];

    if (isAll) {
      changes = {
        franchise_id: brandId
      };
      businessList.businesses.forEach(function (business) {
        if (business.franchise_id !== brandId) {
          updateBusinessList(business.id, changes);
          business.franchise_id = brandId;
        }

        _businesses.push(business);
      });
    } else {
      changes = {
        franchise_id: null
      };
      businessList.businesses.forEach(function (business) {
        if (business.franchise_id !== null) {
          updateBusinessList(business.id, changes);
          business.franchise_id = null;
        }

        _businesses.push(business);
      });
    }

    setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
      businesses: _businesses
    }));
  };
  /**
   * Method to get business list from API
   */


  var getBusinessList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var where, conditions, searchConditions, isSpecialCharacter, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: true
              }));
              where = null;
              conditions = [];

              if (searchValue) {
                searchConditions = [];
                isSpecialCharacter = rex.test(searchValue);

                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: !isSpecialCharacter ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              fetchEndpoint = where ? ordering.businesses().asDashboard().select(propsToFetch).where(where) : ordering.businesses().asDashboard().select(propsToFetch);
              _context.next = 9;
              return fetchEndpoint.get();

            case 9:
              _yield$fetchEndpoint$ = _context.sent;
              _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
              error = _yield$fetchEndpoint$2.error;
              result = _yield$fetchEndpoint$2.result;
              pagination = _yield$fetchEndpoint$2.pagination;

              if (!error) {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  businesses: result,
                  pagination: pagination
                }));
              } else {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_context.t0 || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.toString()) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message)]
              }));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    return function getBusinessList() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to update business list from API
   */


  var updateBusinessList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(id, changes) {
      var _yield$ordering$busin, _yield$ordering$busin2, error, result, _businesses;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              _context2.next = 4;
              return ordering.businesses(parseInt(id)).save(changes);

            case 4:
              _yield$ordering$busin = _context2.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;

              if (!error) {
                _businesses = businessList === null || businessList === void 0 ? void 0 : businessList.businesses.map(function (business) {
                  if (business.id === id) {
                    return _objectSpread(_objectSpread({}, business), {}, {
                      franchise_id: result.franchise_id
                    });
                  }

                  return business;
                });
                setBusinessList(function (preBusinessList) {
                  return _objectSpread(_objectSpread({}, preBusinessList), {}, {
                    businesses: _businesses
                  });
                });
                showToast(_ToastContext.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0 || (_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.toString()) || (_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function updateBusinessList(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getBusinessList();
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    searchValue: searchValue,
    onSearch: setSearchValue,
    businessList: businessList,
    handleChangeCheckBox: handleChangeCheckBox,
    handleSelectAllBusinesses: handleSelectAllBusinesses
  })));
};

exports.BusinessBrandBUSIDetail = BusinessBrandBUSIDetail;
BusinessBrandBUSIDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

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
BusinessBrandBUSIDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
};