"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWebsocket = exports.WebsocketProvider = exports.WebsocketContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../SessionContext");
var _EventContext = require("../EventContext");
var _socket2 = require("./socket");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
/**
 * Create SessionContext
 * This context will manage the socket conection and provide an easy interface
 */
var WebsocketContext = /*#__PURE__*/(0, _react.createContext)();

// let socket = null

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
exports.WebsocketContext = WebsocketContext;
var WebsocketProvider = function WebsocketProvider(_ref) {
  var _session$user2;
  var settings = _ref.settings,
    children = _ref.children,
    isAlsea = _ref.isAlsea;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    socket = _useState2[0],
    setSocket = _useState2[1];
  (0, _react.useEffect)(function () {
    if (session.loading) return;
    if (session.auth && settings.project && settings.url) {
      var _socket = new _socket2.Socket(_objectSpread(_objectSpread({}, settings), {}, {
        accessToken: session.token,
        url: isAlsea ? 'https://alsea-socket3-production.ordering.co' : settings.url
      }));
      setSocket(_socket);
    }
    if (!session.auth) {
      socket && socket.close();
    }
  }, [session]);
  (0, _react.useEffect)(function () {
    var _session$user;
    if (socket && session !== null && session !== void 0 && (_session$user = session.user) !== null && _session$user !== void 0 && _session$user.id) {
      socket.connect();
    }
    return function () {
      socket && socket.close();
    };
  }, [socket, session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    var disconnectTimeout = null;
    var connectionErrorTimeout = null;
    socket.socket.on('connect', function () {
      window.localStorage.setItem('websocket-connected-date', new Date());
      events.emit('websocket_connected');
    });
    socket.socket.on('disconnect', function () {
      disconnectTimeout = setTimeout(function () {
        return socket.socket.connect();
      }, 1000);
    });
    socket.socket.on('connect_error', function () {
      connectionErrorTimeout = setTimeout(function () {
        return socket.socket.connect();
      }, 1000);
    });
    return function () {
      clearInterval(disconnectTimeout);
      clearInterval(connectionErrorTimeout);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, session]);
  return /*#__PURE__*/_react.default.createElement(WebsocketContext.Provider, {
    value: socket
  }, children);
};

/**
 * Hook to get and update websocket state
 */
exports.WebsocketProvider = WebsocketProvider;
var useWebsocket = function useWebsocket() {
  var sockerManager = (0, _react.useContext)(WebsocketContext);
  return sockerManager || new _socket2.Socket({});
};
exports.useWebsocket = useWebsocket;