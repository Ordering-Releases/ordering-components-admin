"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardOrdersList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _EventContext = require("../../contexts/EventContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _moment = _interopRequireDefault(require("moment"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_utc.default);
_dayjs.default.extend(_timezone.default);
var DashboardOrdersList = function DashboardOrdersList(props) {
  var _paginationSettings$p, _configState$configs, _configState$configs$;
  var UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch,
    orders = props.orders,
    isOnlyDelivery = props.isOnlyDelivery,
    driverId = props.driverId,
    customerId = props.customerId,
    businessId = props.businessId,
    franchiseId = props.franchiseId,
    orderIds = props.orderIds,
    deletedOrderIds = props.deletedOrderIds,
    orderStatus = props.orderStatus,
    orderBy = props.orderBy,
    orderDirection = props.orderDirection,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    filterValues = props.filterValues,
    searchValue = props.searchValue,
    isSearchByOrderId = props.isSearchByOrderId,
    isSearchByCustomerName = props.isSearchByCustomerName,
    isSearchByCustomerEmail = props.isSearchByCustomerEmail,
    isSearchByCustomerPhone = props.isSearchByCustomerPhone,
    isSearchByBusinessName = props.isSearchByBusinessName,
    isSearchByDriverName = props.isSearchByDriverName,
    orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate,
    timeStatus = props.timeStatus,
    driversList = props.driversList,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)({
      loading: !orders,
      error: null,
      orders: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderList = _useState2[0],
    setOrderList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    pagination = _useState4[0],
    setPagination = _useState4[1];
  var _useSession3 = (0, _SessionContext.useSession)(),
    _useSession4 = _slicedToArray(_useSession3, 1),
    session = _useSession4[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var isAlsea = ['alsea', 'alsea-staging'].includes(ordering.project);
  var requestsState = {};
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    actionStatus = _useState6[0],
    setActionStatus = _useState6[1];
  var firstRender = (0, _react.useRef)(true);
  var filterDefaultOrderDate = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.filter_default_order_date) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;
  var filterDefaultOrderValues = ['today', 'last_seven_days'];
  var sortOrdersArray = function sortOrdersArray(option, array) {
    if (option === 'id') {
      if (orderDirection === 'desc') {
        return array.sort(function (a, b) {
          return b.id - a.id;
        });
      }
      if (orderDirection === 'asc') {
        return array.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    }
    if (option === 'last_direct_message_at') {
      return array.sort(function (a, b) {
        return new Date(b.last_direct_message_at) - new Date(a.last_direct_message_at);
      });
    }
    return array;
  };

  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(order) {
      var source, _yield$ordering$setAc, content, _orders2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            source = {};
            requestsState.updateOrders = source;
            _context.next = 6;
            return ordering.setAccessToken(accessToken).orders(order === null || order === void 0 ? void 0 : order.id).save({
              status: order.newStatus
            }, {
              cancelToken: source
            });
          case 6:
            _yield$ordering$setAc = _context.sent;
            content = _yield$ordering$setAc.content;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              _orders2 = orderList.orders.filter(function (_order) {
                return (_order === null || _order === void 0 ? void 0 : _order.id) !== (order === null || order === void 0 ? void 0 : order.id);
              });
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                orders: _orders2
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context.t0.message]
            });
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function handleUpdateOrderStatus(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get orders from API
   * @param {number} page page number
   */
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageSize, page) {
      var where, conditions, options, getFilterStatusInOrderStatus, searchConditions, _filterValues$metafie, filterConditons, metafieldConditions, now, defaultDateFilter, nowInUserTimezone, today, last7day, source, functionFetch;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            where = [];
            conditions = [];
            options = {
              query: {
                orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
                page: page,
                page_size: pageSize
              }
            };
            conditions.push({
              attribute: 'products',
              conditions: [{
                attribute: 'type',
                value: {
                  condition: '=',
                  value: 'item'
                }
              }]
            });
            if (orderIds) {
              conditions.push({
                attribute: 'id',
                value: orderIds
              });
            }
            if (Object.keys(filterValues).length === 0) {
              if (orderStatus) {
                conditions.push({
                  attribute: 'status',
                  value: orderStatus
                });
              }
            } else {
              if (filterValues.statuses.length > 0) {
                // const checkInnerContain = filterValues.statuses.every((el) => {
                //   return orderStatus.indexOf(el) !== -1
                // })
                // const checkOutContain = orderStatus.every((el) => {
                //   return filterValues.statuses.indexOf(el) !== -1
                // })
                // if (checkInnerContain) conditions.push({ attribute: 'status', value: filterValues.statuses })
                // if (checkOutContain) {
                //   if (orderStatus) {
                //     conditions.push({ attribute: 'status', value: orderStatus })
                //   }
                // }
                getFilterStatusInOrderStatus = filterValues.statuses.filter(function (status) {
                  return orderStatus.includes(status);
                });
                conditions.push({
                  attribute: 'status',
                  value: getFilterStatusInOrderStatus
                });
              } else {
                if (orderStatus) {
                  conditions.push({
                    attribute: 'status',
                    value: orderStatus
                  });
                }
              }
            }
            if (isOnlyDelivery) {
              conditions.push({
                attribute: 'delivery_type',
                value: [1, 7]
              });
            }
            if (driverId) {
              conditions.push({
                attribute: 'driver_id',
                value: driverId
              });
            }
            if (customerId) {
              conditions.push({
                attribute: 'customer_id',
                value: customerId
              });
            }
            if (businessId) {
              conditions.push({
                attribute: 'business_id',
                value: businessId
              });
            }
            if (franchiseId) {
              conditions.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'franchise_id',
                  value: franchiseId
                }]
              });
            }
            if (timeStatus) {
              conditions.push({
                attribute: 'time_status',
                value: timeStatus
              });
            }
            if (searchValue) {
              searchConditions = [];
              if (isSearchByOrderId) {
                searchConditions.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURIComponent("%".concat(searchValue, "%"))
                  }
                });
                searchConditions.push({
                  attribute: 'external_id',
                  value: {
                    condition: 'ilike',
                    value: encodeURIComponent("%".concat(searchValue, "%"))
                  }
                });
              }
              if (!isAlsea) {
                if (isSearchByCustomerName) {
                  searchConditions.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'name',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }
                if (isSearchByCustomerEmail) {
                  searchConditions.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'email',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }
                if (isSearchByCustomerPhone) {
                  searchConditions.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'cellphone',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }
                if (isSearchByBusinessName) {
                  searchConditions.push({
                    attribute: 'business',
                    conditions: [{
                      attribute: 'name',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }
                if (isSearchByDriverName) {
                  searchConditions.push({
                    attribute: 'driver',
                    conditions: [{
                      attribute: 'name',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (Object.keys(filterValues).length) {
              filterConditons = [];
              if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
                filterConditons.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId, "%"))
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus) !== null) {
                filterConditons.push({
                  attribute: 'logistic_status',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) !== null) {
                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) === 0) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: {
                      condition: '>=',
                      value: 0
                    }
                  });
                }
                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.assigned) === 1) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: null
                  });
                }
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
                filterConditons.push({
                  attribute: 'external_id',
                  value: {
                    condition: 'ilike',
                    value: encodeURIComponent("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId, "%"))
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$metafie = filterValues.metafield) === null || _filterValues$metafie === void 0 ? void 0 : _filterValues$metafie.length) > 0) {
                metafieldConditions = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
                  return {
                    attribute: 'metafields',
                    conditions: [{
                      attribute: 'key',
                      value: item === null || item === void 0 ? void 0 : item.key
                    }, {
                      attribute: 'value',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(item === null || item === void 0 ? void 0 : item.value, "%"))
                      }
                    }],
                    conector: 'AND'
                  };
                });
                filterConditons.push({
                  conector: 'OR',
                  conditions: metafieldConditions
                });
              }
              if (filterValues.deliveryFromDatetime !== null || filterDefaultOrderValues.includes(filterDefaultOrderDate)) {
                now = (0, _dayjs.default)();
                if (filterDefaultOrderDate === 'today') {
                  if (user !== null && user !== void 0 && user.timezone && (user === null || user === void 0 ? void 0 : user.timezone) !== 'UTC') {
                    nowInUserTimezone = now.tz(user === null || user === void 0 ? void 0 : user.timezone).startOf('day');
                    defaultDateFilter = nowInUserTimezone.utc().format('YYYY-MM-DD HH:mm:ss');
                  } else {
                    today = now.format('YYYY-MM-DD');
                    defaultDateFilter = (0, _dayjs.default)(today).format('YYYY-MM-DD HH:mm:ss');
                  }
                }
                if (filterDefaultOrderDate === 'last_seven_days') {
                  last7day = now.subtract('7', 'day').format('YYYY-MM-DD');
                  defaultDateFilter = (0, _dayjs.default)(last7day).format('YYYY-MM-DD HH:mm:ss');
                }
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '>=',
                    value: encodeURI(filterValues.deliveryFromDatetime || defaultDateFilter)
                  }
                });
              }
              if (filterValues.deliveryEndDatetime !== null) {
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '<=',
                    value: filterValues.deliveryEndDatetime
                  }
                });
              }
              if (filterValues.businessIds.length !== 0) {
                filterConditons.push({
                  attribute: 'business_id',
                  value: filterValues.businessIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode.length) !== 0) {
                filterConditons.push({
                  attribute: 'country_code',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency.length) !== 0) {
                filterConditons.push({
                  attribute: 'currency',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency
                });
              }
              if (filterValues.driverIds.length !== 0) {
                filterConditons.push({
                  attribute: 'driver_id',
                  value: filterValues.driverIds
                });
              }
              if (filterValues.deliveryTypes.length !== 0) {
                filterConditons.push({
                  attribute: 'delivery_type',
                  value: filterValues.deliveryTypes
                });
              }
              if (filterValues.groupTypesUnassigned.length !== 0) {
                filterConditons.push({
                  attribute: 'driver_group_id',
                  value: filterValues.groupTypesUnassigned
                });
              }
              if (filterValues.driverGroupBusinessIds.length !== 0) {
                filterConditons.push({
                  attribute: 'driver_group_business',
                  conditions: [{
                    attribute: 'driver_group_id',
                    value: {
                      condition: '=',
                      value: filterValues.driverGroupBusinessIds
                    }
                  }]
                });
              }
              if (filterValues.paymethodIds.length !== 0) {
                filterConditons.push({
                  attribute: 'paymethod_id',
                  value: filterValues.paymethodIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'city_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds
                  }]
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.customerName) {
                filterConditons.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerName, "%"))
                    }
                  }]
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.customerLastname) {
                filterConditons.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerLastname, "%"))
                    }
                  }]
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.customerCellphone) {
                filterConditons.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerCellphone, "%"))
                    }
                  }]
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.customerEmail) {
                filterConditons.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerEmail, "%"))
                    }
                  }]
                });
              }
              if (filterValues.administratorIds.length !== 0) {
                conditions.push({
                  attribute: 'agent_id',
                  value: filterValues.administratorIds
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.offerId) {
                filterConditons.push({
                  attribute: 'offers',
                  conditions: [{
                    attribute: 'offer_id',
                    value: {
                      condition: '=',
                      value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.offerId
                    }
                  }]
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.coupon) {
                filterConditons.push({
                  attribute: 'offers',
                  conditions: [{
                    attribute: 'coupon',
                    value: {
                      condition: '=',
                      value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.coupon
                    }
                  }]
                });
              }
              if (filterConditons.length) {
                conditions.push({
                  conector: 'AND',
                  conditions: filterConditons
                });
              }
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            if (propsToFetch) {
              functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch).where(where);
            } else {
              functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().where(where);
            }
            _context2.next = 21;
            return functionFetch.get(options);
          case 21:
            return _context2.abrupt("return", _context2.sent);
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getOrders(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to detect if incoming order and update order belong to filter.
   * @param {Object} order incoming order and update order
   */
  var isFilteredOrder = function isFilteredOrder(order, lastHistoryData) {
    var _filterValues$country, _filterValues$cityIds, _filterValues$driverG, _filterValues$driverG3, _filterValues$groupTy, _filterValues$currenc, _filterValues$metafie2;
    var filterCheck = true;
    if (searchValue) {
      var searchCheck = false;
      var lowerCaseSearchValue = searchValue.toLowerCase();
      if (isSearchByOrderId) {
        var _order$id;
        if (((order === null || order === void 0 ? void 0 : (_order$id = order.id) === null || _order$id === void 0 ? void 0 : _order$id.toString()) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByCustomerName) {
        var _order$customer;
        if (((order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.name) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByCustomerEmail) {
        var _order$customer2;
        if (((order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.email) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByCustomerPhone) {
        var _order$customer3;
        if (((order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.cellphone) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByBusinessName) {
        var _order$business;
        if (((order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (isSearchByDriverName) {
        var _order$driver;
        if (((order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.name) || '').toLowerCase().includes(lowerCaseSearchValue)) searchCheck = true;
      }
      if (!searchCheck) filterCheck = false;
    }
    if (orderStatus !== undefined && orderStatus.length > 0) {
      var _lastHistoryData$find;
      var lastStatus = lastHistoryData === null || lastHistoryData === void 0 ? void 0 : (_lastHistoryData$find = lastHistoryData.find(function (item) {
        return item.attribute === 'status';
      })) === null || _lastHistoryData$find === void 0 ? void 0 : _lastHistoryData$find.old;
      if (!orderStatus.includes(parseInt(order.status)) && !orderStatus.includes(parseInt(lastStatus))) {
        filterCheck = false;
      }
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.customerName) {
      var _order$customer4, _order$customer4$name;
      if (!(order !== null && order !== void 0 && (_order$customer4 = order.customer) !== null && _order$customer4 !== void 0 && (_order$customer4$name = _order$customer4.name) !== null && _order$customer4$name !== void 0 && _order$customer4$name.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerName))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.customerLastname) {
      var _order$customer5, _order$customer5$last;
      if (!(order !== null && order !== void 0 && (_order$customer5 = order.customer) !== null && _order$customer5 !== void 0 && (_order$customer5$last = _order$customer5.lastname) !== null && _order$customer5$last !== void 0 && _order$customer5$last.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerLastname))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.customerCellphone) {
      var _order$customer6, _order$customer6$cell;
      if (!(order !== null && order !== void 0 && (_order$customer6 = order.customer) !== null && _order$customer6 !== void 0 && (_order$customer6$cell = _order$customer6.cellphone) !== null && _order$customer6$cell !== void 0 && _order$customer6$cell.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.customerCellphone))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
      var _order$id2;
      if (!(order !== null && order !== void 0 && (_order$id2 = order.id) !== null && _order$id2 !== void 0 && _order$id2.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
      var _order$external_id;
      if (!(order !== null && order !== void 0 && (_order$external_id = order.external_id) !== null && _order$external_id !== void 0 && _order$external_id.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.deliveryFromDatetime) {
      var isBefore = (0, _moment.default)(order === null || order === void 0 ? void 0 : order.delivery_datetime).isBefore(filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime, 'second');
      if (isBefore) filterCheck = false;
    }
    if (filterValues.deliveryEndDatetime) {
      var isAfter = (0, _moment.default)(order === null || order === void 0 ? void 0 : order.delivery_datetime).isAfter(filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime, 'second');
      if (isAfter) filterCheck = false;
    }
    if (filterValues.businessIds !== undefined && filterValues.businessIds.length > 0) {
      if (!filterValues.businessIds.includes(order.business_id)) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$country = filterValues.countryCode) === null || _filterValues$country === void 0 ? void 0 : _filterValues$country.length) > 0) {
      if (!filterValues.countryCode.includes(order === null || order === void 0 ? void 0 : order.country_code)) filterCheck = false;
    }
    if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$cityIds = filterValues.cityIds) === null || _filterValues$cityIds === void 0 ? void 0 : _filterValues$cityIds.length) > 0) {
      if (!filterValues.cityIds.includes(order.city_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.driverIds !== undefined && filterValues.driverIds.length > 0) {
      var _lastHistoryData$find2;
      var lastDriverId = lastHistoryData === null || lastHistoryData === void 0 ? void 0 : (_lastHistoryData$find2 = lastHistoryData.find(function (item) {
        return item.attribute === 'driver_id';
      })) === null || _lastHistoryData$find2 === void 0 ? void 0 : _lastHistoryData$find2.old;
      if (!filterValues.driverIds.includes(order.driver_id) && !filterValues.driverIds.includes(lastDriverId)) {
        filterCheck = false;
      }
    }
    if (filterValues.deliveryTypes !== undefined && filterValues.deliveryTypes.length > 0) {
      if (!filterValues.deliveryTypes.includes(order.delivery_type)) {
        filterCheck = false;
      }
    }
    if (filterValues.paymethodIds !== undefined && filterValues.paymethodIds.length > 0) {
      if (!filterValues.paymethodIds.includes(order.paymethod_id)) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$driverG = filterValues.driverGroupIds) === null || _filterValues$driverG === void 0 ? void 0 : _filterValues$driverG.length) > 0) {
      var _filterValues$driverG2;
      if (!(filterValues !== null && filterValues !== void 0 && (_filterValues$driverG2 = filterValues.driverGroupIds) !== null && _filterValues$driverG2 !== void 0 && _filterValues$driverG2.some(function (driverGroup) {
        return (order === null || order === void 0 ? void 0 : order.driver_group_id) === driverGroup;
      }))) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$driverG3 = filterValues.driverGroupBusinessIds) === null || _filterValues$driverG3 === void 0 ? void 0 : _filterValues$driverG3.length) > 0) {
      var _filterValues$driverG4;
      if (!(filterValues !== null && filterValues !== void 0 && (_filterValues$driverG4 = filterValues.driverGroupBusinessIds) !== null && _filterValues$driverG4 !== void 0 && _filterValues$driverG4.some(function (driverGroup) {
        var _order$assignable_dri, _order$assignable_dri2;
        return order === null || order === void 0 ? void 0 : (_order$assignable_dri = order.assignable_driver_groups) === null || _order$assignable_dri === void 0 ? void 0 : (_order$assignable_dri2 = _order$assignable_dri.includes) === null || _order$assignable_dri2 === void 0 ? void 0 : _order$assignable_dri2.call(_order$assignable_dri, driverGroup);
      }))) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$groupTy = filterValues.groupTypesUnassigned) === null || _filterValues$groupTy === void 0 ? void 0 : _filterValues$groupTy.length) > 0) {
      var _filterValues$groupTy2;
      if (!(filterValues !== null && filterValues !== void 0 && (_filterValues$groupTy2 = filterValues.groupTypesUnassigned) !== null && _filterValues$groupTy2 !== void 0 && _filterValues$groupTy2.some(function (driverGroup) {
        return (order === null || order === void 0 ? void 0 : order.driver_group_id) === driverGroup;
      }))) {
        filterCheck = false;
      }
    }
    if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$currenc = filterValues.currency) === null || _filterValues$currenc === void 0 ? void 0 : _filterValues$currenc.length) > 0) {
      if (!filterValues.currency.includes(order === null || order === void 0 ? void 0 : order.currency)) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.logisticStatus) {
      var _lastHistoryData$find3;
      var lastLogisticStatus = lastHistoryData === null || lastHistoryData === void 0 ? void 0 : (_lastHistoryData$find3 = lastHistoryData.find(function (item) {
        return item.attribute === 'logistic_status';
      })) === null || _lastHistoryData$find3 === void 0 ? void 0 : _lastHistoryData$find3.old;
      if ((order === null || order === void 0 ? void 0 : order.logistic_status) !== parseInt(filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus) && lastLogisticStatus !== parseInt(filterValues === null || filterValues === void 0 ? void 0 : filterValues.logisticStatus)) filterCheck = false;
    }
    if ((filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$metafie2 = filterValues.metafield) === null || _filterValues$metafie2 === void 0 ? void 0 : _filterValues$metafie2.length) > 0) {
      filterValues.metafield.forEach(function (item) {
        var _order$metafields;
        var found = order === null || order === void 0 ? void 0 : (_order$metafields = order.metafields) === null || _order$metafields === void 0 ? void 0 : _order$metafields.find(function (meta) {
          return meta.key === item.key && meta.value.includes(item.value);
        });
        if (!found) {
          filterCheck = false;
        }
      });
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.offerId) {
      var _order$offerId;
      if (!(order !== null && order !== void 0 && (_order$offerId = order.offerId) !== null && _order$offerId !== void 0 && _order$offerId.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.offerId))) filterCheck = false;
    }
    if (filterValues !== null && filterValues !== void 0 && filterValues.coupon) {
      var _order$coupon;
      if (!(order !== null && order !== void 0 && (_order$coupon = order.coupon) !== null && _order$coupon !== void 0 && _order$coupon.toString().includes(filterValues === null || filterValues === void 0 ? void 0 : filterValues.coupon))) filterCheck = false;
    }
    return filterCheck;
  };
  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (session.token) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context3.next = 6;
            return getOrders(pagination.pageSize, firstRender.current ? pagination.currentPage : 1);
          case 6:
            response = _context3.sent;
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            setOrderList({
              loading: false,
              orders: response.content.error ? [] : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            firstRender.current = false;
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            if (_context3.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));
            }
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 12]]);
    }));
    return function loadOrders() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context4.prev = 1;
            _context4.next = 4;
            return getOrders(pagination.pageSize, pagination.currentPage + 1);
          case 4:
            response = _context4.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            if (_context4.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 9]]);
    }));
    return function loadMoreOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  var getPageOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(pageSize, page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context5.prev = 1;
            _context5.next = 4;
            return getOrders(pageSize, page);
          case 4:
            response = _context5.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            if (_context5.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 9]]);
    }));
    return function getPageOrders(_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
  * Method to handle drag drop
  */
  var handleDrop = function handleDrop(event, columnName) {
    var _allowColumns$transfe, _allowColumns$columnN;
    event.preventDefault();
    var transferColumnName = event.dataTransfer.getData('transferColumnName');
    if (columnName === transferColumnName) return;
    var transferColumnOrder = (_allowColumns$transfe = allowColumns[transferColumnName]) === null || _allowColumns$transfe === void 0 ? void 0 : _allowColumns$transfe.order;
    var currentColumnOrder = (_allowColumns$columnN = allowColumns[columnName]) === null || _allowColumns$columnN === void 0 ? void 0 : _allowColumns$columnN.order;
    var _ref6 = transferColumnOrder < currentColumnOrder ? [transferColumnOrder, currentColumnOrder] : [currentColumnOrder, transferColumnOrder],
      _ref7 = _slicedToArray(_ref6, 2),
      lessOrder = _ref7[0],
      greaterOrder = _ref7[1];
    var _remainAllowColumns = {};
    var shouldUpdateColumns = Object.keys(allowColumns).filter(function (col) {
      var _allowColumns$col, _allowColumns$col2;
      return col !== transferColumnName && ((_allowColumns$col = allowColumns[col]) === null || _allowColumns$col === void 0 ? void 0 : _allowColumns$col.order) >= lessOrder && ((_allowColumns$col2 = allowColumns[col]) === null || _allowColumns$col2 === void 0 ? void 0 : _allowColumns$col2.order) <= greaterOrder;
    });
    shouldUpdateColumns.forEach(function (col) {
      var _allowColumns$col3;
      _remainAllowColumns[col] = _objectSpread(_objectSpread({}, allowColumns[col]), {}, {
        order: ((_allowColumns$col3 = allowColumns[col]) === null || _allowColumns$col3 === void 0 ? void 0 : _allowColumns$col3.order) + (transferColumnOrder < currentColumnOrder ? -1 : 1)
      });
    });
    var _allowColumnsUpdated = _objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, transferColumnName, _objectSpread(_objectSpread({}, allowColumns[transferColumnName]), {}, {
      order: currentColumnOrder
    })), _remainAllowColumns);
    saveUserSettings(_allowColumnsUpdated);
    setAllowColumns(_allowColumnsUpdated);
  };
  var saveUserSettings = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(allowColumnsUpdated) {
      var _session$user, _session$user2, _session$user3, _settings, _allowColumnsUpdated;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (session !== null && session !== void 0 && (_session$user = session.user) !== null && _session$user !== void 0 && _session$user.id) {
              _context6.next = 3;
              break;
            }
            return _context6.abrupt("return");
          case 3:
            _settings = session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.settings;
            _allowColumnsUpdated = _objectSpread(_objectSpread({}, allowColumnsUpdated), {}, {
              timer: _objectSpread(_objectSpread({}, allowColumnsUpdated === null || allowColumnsUpdated === void 0 ? void 0 : allowColumnsUpdated.timer), {}, {
                visable: false
              })
            });
            _context6.next = 7;
            return ordering.users(session === null || session === void 0 ? void 0 : (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id).save({
              settings: _objectSpread(_objectSpread({}, _settings), {}, {
                orderColumns: _allowColumnsUpdated
              })
            }, {
              accessToken: accessToken
            });
          case 7:
            _context6.next = 12;
            break;
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.warn(_context6.t0, 'error');
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 9]]);
    }));
    return function saveUserSettings(_x7) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Listening order id to update for unread_count parameter
   */
  (0, _react.useEffect)(function () {
    if (orderIdForUnreadCountUpdate === null || orderList.orders.length === 0) return;
    var _orders = orderList.orders.filter(function (order) {
      if ((order === null || order === void 0 ? void 0 : order.id) === orderIdForUnreadCountUpdate) {
        order.unread_count = 0;
        order.unread_general_count = 0;
        order.unread_direct_count = 0;
      }
      return true;
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: _orders
    }));
  }, [orderIdForUnreadCountUpdate]);

  /**
   * Listening deleted order
   */
  (0, _react.useEffect)(function () {
    if (!deletedOrderIds) return;
    var totalDeletedCount = 0;
    var orders = orderList.orders.filter(function (_order) {
      if (deletedOrderIds.includes(_order === null || _order === void 0 ? void 0 : _order.id)) {
        totalDeletedCount = totalDeletedCount + 1;
        return false;
      } else {
        return true;
      }
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: orders
    }));
    setPagination(function (prevPagination) {
      return _objectSpread(_objectSpread({}, prevPagination), {}, {
        total: Math.max(0, (prevPagination === null || prevPagination === void 0 ? void 0 : prevPagination.total) - totalDeletedCount)
      });
    });
  }, [JSON.stringify(deletedOrderIds)]);

  /**
   * Listening sesssion and filter values change
   */
  (0, _react.useEffect)(function () {
    var filterObjectValues = Object === null || Object === void 0 ? void 0 : Object.values(filterValues);
    var hasFilterApplied = filterObjectValues.some(function (filt) {
      return filt !== null && (filt === null || filt === void 0 ? void 0 : filt.length) > 0;
    });
    if (session !== null && session !== void 0 && session.loading || configState.loading || hasFilterApplied || (filterObjectValues === null || filterObjectValues === void 0 ? void 0 : filterObjectValues.length) === 0) return;
    if (orders) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders
      }));
    } else {
      loadOrders();
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [session, orders, configState.loading, isOnlyDelivery, driverId, customerId, businessId, orderStatus, timeStatus, searchValue, orderBy, JSON.stringify(filterValues)]);
  (0, _react.useEffect)(function () {
    var filterObjectValues = Object === null || Object === void 0 ? void 0 : Object.values(filterValues);
    var hasFilterApplied = filterObjectValues.some(function (filt) {
      return filt !== null && (filt === null || filt === void 0 ? void 0 : filt.length) > 0;
    });
    if (!hasFilterApplied) {
      return;
    }
    loadOrders();
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [JSON.stringify(filterValues)]);
  var getLastUpdates = function getLastUpdates(history, sendOnlyStatus) {
    var attributesToFind = ['status', 'logistic_status', 'driver_id'];
    var foundEntries = {};
    var foundAll = false;
    for (var i = history.length - 1; i >= 0 && !foundAll; i--) {
      var data = history[i].data;
      if (data) {
        data.forEach(function (entry) {
          if (attributesToFind.includes(entry.attribute) && !(entry.attribute in foundEntries)) {
            var _Object$keys;
            foundEntries[entry.attribute] = entry;
            if (((_Object$keys = Object.keys(foundEntries)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) === attributesToFind.length) {
              foundAll = true;
            }
          }
        });
      }
    }
    if (sendOnlyStatus) {
      return (foundEntries === null || foundEntries === void 0 ? void 0 : foundEntries.status) || null;
    }
    return Object.values(foundEntries);
  };
  var handleUpdateOrder = function handleUpdateOrder(orderFromSocket) {
    var _order2, _order2$products, _order2$products$, _order3, _order4, _order5, _order8, _order9;
    var order = orderFromSocket;
    var orderFound = orderList.orders.find(function (_order) {
      return (_order === null || _order === void 0 ? void 0 : _order.id) === (orderFromSocket === null || orderFromSocket === void 0 ? void 0 : orderFromSocket.id);
    });
    if (orderFound) {
      order = _objectSpread(_objectSpread({}, orderFound), orderFromSocket);
    }
    if (((_order2 = order) === null || _order2 === void 0 ? void 0 : (_order2$products = _order2.products) === null || _order2$products === void 0 ? void 0 : (_order2$products$ = _order2$products[0]) === null || _order2$products$ === void 0 ? void 0 : _order2$products$.type) === 'gift_card') return;
    if (customerId && ((_order3 = order) === null || _order3 === void 0 ? void 0 : _order3.customer_id) !== customerId) return;
    if (driverId && ((_order4 = order) === null || _order4 === void 0 ? void 0 : _order4.driver_id) !== driverId) return;
    if (isOnlyDelivery && ![1, 7].includes((_order5 = order) === null || _order5 === void 0 ? void 0 : _order5.delivery_type)) return;
    if (typeof order.status === 'undefined') return;
    if (!isFilteredOrder(order)) {
      var _order$history, _order6;
      var lastHistoryData = getLastUpdates((_order$history = (_order6 = order) === null || _order6 === void 0 ? void 0 : _order6.history) !== null && _order$history !== void 0 ? _order$history : []);
      if (isFilteredOrder(order, lastHistoryData)) {
        setPagination(function (prevPagination) {
          return _objectSpread(_objectSpread({}, prevPagination), {}, {
            total: Math.max(0, prevPagination.total - 1)
          });
        });
      }
      setOrderList(function (prevState) {
        var updatedOrders = prevState.orders.filter(function (_order) {
          var _order7;
          return (_order === null || _order === void 0 ? void 0 : _order.id) !== ((_order7 = order) === null || _order7 === void 0 ? void 0 : _order7.id);
        });
        return _objectSpread(_objectSpread({}, prevState), {}, {
          orders: updatedOrders
        });
      });
      return;
    }
    var updatedOrder = _objectSpread({}, order);
    if (!((_order8 = order) !== null && _order8 !== void 0 && _order8.driver) && (_order9 = order) !== null && _order9 !== void 0 && _order9.driver_id) {
      var updatedDriver = driversList === null || driversList === void 0 ? void 0 : driversList.drivers.find(function (driver) {
        var _order10;
        return driver.id === ((_order10 = order) === null || _order10 === void 0 ? void 0 : _order10.driver_id);
      });
      if (updatedDriver) {
        updatedOrder.driver = _objectSpread({}, updatedDriver);
      }
    }
    var found = orderList.orders.find(function (_order) {
      var _updatedOrder;
      return (_order === null || _order === void 0 ? void 0 : _order.id) === ((_updatedOrder = updatedOrder) === null || _updatedOrder === void 0 ? void 0 : _updatedOrder.id);
    });
    if (found) {
      var updatedOrders = orderList.orders.map(function (_order) {
        var _order11;
        if ((_order === null || _order === void 0 ? void 0 : _order.id) === ((_order11 = order) === null || _order11 === void 0 ? void 0 : _order11.id)) {
          updatedOrder = _objectSpread(_objectSpread({}, _order), updatedOrder);
          return updatedOrder;
        }
        return _order;
      });
      var _orders = sortOrdersArray(orderBy, updatedOrders.filter(Boolean));
      setOrderList(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          orders: _orders
        });
      });
    } else {
      var _order$history2, _order12;
      var statusChange = getLastUpdates((_order$history2 = (_order12 = order) === null || _order12 === void 0 ? void 0 : _order12.history) !== null && _order$history2 !== void 0 ? _order$history2 : [], true);
      var _updatedOrders = [].concat(_toConsumableArray(orderList.orders), [order]);
      var _orders3 = sortOrdersArray(orderBy, _updatedOrders.filter(Boolean));
      setOrderList(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          orders: _orders3.slice(0, pagination.pageSize)
        });
      });
      if (statusChange) {
        var from = parseInt(statusChange.old);
        if (!orderStatus.includes(from)) {
          setPagination(function (prevPagination) {
            return _objectSpread(_objectSpread({}, prevPagination), {}, {
              total: prevPagination.total + 1
            });
          });
        }
      }
    }
  };
  var handleRegisterOrder = function handleRegisterOrder(order) {
    var _order$products, _order$products$;
    if ((order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : (_order$products$ = _order$products[0]) === null || _order$products$ === void 0 ? void 0 : _order$products$.type) === 'gift_card') return;
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    if (driverId && (order === null || order === void 0 ? void 0 : order.driver_id) !== driverId) return;
    if (isOnlyDelivery && ![1, 7].includes(order === null || order === void 0 ? void 0 : order.delivery_type)) return;
    var found = orderList.orders.find(function (_order) {
      return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
    });
    if (found) return;
    if (!isFilteredOrder(order)) return;
    setOrderList(function (prevState) {
      var found = prevState.orders.find(function (_order) {
        return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
      });
      if (found) return prevState;
      var updatedOrders = [order].concat(_toConsumableArray(prevState.orders));
      var sortedOrders = sortOrdersArray(orderBy, updatedOrders);
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: sortedOrders.slice(0, pagination.pageSize)
      });
    });
    setPagination(function (prevPagination) {
      return _objectSpread(_objectSpread({}, prevPagination), {}, {
        total: prevPagination.total + 1
      });
    });
  };
  var handleNewMessage = function handleNewMessage(message) {
    if (orderList.orders.length === 0) return;
    var found = orderList.orders.find(function (order) {
      var _message$order;
      return (order === null || order === void 0 ? void 0 : order.id) === ((_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id);
    });
    if (found) {
      var _orders = orderList.orders.filter(function (order) {
        var _message$order2;
        if ((order === null || order === void 0 ? void 0 : order.id) === ((_message$order2 = message.order) === null || _message$order2 === void 0 ? void 0 : _message$order2.id)) {
          if (order.last_message_at !== message.created_at) {
            if (message.type === 1) {
              order.last_general_message_at = message.created_at;
              if (message.author.level !== 0) {
                order.unread_general_count = order.unread_general_count + 1;
              }
            } else {
              order.last_direct_message_at = message.created_at;
              if (message.author.level !== 0) {
                order.unread_direct_count = order.unread_direct_count + 1;
              }
            }
            order.last_message_at = message.created_at;
            if (message.author.level !== 0) {
              order.unread_count = order.unread_count + 1;
            }
          }
        }
        return true;
      });
      var _sortedOrders = sortOrdersArray(orderBy, _orders);
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: _sortedOrders
      }));
    }
  };
  var isDeepEmptyObject = function isDeepEmptyObject(obj) {
    for (var key in obj) {
      if (obj[key] !== null && _typeof(obj[key]) === 'object' && !isDeepEmptyObject(obj[key])) {
        return false;
      }
      if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return false;
      }
      if (obj[key] !== null && _typeof(obj[key]) !== 'object' && obj[key] !== '') {
        return false;
      }
    }
    return true;
  };
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;
    if ((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) !== 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== 0) {
      if (Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize) >= (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage)) {
        if (orderList.orders.length === 0 && (filterValues && !isDeepEmptyObject(filterValues) || !!searchValue)) {
          getPageOrders(pagination.pageSize, pagination.currentPage);
        }
      } else if (pagination.currentPage - 1 > 0) {
        getPageOrders(pagination.pageSize, pagination.currentPage - 1);
      }
    }
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleRegisterOrder);
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleRegisterOrder);
      socket.off('message', handleNewMessage);
    };
  }, [orderList.orders, pagination, orderBy, socket, driversList, customerId, driverId]);

  // Listening for customer rating
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      var orders = orderList.orders.filter(function (_order) {
        if ((_order === null || _order === void 0 ? void 0 : _order.id) === review.order_id) {
          _order.user_review = review;
        }
        return true;
      });
      var _orders = sortOrdersArray(orderBy, orders);
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: _orders
      }));
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderList, orderBy]);
  var reloadPageOrders = function reloadPageOrders() {
    getPageOrders(pagination.pageSize, pagination.currentPage);
  };
  (0, _react.useEffect)(function () {
    events.on('websocket_connected', reloadPageOrders);
    return function () {
      events.off('websocket_connected', reloadPageOrders);
    };
  }, [pagination]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    handleDrop: handleDrop,
    saveUserSettings: saveUserSettings
  })));
};
exports.DashboardOrdersList = DashboardOrdersList;
DashboardOrdersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: _propTypes.default.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,
  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: _propTypes.default.arrayOf(_propTypes.object),
  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: _propTypes.default.arrayOf(_propTypes.number),
  /**
   * id of order to update unread_count parameter
   */
  orderIdForUnreadCountUpdate: _propTypes.default.number,
  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: _propTypes.default.arrayOf(_propTypes.number),
  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,
  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),
  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DashboardOrdersList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};