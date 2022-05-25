"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupAutoassign = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupAutoassign = function DriversGroupAutoassign(props) {
  var UIComponent = props.UIComponent,
      curDriversGroup = props.curDriversGroup,
      handleChangesState = props.handleChangesState;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      autoAssign = _useState2[0],
      setAutoAssign = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      autoRejectOrderGroup = _useState4[0],
      setAutoRejectOrderGroup = _useState4[1];

  var getHours = function getHours(seconds) {
    return seconds * 1 / 3600 > 1 ? Math.floor(seconds * 1 / 3600) : 0;
  };

  var getMinutes = function getMinutes(seconds) {
    return Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60);
  };

  var getSeconds = function getSeconds(seconds) {
    var remain = seconds - Math.floor(seconds / 3600) * 3600;
    return Math.floor(remain - Math.floor(remain / 60) * 60);
  };

  var onSelectAssign = function onSelectAssign(type) {
    setAutoAssign(type);
    var changes = {};

    if (type === 1) {
      // one by one
      changes.autoassign_initial_radius = 500;
      changes.autoassign_increment_radius = 100;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 1;
    } else if (type === 2) {
      // send to all
      changes.autoassign_initial_radius = 15000;
      changes.autoassign_increment_radius = 15000;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 1000;
    } else if (type === 3) {
      // nearest available
      changes.autoassign_initial_radius = 100;
      changes.autoassign_increment_radius = 100;
      changes.autoassign_max_radius = 1500;
      changes.autoassign_amount_drivers = 1;
    } else if (type === 4) {
      // batch wise
      changes.autoassign_initial_radius = 1000;
      changes.autoassign_increment_radius = 500;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 2;
    } else if (type === 5) {
      // round robin
      changes.autoassign_initial_radius = 15000;
      changes.autoassign_increment_radius = 15000;
      changes.autoassign_max_radius = 15000;
      changes.autoassign_amount_drivers = 1;
    } else if (type === 6) {
      // other
      changes.autoassign_initial_radius = '';
      changes.autoassign_increment_radius = '';
      changes.autoassign_max_radius = '';
      changes.autoassign_amount_drivers = '';
    }

    handleChangesState({
      autoassign_initial_radius: changes.autoassign_initial_radius,
      autoassign_increment_radius: changes.autoassign_increment_radius,
      autoassign_max_radius: changes.autoassign_max_radius,
      autoassign_amount_drivers: changes.autoassign_amount_drivers
    });
  };

  var handleChangeInput = function handleChangeInput(e) {
    var value = e.target.value;
    var changeValue = value === '' ? 0 : parseInt(value);
    var regExp = /^[0-9\b]+$/;

    if (changeValue === '' || regExp.test(changeValue)) {
      handleChangesState(_defineProperty({}, e.target.name, changeValue));
    }
  };

  var onChangeAutoRejectOrderGroup = function onChangeAutoRejectOrderGroup(value, option) {
    var _autoRejectOrderGroup = _objectSpread({}, autoRejectOrderGroup);

    var regExp = /^[0-9\b]+$/;

    if (value === '' || regExp.test(value)) {
      var changeValue = value === '' ? 0 : parseInt(value);
      _autoRejectOrderGroup[option] = changeValue;
      setAutoRejectOrderGroup(_autoRejectOrderGroup);
      var autoRejectOrderGroupChanges = (_autoRejectOrderGroup === null || _autoRejectOrderGroup === void 0 ? void 0 : _autoRejectOrderGroup.hour) * 3600 + (_autoRejectOrderGroup === null || _autoRejectOrderGroup === void 0 ? void 0 : _autoRejectOrderGroup.minute) * 60 + (_autoRejectOrderGroup === null || _autoRejectOrderGroup === void 0 ? void 0 : _autoRejectOrderGroup.second);
      handleChangesState({
        autoassign_autoreject_time: autoRejectOrderGroupChanges
      });
    }
  };

  (0, _react.useEffect)(function () {
    var _autoAssign;

    if (!curDriversGroup) return;
    if (curDriversGroup.autoassign_initial_radius * 1 === 500 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 1;else if (curDriversGroup.autoassign_initial_radius * 1 === 15000 && curDriversGroup.autoassign_amount_drivers * 1 === 1000) _autoAssign = 2;else if (curDriversGroup.autoassign_initial_radius * 1 === 100 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 3;else if (curDriversGroup.autoassign_initial_radius * 1 === 1000 && curDriversGroup.autoassign_amount_drivers * 1 === 2) _autoAssign = 4;else if (curDriversGroup.autoassign_initial_radius * 1 === 15000 && curDriversGroup.autoassign_amount_drivers * 1 === 1) _autoAssign = 5;else _autoAssign = 6;
    setAutoAssign(_autoAssign);
    var _autoRejectOrderGroup = {
      hour: getHours(curDriversGroup.autoassign_autoreject_time),
      minute: getMinutes(curDriversGroup.autoassign_autoreject_time),
      second: getSeconds(curDriversGroup.autoassign_autoreject_time)
    };
    setAutoRejectOrderGroup(_autoRejectOrderGroup);
  }, [curDriversGroup]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    autoAssign: autoAssign,
    autoRejectOrderGroup: autoRejectOrderGroup,
    onSelectAssign: onSelectAssign,
    onChangeSave: handleChangesState,
    handleChangeInput: handleChangeInput,
    onChangeAutoRejectOrderGroup: onChangeAutoRejectOrderGroup
  })));
};

exports.DriversGroupAutoassign = DriversGroupAutoassign;
DriversGroupAutoassign.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before drivers group assign setting
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after drivers group assign setting
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before drivers group assign setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after drivers group assign setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupAutoassign.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};