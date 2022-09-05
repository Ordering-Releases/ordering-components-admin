"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LanguageContext = require("../../contexts/LanguageContext");

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

/**
 * Component to manage LanguageSelector behavior without UI component
 */
var LanguageSelector = function LanguageSelector(props) {
  var _languageState$langua3;

  var currentLanguage = props.currentLanguage,
      languages = props.languages,
      UIComponent = props.UIComponent;

  var _useState = (0, _react.useState)({
    loading: !languages,
    languages: languages,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      languageListState = _useState2[0],
      setLanguageListState = _useState2[1];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 3),
      languageState = _useLanguage2[0],
      setLanguage = _useLanguage2[2].setLanguage;

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      languageSelected = _useState4[0],
      setLanguageSelected = _useState4[1];

  var requestsState = {};
  /**
   * This method is used for change the current language
   */

  var onChangeLanguage = function onChangeLanguage(code, fromSelector) {
    var language = languageListState.languages.find(function (language) {
      return language.code === code;
    });

    if (props.handlerCustomChangeLanguage) {
      props.handlerCustomChangeLanguage(language);
      setLanguageSelected(language);
      return;
    }

    props.onChangeLanguage && props.onChangeLanguage(language);
    setLanguage(language, fromSelector);
  };

  (0, _react.useEffect)(function () {
    if (languageState.loading) return;

    if ((languages === null || languages === void 0 ? void 0 : languages.length) > 0) {
      setLanguageListState(_objectSpread(_objectSpread({}, languageListState), {}, {
        loading: false,
        languages: languages
      }));
    } else {
      var _languages = languageState.languageList.filter(function (lang) {
        return lang.enabled;
      });

      setLanguageListState(_objectSpread(_objectSpread({}, languageListState), {}, {
        loading: false,
        languages: _languages
      }));
    }

    return function () {
      if (requestsState.languages) {
        requestsState.languages.cancel();
      }
    };
  }, [languageState]);
  /**
   * Selecting default if exist and there is not one in local storage
   */

  (0, _react.useEffect)(function () {
    var _languageState$langua;

    if (currentLanguage) {
      var language = languages.find(function (language) {
        return language.code === currentLanguage;
      });
      setLanguage(language);
      setLanguageSelected(language);
    } else if (!(languageState !== null && languageState !== void 0 && (_languageState$langua = languageState.language) !== null && _languageState$langua !== void 0 && _languageState$langua.code) || !(languageSelected !== null && languageSelected !== void 0 && languageSelected.code)) {
      var _languageState$langua2, _languageListState$la;

      var _language = languageState !== null && languageState !== void 0 && (_languageState$langua2 = languageState.language) !== null && _languageState$langua2 !== void 0 && _languageState$langua2.code ? languageState === null || languageState === void 0 ? void 0 : languageState.language : languageListState === null || languageListState === void 0 ? void 0 : (_languageListState$la = languageListState.languages) === null || _languageListState$la === void 0 ? void 0 : _languageListState$la.find(function (language) {
        return language.default;
      });

      if (_language) {
        setLanguage(_language);
        setLanguageSelected(_language);
      }
    }
  }, [languages, languageListState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    currentLanguage: props.handlerCustomChangeLanguage ? languageSelected === null || languageSelected === void 0 ? void 0 : languageSelected.code : languageState === null || languageState === void 0 ? void 0 : (_languageState$langua3 = languageState.language) === null || _languageState$langua3 === void 0 ? void 0 : _languageState$langua3.code,
    languagesState: languageListState,
    handleChangeLanguage: onChangeLanguage
  })));
};

exports.LanguageSelector = LanguageSelector;
LanguageSelector.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * currentLanguage, this must be containt current language to show in the app
   */
  currentLanguage: _propTypes.default.string,

  /**
   * languages, this array must be containt a list of available languages
   */
  languages: _propTypes.default.arrayOf(_propTypes.default.object),

  /**
   * Return language selected
   */
  onChangeLanguage: _propTypes.default.func,

  /**
   * handlerCustomChangeLanguage, handler change behavior
   */
  handlerCustomChangeLanguage: _propTypes.default.func,

  /**
   * Components types before language selector
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after language selector
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
LanguageSelector.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};