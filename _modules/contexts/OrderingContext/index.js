"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProvider = exports.OrderingContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigContext = require("../ConfigContext");
var _SessionContext = require("../SessionContext");
var _WebsocketContext = require("../WebsocketContext");
var _OrderContext = require("../OrderContext");
var _BusinessContext = require("../BusinessContext");
var _LanguageContext = require("../LanguageContext");
var _ApiContext = require("../ApiContext");
var _EventContext = require("../EventContext");
var _UtilsContext = require("../UtilsContext");
var _ToastContext = require("../ToastContext");
var _webStrategy = require("../../webStrategy");
var _ValidationsFieldsContext = require("../ValidationsFieldsContext");
var _CustomerContext = require("../CustomerContext");
var _SiteContext = require("../SiteContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
var OrderingContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
exports.OrderingContext = OrderingContext;
var OrderingProvider = function OrderingProvider(_ref) {
  var Alert = _ref.Alert,
    settings = _ref.settings,
    children = _ref.children;
  var webStrategy = new _webStrategy.WebStrategy();
  var isAlsea = ['alsea', 'alsea-staging'].includes(settings.project);
  return /*#__PURE__*/_react.default.createElement(OrderingContext.Provider, null, /*#__PURE__*/_react.default.createElement(_EventContext.EventProvider, null, /*#__PURE__*/_react.default.createElement(_ApiContext.ApiProvider, {
    settings: settings
  }, /*#__PURE__*/_react.default.createElement(_LanguageContext.LanguageProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_SessionContext.SessionProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_ConfigContext.ConfigProvider, null, /*#__PURE__*/_react.default.createElement(_UtilsContext.UtilsProviders, null, /*#__PURE__*/_react.default.createElement(_ToastContext.ToastProvider, null, /*#__PURE__*/_react.default.createElement(_ValidationsFieldsContext.ValidationFieldsProvider, null, /*#__PURE__*/_react.default.createElement(_WebsocketContext.WebsocketProvider, {
    settings: Object.assign(settings.socket, {
      project: settings.project
    }),
    isAlsea: isAlsea
  }, /*#__PURE__*/_react.default.createElement(_SiteContext.SiteProvider, null, /*#__PURE__*/_react.default.createElement(_CustomerContext.CustomerProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderContext.OrderProvider, {
    strategy: webStrategy,
    Alert: Alert
  }, /*#__PURE__*/_react.default.createElement(_BusinessContext.BusinessProvider, null, children))))))))))))));
};
exports.OrderingProvider = OrderingProvider;