"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _SessionContext = require("../../contexts/SessionContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_utc.default);
_dayjs.default.extend(_timezone.default);
var OrdersFilter = function OrdersFilter(props) {
  var UIComponent = props.UIComponent,
    filterValues = props.filterValues,
    setFilterValues = props.setFilterValues,
    handleFilterValues = props.handleFilterValues;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;

  /**
   * Changer order Id
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeOrderId = function handleChangeOrderId(e) {
    var orderId = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      orderId: orderId
    }));
  };

  /**
   * Changer external Id
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeExternalId = function handleChangeExternalId(e) {
    var _e$target;
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      externalId: e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value
    }));
  };

  /**
   * Changer filter value
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeMetaFieldValue = function handleChangeMetaFieldValue(e, id) {
    var metafield = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
      if (id === item.id) {
        return _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, e.target.name, e.target.value));
      }
      return item;
    });
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      metafield: metafield
    }));
  };
  var handleAddMetaField = function handleAddMetaField(item) {
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      metafield: [].concat(_toConsumableArray(filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield), [item])
    }));
  };
  var handleDeleteMetafield = function handleDeleteMetafield(id) {
    var metafield = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.filter(function (item) {
      return item.id !== id;
    });
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      metafield: metafield
    }));
  };

  /**
   * Change group type
   * * @param {object} groupType Group type
   */
  var handleChangeGroup = function handleChangeGroup(groupType) {
    var _groupTypes = _toConsumableArray(filterValues.driverGroupBusinessIds);
    if (!_groupTypes.includes(groupType)) {
      _groupTypes.push(groupType);
    } else {
      _groupTypes = _groupTypes.filter(function (type) {
        return type !== groupType;
      });
    }

    // setGroupDriverIds(_driverIds)
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      driverGroupBusinessIds: _groupTypes
    }));
  };

  /**
  * Change group type
  * * @param {object} groupTypeUnassigned Group type unassigned
  */
  var handleChangeGroupUnassigned = function handleChangeGroupUnassigned(groupTypeUnassigned) {
    var _groupTypesUnassigned = _toConsumableArray(filterValues.groupTypesUnassigned);
    if (!_groupTypesUnassigned.includes(groupTypeUnassigned)) {
      _groupTypesUnassigned.push(groupTypeUnassigned);
    } else {
      _groupTypesUnassigned = _groupTypesUnassigned.filter(function (type) {
        return type !== groupTypeUnassigned;
      });
    }

    // setGroupDriverIds(_driverIds)
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      groupTypesUnassigned: _groupTypesUnassigned
    }));
  };
  /**
   * Change date type
   * * @param {string} dateType date type
  */
  var handleChangeDateType = function handleChangeDateType(dateType) {
    var now = (0, _dayjs.default)();
    switch (dateType) {
      case 'default':
        setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
          dateType: 'default',
          deliveryFromDatetime: null,
          deliveryEndDatetime: null
        }));
        break;
      case 'today':
        {
          var todayDatetime;
          if (user !== null && user !== void 0 && user.timezone && (user === null || user === void 0 ? void 0 : user.timezone) !== 'UTC') {
            var nowInUserTimezone = now.tz(user === null || user === void 0 ? void 0 : user.timezone).startOf('day');
            todayDatetime = nowInUserTimezone.utc().format('YYYY-MM-DD HH:mm:ss');
          } else {
            var today = now.format('YYYY-MM-DD');
            todayDatetime = (0, _dayjs.default)(today).format('YYYY-MM-DD HH:mm:ss');
          }
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'today',
            deliveryFromDatetime: todayDatetime,
            deliveryEndDatetime: null
          }));
          break;
        }
      case 'yesterday':
        {
          var yesterFrom;
          var yesterEnd;
          if (user !== null && user !== void 0 && user.timezone && (user === null || user === void 0 ? void 0 : user.timezone) !== 'UTC') {
            var yesterdayInUserTimezone = now.tz(user === null || user === void 0 ? void 0 : user.timezone).subtract(1, 'day').startOf('day');
            yesterFrom = yesterdayInUserTimezone.utc().format('YYYY-MM-DD HH:mm:ss');
            yesterEnd = yesterdayInUserTimezone.endOf('day').utc().format('YYYY-MM-DD HH:mm:ss');
          } else {
            var yesterday = now.subtract(1, 'day');
            yesterFrom = (0, _dayjs.default)(yesterday).format('YYYY-MM-DD 00:00:00');
            yesterEnd = (0, _dayjs.default)(yesterday).endOf('day').format('YYYY-MM-DD 23:59:59');
          }
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'yesterday',
            deliveryFromDatetime: yesterFrom,
            deliveryEndDatetime: yesterEnd
          }));
          break;
        }
      case 'last7':
        {
          var last7day = now.subtract('7', 'day').format('YYYY-MM-DD');
          var last7Datetime = (0, _dayjs.default)(last7day).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'last7',
            deliveryFromDatetime: last7Datetime,
            deliveryEndDatetime: null
          }));
          break;
        }
      case 'last30':
        {
          var last30day = now.subtract('30', 'day').format('YYYY-MM-DD');
          var last30Datetime = (0, _dayjs.default)(last30day).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'last30',
            deliveryFromDatetime: last30Datetime,
            deliveryEndDatetime: null
          }));
          break;
        }
      case 'term':
        setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
          dateType: 'term',
          deliveryFromDatetime: null,
          deliveryEndDatetime: null
        }));
    }
  };
  /**
   * Change start date
   * * @param {date} fromDate start date
  */
  var handleChangeFromDate = function handleChangeFromDate(fromDate) {
    var fromDatetime;
    if (fromDate !== null) {
      fromDatetime = (0, _dayjs.default)(fromDate).format('YYYY-MM-DD HH:mm:ss');
    } else {
      fromDatetime = null;
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryFromDatetime: fromDatetime
    }));
  };
  /**
   * Change end date
   * * @param {date} endDate end date
  */
  var handleChangeEndDate = function handleChangeEndDate(endDate) {
    var endDatetime;
    if (endDate !== null) {
      endDatetime = (0, _dayjs.default)(endDate).format('YYYY-MM-DD HH:mm:ss');
    } else {
      endDatetime = null;
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryEndDatetime: endDatetime
    }));
  };
  /**
   * Change businesses
   * * @param {number} businessId business id
  */
  var handleChangeBusinesses = function handleChangeBusinesses(businessId) {
    var _businessIds = _toConsumableArray(filterValues.businessIds);
    if (!_businessIds.includes(businessId)) {
      _businessIds.push(businessId);
    } else {
      _businessIds = _businessIds.filter(function (_businessId) {
        return _businessId !== businessId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      businessIds: _businessIds
    }));
  };
  /**
   * Change driver
   * * @param {number} driverId driver id
  */
  var handleChangeDriver = function handleChangeDriver(driverId) {
    var _driverIds = _toConsumableArray(filterValues.driverIds);
    if (!_driverIds.includes(driverId)) {
      _driverIds.push(driverId);
    } else {
      _driverIds = _driverIds.filter(function (id) {
        return id !== driverId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      driverIds: _driverIds
    }));
  };
  /**
   * Change city
   * * @param {number} cityId city id of business
  */
  var handleChangeCity = function handleChangeCity(cityId) {
    var _cityIds = _toConsumableArray(filterValues.cityIds);
    if (!_cityIds.includes(cityId)) {
      _cityIds.push(cityId);
    } else {
      _cityIds = _cityIds.filter(function (_cityId) {
        return _cityId !== cityId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      cityIds: _cityIds
    }));
  };
  /**
   * Change country code
   * * @param {string} code code of country
  */
  var handleChangeCountryCode = function handleChangeCountryCode(code) {
    var _countryCode = _toConsumableArray(filterValues.countryCode);
    if (!_countryCode.includes(code)) {
      _countryCode.push(code);
    } else {
      _countryCode = _countryCode.filter(function (_code) {
        return _code !== code;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      countryCode: _countryCode
    }));
  };

  /**
   * Change currency
   * * @param {string} code code of country
  */
  var handleChangeCurrency = function handleChangeCurrency(code) {
    var _currency = _toConsumableArray(filterValues.currency);
    if (!_currency.includes(code)) {
      _currency.push(code);
    } else {
      _currency = _currency.filter(function (_code) {
        return _code !== code;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      currency: _currency
    }));
  };

  /**
   * Change order status
   * * @param {number} status status
  */
  var handleChangeOrderStatus = function handleChangeOrderStatus(status) {
    var _statuses = _toConsumableArray(filterValues.statuses);
    if (!_statuses.includes(status)) {
      _statuses.push(status);
    } else {
      _statuses = _statuses.filter(function (_status) {
        return _status !== status;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      statuses: _statuses
    }));
  };
  /**
   * Change delivery type
   * * @param {number} deliveryType delivery type
  */
  var handleChangeDeliveryType = function handleChangeDeliveryType(deliveryType) {
    var _deliveryTypes = _toConsumableArray(filterValues.deliveryTypes);
    if (!_deliveryTypes.includes(deliveryType)) {
      _deliveryTypes.push(deliveryType);
    } else {
      _deliveryTypes = _deliveryTypes.filter(function (_deliveryType) {
        return _deliveryType !== deliveryType;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryTypes: _deliveryTypes
    }));
  };
  /**
   * Change paymethod type
   * * @param {number} paymethodId paymethod Id
  */
  var handleChangePaymethodType = function handleChangePaymethodType(paymethodId) {
    var _paymethodIds = _toConsumableArray(filterValues.paymethodIds);
    if (!_paymethodIds.includes(paymethodId)) {
      _paymethodIds.push(paymethodId);
    } else {
      _paymethodIds = _paymethodIds.filter(function (_paymethodId) {
        return _paymethodId !== paymethodId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      paymethodIds: _paymethodIds
    }));
  };
  /**
   * Change filter values
   * * @param {Object} changes filter value changes
  */
  var handleChangeChildFilterValue = function handleChangeChildFilterValue(changes) {
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), changes));
  };

  /**
   * Changer offer Id
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeOfferId = function handleChangeOfferId(e) {
    var offerId = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      offerId: offerId
    }));
  };

  /**
   * Change admin
   * * @param {number} adminID admin id
  */
  var handleChangeAdmin = function handleChangeAdmin(adminId) {
    var _adminIds = _toConsumableArray(filterValues.administratorIds);
    if (!_adminIds.includes(adminId)) {
      _adminIds.push(adminId);
    } else {
      _adminIds = _adminIds.filter(function (id) {
        return id !== adminId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      administratorIds: _adminIds
    }));
  };

  /**
   * Reset filter values
  */
  var handleResetFilterValues = function handleResetFilterValues() {
    var initialValues = {
      orderId: null,
      externalId: null,
      groupTypes: [],
      groupTypesUnassigned: [],
      dateType: null,
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      businessIds: [],
      driverIds: [],
      driverGroupIds: [],
      cityIds: [],
      statuses: [],
      deliveryTypes: [],
      paymethodIds: [],
      countryCode: [],
      currency: [],
      metafield: [],
      logisticStatus: null,
      assigned: null,
      driverGroupBusinessIds: [],
      customerName: null,
      customerEmail: null,
      customerCellphone: null,
      customerLastname: null,
      administratorIds: [],
      coupon: null,
      offerId: null
    };
    setFilterValues(initialValues);
    handleFilterValues(initialValues);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleChangeOrderId: handleChangeOrderId,
    handleChangeGroup: handleChangeGroup,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate,
    handleChangeBusinesses: handleChangeBusinesses,
    handleChangeDriver: handleChangeDriver,
    handleChangeCity: handleChangeCity,
    handleChangeOrderStatus: handleChangeOrderStatus,
    handleChangeDeliveryType: handleChangeDeliveryType,
    handleChangePaymethodType: handleChangePaymethodType,
    handleResetFilterValues: handleResetFilterValues,
    handleChangeCountryCode: handleChangeCountryCode,
    handleChangeCurrency: handleChangeCurrency,
    handleChangeMetaFieldValue: handleChangeMetaFieldValue,
    handleAddMetaField: handleAddMetaField,
    handleDeleteMetafield: handleDeleteMetafield,
    handleChangeExternalId: handleChangeExternalId,
    handleChangeChildFilterValue: handleChangeChildFilterValue,
    handleChangeGroupUnassigned: handleChangeGroupUnassigned,
    handleChangeAdmin: handleChangeAdmin,
    handleChangeOfferId: handleChangeOfferId
  })));
};
exports.OrdersFilter = OrdersFilter;
OrdersFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array that contains business types to filter
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
OrdersFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};