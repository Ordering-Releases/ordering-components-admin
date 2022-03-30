"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var DriversGroupDetails = function DriversGroupDetails(props) {
  var UIComponent = props.UIComponent,
      driversGroupsState = props.driversGroupsState,
      setDriversGroupsState = props.setDriversGroupsState,
      curDriversGroup = props.curDriversGroup,
      driversManagers = props.driversManagers,
      businesses = props.businesses,
      paymethods = props.paymethods,
      drivers = props.drivers,
      companies = props.companies;

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
    driversGroup: props.curDriversGroup,
    loading: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      driversGroupState = _useState2[0],
      setDriversGroupState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      actionState = _useState4[0],
      setActionState = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      changesState = _useState6[0],
      setChangesState = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedBusinessIds = _useState8[0],
      setSelectedBusinessIds = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedPaymethodIds = _useState10[0],
      setSelectedPaymethodIds = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedDriverIds = _useState12[0],
      setSelectedDriverIds = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedDriversCompanyIds = _useState14[0],
      setSelectedDriversCompanyIds = _useState14[1];
  /**
   * Method to update selected drivers group from API
   * @param {Object} changes
   */


  var handleUpdateDriversGroup = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(changes) {
      var requestOptions, response, content, groups;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context.next = 6;
              return fetch("".concat(ordering.root, "/drivergroups/").concat(curDriversGroup.id), requestOptions);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              content = _context.sent;

              if (!content.error) {
                setActionState({
                  error: null,
                  loading: false
                });
                groups = driversGroupsState.groups.filter(function (group) {
                  if (group.id === curDriversGroup.id) {
                    Object.assign(group, content.result);
                  }

                  return true;
                });
                setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                  groups: groups
                }));
                showToast(_ToastContext.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
                setDriversGroupState(_objectSpread(_objectSpread({}, driversGroupState), {}, {
                  driversGroup: content.result
                }));
                setChangesState({});
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setActionState({
                loading: false,
                error: [_context.t0.message]
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function handleUpdateDriversGroup(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the drivers group from API
   */


  var handleDeleteDriversGroup = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, response, content, groups;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/drivergroups/").concat(curDriversGroup.id), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                groups = driversGroupsState.groups.filter(function (group) {
                  return group.id !== curDriversGroup.id;
                });
                setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                  groups: groups
                }));
                showToast(_ToastContext.ToastType.Success, t('DRIVER_GROUP_DELETED', 'Driver group deleted'));
                props.onClose && props.onClose();
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setActionState({
                loading: false,
                error: [_context2.t0.message]
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function handleDeleteDriversGroup() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to add new drivers group from API
   */


  var handleAddDriversGroup = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var extraAttributes, changes, requestOptions, response, content, _content$result, newGroup, newAdmin, groups;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState({
                loading: true,
                error: null
              });
              extraAttributes = {
                enabled: true,
                autoassign_amount_drivers: 1,
                autoassign_autoaccept_by_driver: false,
                autoassign_autoreject_time: 30,
                autoassign_increment_radius: 100,
                autoassign_initial_radius: 500,
                autoassign_max_in_accepted_by_business: 5,
                autoassign_max_in_accepted_by_driver: 5,
                autoassign_max_in_driver_in_business: 5,
                autoassign_max_in_pending: 5,
                autoassign_max_in_pickup_completed: 5,
                autoassign_max_in_ready_for_pickup: 5,
                autoassign_max_orders: 5,
                autoassign_max_radius: 1000,
                orders_group_max_distance_between_delivery: 200,
                orders_group_max_distance_between_pickup: 200,
                orders_group_max_orders: 1,
                orders_group_max_time_between: 5,
                orders_group_max_time_between_delivery: 600,
                orders_group_max_time_between_pickup: 600,
                orders_group_start_in_status: '7',
                orders_group_use_maps_api: false
              };
              changes = _objectSpread(_objectSpread({}, changesState), extraAttributes);
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context3.next = 8;
              return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);

            case 8:
              response = _context3.sent;
              _context3.next = 11;
              return response.json();

            case 11:
              content = _context3.sent;

              if (!content.error) {
                setActionState({
                  loading: false,
                  error: null
                });
                newGroup = _objectSpread({}, content.result);

                if (!((_content$result = content.result) !== null && _content$result !== void 0 && _content$result.administrator) && driversManagers.length > 0) {
                  newAdmin = driversManagers.find(function (manager) {
                    var _content$result2;

                    return manager.id === ((_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.administrator_id);
                  });
                  newGroup = _objectSpread(_objectSpread({}, newGroup), {}, {
                    administrator: newAdmin
                  });
                }

                groups = [].concat(_toConsumableArray(driversGroupsState.groups), [newGroup]);
                setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                  groups: groups
                }));
                showToast(_ToastContext.ToastType.Success, t('DRIVER_GROUP_ADDED', 'Driver group added'));
                setChangesState({});
                props.onClose && props.onClose();
              } else {
                setActionState({
                  loading: false,
                  error: content.result
                });
              }

              _context3.next = 18;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              setActionState({
                loading: false,
                error: [_context3.t0.message]
              });

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 15]]);
    }));

    return function handleAddDriversGroup() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChangesState = function handleChangesState(changes) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), changes));
  };

  var handleSelectBusiness = function handleSelectBusiness(businessId, checked) {
    var businessIds = _toConsumableArray(selectedBusinessIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(businessIds), [businessId]);
    } else {
      filteredIds = businessIds.filter(function (id) {
        return id !== businessId;
      });
    }

    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllBusiness = function handleSelectAllBusiness(isAll) {
    var businessIds = businesses.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(businessIds);
    } else {
      filteredIds = [];
    }

    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectPaymethod = function handleSelectPaymethod(paymethodId, checked) {
    var paymethodIds = _toConsumableArray(selectedPaymethodIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(paymethodIds), [paymethodId]);
    } else {
      filteredIds = paymethodIds.filter(function (id) {
        return id !== paymethodId;
      });
    }

    setSelectedPaymethodIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      allowed_paymethods: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectDriver = function handleSelectDriver(driverId, checked) {
    var driverIds = _toConsumableArray(selectedDriverIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(driverIds), [driverId]);
    } else {
      filteredIds = driverIds.filter(function (id) {
        return id !== driverId;
      });
    }

    setSelectedDriverIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      drivers: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectDriversCompany = function handleSelectDriversCompany(driverCompanyId, checked) {
    var driverCompanyIds = _toConsumableArray(selectedDriversCompanyIds);

    var filteredIds = [];

    if (checked) {
      filteredIds = [].concat(_toConsumableArray(driverCompanyIds), [driverCompanyId]);
    } else {
      filteredIds = driverCompanyIds.filter(function (id) {
        return id !== driverCompanyId;
      });
    }

    setSelectedDriversCompanyIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      driver_companies: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllPaymethod = function handleSelectAllPaymethod(isAll) {
    var paymethodIds = paymethods === null || paymethods === void 0 ? void 0 : paymethods.reduce(function (ids, paymethod) {
      return [].concat(_toConsumableArray(ids), [paymethod.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(paymethodIds);
    } else {
      filteredIds = [];
    }

    setSelectedPaymethodIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      allowed_paymethods: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllDriver = function handleSelectAllDriver(isAll) {
    var driverIds = drivers === null || drivers === void 0 ? void 0 : drivers.reduce(function (ids, driver) {
      return [].concat(_toConsumableArray(ids), [driver.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(driverIds);
    } else {
      filteredIds = [];
    }

    setSelectedDriverIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      drivers: JSON.stringify(filteredIds)
    }));
  };

  var handleSelectAllDriversCompany = function handleSelectAllDriversCompany(isAll) {
    var driverCompanyIds = companies === null || companies === void 0 ? void 0 : companies.reduce(function (ids, company) {
      return [].concat(_toConsumableArray(ids), [company.id]);
    }, []);
    var filteredIds = [];

    if (isAll) {
      filteredIds = _toConsumableArray(driverCompanyIds);
    } else {
      filteredIds = [];
    }

    setSelectedDriversCompanyIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      driver_companies: JSON.stringify(filteredIds)
    }));
  };

  (0, _react.useEffect)(function () {
    setDriversGroupState(_objectSpread(_objectSpread({}, driversGroupState), {}, {
      driversGroup: curDriversGroup
    }));

    if (curDriversGroup) {
      var _curDriversGroup$busi;

      var businessIds = curDriversGroup === null || curDriversGroup === void 0 ? void 0 : (_curDriversGroup$busi = curDriversGroup.business) === null || _curDriversGroup$busi === void 0 ? void 0 : _curDriversGroup$busi.reduce(function (ids, business) {
        return [].concat(_toConsumableArray(ids), [business.id]);
      }, []);
      setSelectedBusinessIds(businessIds);
      setSelectedPaymethodIds((curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.allowed_paymethods) || []);

      var _drivers = curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.drivers.reduce(function (ids, driver) {
        return [].concat(_toConsumableArray(ids), [driver.id]);
      }, []);

      setSelectedDriverIds(_drivers);
      var companyIds = curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.driver_companies.reduce(function (ids, company) {
        return [].concat(_toConsumableArray(ids), [company.id]);
      }, []);
      setSelectedDriversCompanyIds(companyIds);
    } else {
      setChangesState({
        type: 0
      });
      setSelectedBusinessIds([]);
      setSelectedPaymethodIds([]);
      setSelectedDriverIds([]);
      setSelectedDriversCompanyIds([]);
    }
  }, [curDriversGroup]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversGroupState: driversGroupState,
    changesState: changesState,
    actionState: actionState,
    cleanChagesState: function cleanChagesState() {
      return setChangesState({});
    },
    selectedBusinessIds: selectedBusinessIds,
    selectedPaymethodIds: selectedPaymethodIds,
    selectedDriverIds: selectedDriverIds,
    selectedDriversCompanyIds: selectedDriversCompanyIds,
    handleChangesState: handleChangesState,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    handleSelectPaymethod: handleSelectPaymethod,
    handleSelectDriver: handleSelectDriver,
    handleSelectDriversCompany: handleSelectDriversCompany,
    handleSelectAllPaymethod: handleSelectAllPaymethod,
    handleSelectAllDriver: handleSelectAllDriver,
    handleSelectAllDriversCompany: handleSelectAllDriversCompany,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    handleAddDriversGroup: handleAddDriversGroup
  })));
};

exports.DriversGroupDetails = DriversGroupDetails;
DriversGroupDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before drivers group details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after drivers group details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before drivers group details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after drivers group details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};