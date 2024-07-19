"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceDriverManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ConfigContext = require("../../contexts/ConfigContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
 * Component to manage InvoiceDriverManager behavior without UI component
 */
var InvoiceDriverManager = function InvoiceDriverManager(props) {
  var _configs$wallet_cash_, _configs$wallet_credi;
  var UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isCashWalletEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1';
  var isCreditPointEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1';
  var _useState = (0, _react.useState)({
      loading: false,
      drivers: [],
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    driverList = _useState2[0],
    setDriverList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      data: [],
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    payMethodsList = _useState4[0],
    setPayMethodsList = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      invoice: null,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    exportInvoiceList = _useState6[0],
    setExportInvoiceList = _useState6[1];
  var _useState7 = (0, _react.useState)({
      from: '',
      to: '',
      driver: '',
      cancelled: false,
      notes: '',
      percentage_fee: 0,
      fixed_fee: 0,
      percentage_delivery_price: 0,
      percentage_driver_tip: 0,
      tax: 0,
      misc_amount: 0,
      misc_description: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    driverInvocing = _useState8[0],
    setDriverInvocing = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    filterPaymethodsID = _useState10[0],
    setFilterPaymethodsID = _useState10[1];
  /**
   * Method to update payMethod List
   */
  var handleChangePayMethods = function handleChangePayMethods(payMethods) {
    var _paymethodIds = payMethods.filter(function (_payMethods) {
      return _payMethods.enabled;
    }).map(function (_payMethodss) {
      return _payMethodss.id;
    });
    setFilterPaymethodsID(_paymethodIds);
    setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
      data: payMethods
    }));
  };

  /**
   * Method to get drivers from API
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var where, _yield$ordering$users, _yield$ordering$users2, error, result, pagination;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
              loading: true
            }));
            where = [{
              attribute: 'level',
              value: '4'
            }];
            _context.next = 5;
            return ordering.users().asDashboard().select(propsToFetch).where(where).get();
          case 5:
            _yield$ordering$users = _context.sent;
            _yield$ordering$users2 = _yield$ordering$users.content;
            error = _yield$ordering$users2.error;
            result = _yield$ordering$users2.result;
            pagination = _yield$ordering$users2.pagination;
            if (!error) {
              setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
                loading: false,
                drivers: result,
                pagination: pagination
              }));
            } else {
              setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            setDriverList(_objectSpread(_objectSpread({}, driverList), {}, {
              loading: false,
              error: [_context.t0 || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.toString()) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message)]
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    }));
    return function getDrivers() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get payMethod list from API
   */
  var getPaymentMethod = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, error, result, _data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!loading) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            _context2.prev = 2;
            setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = "".concat(ordering.root, "/paymethods");
            _context2.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context2.sent;
            _context2.next = 11;
            return response.json();
          case 11:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              _data = result.filter(function (item) {
                return item.enabled;
              });
              setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
                loading: false,
                data: _data
              }));
            } else {
              setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](2);
            setPayMethodsList(_objectSpread(_objectSpread({}, payMethodsList), {}, {
              loading: false,
              error: _context2.t0
            }));
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 17]]);
    }));
    return function getPaymentMethod() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get order list from API
   */
  var getOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var where, _yield$ordering$order, _yield$ordering$order2, error, result, pagination, invoice;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
              loading: true
            }));
            where = [{
              attribute: 'driver_id',
              value: driverInvocing.driver
            }];
            if (driverInvocing.from) {
              where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '>=',
                  value: "".concat(driverInvocing.from, " 00:00:00")
                }
              });
            }
            if (driverInvocing.to) {
              where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '<=',
                  value: "".concat(driverInvocing.to, " 23:59:59")
                }
              });
            }
            if (filterPaymethodsID.length !== 0) {
              where.push({
                attribute: 'paymethod_id',
                value: filterPaymethodsID
              });
            }
            _context3.next = 8;
            return ordering.orders().asDashboard().where(where).get();
          case 8:
            _yield$ordering$order = _context3.sent;
            _yield$ordering$order2 = _yield$ordering$order.content;
            error = _yield$ordering$order2.error;
            result = _yield$ordering$order2.result;
            pagination = _yield$ordering$order2.pagination;
            if (!error) {
              invoice = getExportInvoice(result);
              setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                loading: false,
                invoice: invoice,
                pagination: pagination
              }));
            } else {
              setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.next = 19;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            setExportInvoiceList(_objectSpread(_objectSpread({}, exportInvoiceList), {}, {
              loading: false,
              error: [_context3.t0 || (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.toString()) || (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message)]
            }));
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 16]]);
    }));
    return function getOrders() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get invoice data for exporting
   */
  var getExportInvoice = function getExportInvoice(result) {
    var paymethods = [];
    var _iterator = _createForOfIteratorHelper(payMethodsList === null || payMethodsList === void 0 ? void 0 : payMethodsList.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var paymethod = _step.value;
        if (paymethod.enabled) paymethods.push(paymethod.id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var from = driverInvocing.from.split('-');
    if (from.length === 1) from = null;else from = new Date(from[0], from[1] - 1, from[2], 0, 0, 0, 0);
    var to = driverInvocing.to.split('-');
    if (to.length === 1) to = null;else to = new Date(to[0], to[1] - 1, to[2], 11, 59, 59, 59);
    var orders = result.filter(function (order) {
      var valid = true;
      var date = order.delivery_datetime.split(' ');
      date = new Date(date[0].split('-')[0], date[0].split('-')[1] - 1, date[0].split('-')[2], 0, 0, 0, 0);
      var orderPaymethodIds = order.payment_events.reduce(function (ids, event) {
        var _event$paymethod;
        return [].concat(_toConsumableArray(ids), [event === null || event === void 0 ? void 0 : (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.id]);
      }, []);
      orderPaymethodIds.push(order.paymethod_id);
      if (isCashWalletEnabled || isCreditPointEnabled) {
        var _order$payment_events, _order$payment_events2, _order$payment_events3, _order$payment_events4;
        if ((order === null || order === void 0 ? void 0 : (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : (_order$payment_events2 = _order$payment_events.data) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.wallet_currency) === 'cash_wallet' || (order === null || order === void 0 ? void 0 : (_order$payment_events3 = order.payment_events) === null || _order$payment_events3 === void 0 ? void 0 : (_order$payment_events4 = _order$payment_events3.data) === null || _order$payment_events4 === void 0 ? void 0 : _order$payment_events4.wallet_currency) === 'credit_points') {
          valid = true;
        }
      } else if (!orderPaymethodIds.some(function (id) {
        return paymethods.includes(id);
      }) || [1, 2, 5, 6, 10, 11, 12].indexOf(order.status) === -1 || [2, 5, 6, 10, 12].indexOf(order.status) > -1 && !driverInvocing.cancelled) {
        valid = false;
      }
      if (from && from > date || to && to < date) valid = false;
      return valid;
    });
    var _exportInvoice = {
      from: driverInvocing.from,
      to: driverInvocing.to,
      orders: orders,
      percentage_fee: driverInvocing.percentage_fee,
      fixed_fee: driverInvocing.fixed_fee,
      tax: driverInvocing.tax,
      misc_amount: driverInvocing.misc_amount,
      misc_description: driverInvocing.misc_description,
      orders_subtotal: orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous + getSubtotal(current);
      }, 0),
      orders_total: orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous + getTotal(current);
      }, 0),
      discounts: orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous - getDiscount(current);
      }, 0),
      percentage_delivery_price: driverInvocing.percentage_delivery_price,
      percentage_delivery_price_total: (orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous + current.delivery_zone_price;
      }, 0)) * driverInvocing.percentage_delivery_price / 100,
      percentage_driver_tip: driverInvocing.percentage_driver_tip,
      percentage_driver_tip_total: (orders === null || orders === void 0 ? void 0 : orders.reduce(function (previous, current) {
        return previous + getDriverTip(current);
      }, 0)) * driverInvocing.percentage_driver_tip / 100,
      notes: driverInvocing.notes.replace(/\n/g, '<br>')
    };
    _exportInvoice.percentage_fee_total = (_exportInvoice.orders_subtotal + _exportInvoice.discounts) * driverInvocing.percentage_fee / 100;
    _exportInvoice.fixed_fee_total = orders.length * driverInvocing.fixed_fee;
    var subtotal = parseFloat(_exportInvoice.percentage_fee_total) + parseFloat(_exportInvoice.fixed_fee_total) + parseFloat(_exportInvoice.misc_amount) + parseFloat(_exportInvoice.percentage_delivery_price_total) + parseFloat(_exportInvoice.percentage_driver_tip_total);
    _exportInvoice.subtotal = subtotal;
    _exportInvoice.tax_total = subtotal * parseFloat(driverInvocing.tax) / 100;
    _exportInvoice.total = subtotal + _exportInvoice.tax_total;
    driverList.drivers.forEach(function (driver) {
      if (driver.id === driverInvocing.driver) {
        _exportInvoice.driver = driver;
      }
    });
    return _exportInvoice;
  };

  /**
   * Method to get sub option total
   */
  var getSuboptionTotal = function getSuboptionTotal(option, suboption) {
    var suboptionQuantity = 1;
    var suboptionPrice = suboption.price;
    if (option.allow_suboptionQuantity && suboption.quantity) {
      suboptionQuantity = suboption.quantity;
    }
    if (option.with_half_option && suboption.position && suboption.position !== 'whole') {
      suboptionPrice = suboption.half_price;
    }
    return suboptionPrice * suboptionQuantity;
  };

  /**
   * Method to get product total
   */
  var getProductsTotal = function getProductsTotal(product) {
    var total = 0;
    if (product.options) {
      for (var i = 0; i < product.options.length; i++) {
        var option = product.options[i];
        if (option.suboptions) {
          for (var j = 0; j < option.suboptions.length; j++) {
            var suboption = option.suboptions[j];
            total += getSuboptionTotal(option, suboption);
          }
        }
      }
    }
    return (total + product.price) * product.quantity;
  };

  /**
   * Method to get order sub total
   */
  var getSubtotal = function getSubtotal(order) {
    if (!order.summary) {
      var subtotal = 0;
      for (var i = 0; i < order.products.length; i++) {
        subtotal += getProductsTotal(order.products[i]);
      }
      return roundPrice(subtotal);
    } else {
      var fixOrderSummary = true;
      if (configs !== null && configs !== void 0 && configs.project_fix_order_summary) {
        var _configs$project_fix_;
        fixOrderSummary = (configs === null || configs === void 0 ? void 0 : (_configs$project_fix_ = configs.project_fix_order_summary) === null || _configs$project_fix_ === void 0 ? void 0 : _configs$project_fix_.value) === '1';
      }
      if (order.tax_type === 1 && !fixOrderSummary) {
        return order.summary.subtotal + order.summary.tax;
      }
      return order.summary.subtotal;
    }
  };

  /**
   * Method to get order tax
   */
  var getTax = function getTax(order) {
    if (!order.summary) {
      var tax = order.tax_type === 2 ? order.tax * (getSubtotal(order) - order.discount) / 100 : 0;
      return roundPrice(tax);
    } else {
      return order.summary.tax;
    }
  };

  /**
   * Method to get order discount
   */
  var getDiscount = function getDiscount(order) {
    if (!order.summary) {
      return roundPrice(order.discount);
    } else {
      return order.summary.discount;
    }
  };

  /**
   * Method to get converted number
   */
  var roundPrice = function roundPrice(value) {
    var _configs$format_numbe;
    var power = Math.pow(10, configs === null || configs === void 0 ? void 0 : (_configs$format_numbe = configs.format_number_decimal_length) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.value);
    var poweredVal = Math.round(value * power);
    return poweredVal / power;
  };

  /**
   * Method to get order total
   */
  var getTotal = function getTotal(order) {
    if (!order.summary) {
      var subtotal = getSubtotal(order);
      var tax = getTax(order);
      var serviceFee = getServiceFee(order);
      var totalorder = order.delivery_type === '2' ? subtotal + tax + serviceFee - order.discount : subtotal + tax + order.delivery_zone_price + getDriverTip(order) + serviceFee - order.discount;
      return roundPrice(totalorder);
    } else {
      return order.summary.total;
    }
  };

  /**
   * Method to get order service fee
   */
  var getServiceFee = function getServiceFee(order) {
    if (!order.summary) {
      var subtotal = (getSubtotal(order) - order.discount) * order.service_fee / 100;
      return roundPrice(subtotal);
    } else {
      return order.summary.service_fee;
    }
  };

  /**
   * Method to get order driver tip
   */
  var getDriverTip = function getDriverTip(order) {
    if (!order.summary) {
      var tip = (getSubtotal(order) - order.discount) * order.driver_tip / 100;
      return roundPrice(tip);
    } else {
      return order.summary.driver_tip;
    }
  };
  (0, _react.useEffect)(function () {
    getDrivers();
    getPaymentMethod();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driverList: driverList,
    invocing: driverInvocing,
    payMethodsList: payMethodsList,
    exportInvoiceList: exportInvoiceList,
    handleChangeInvocing: setDriverInvocing,
    handleChangePayMethods: handleChangePayMethods,
    getOrders: getOrders,
    getSubtotal: getSubtotal,
    getTotal: getTotal
  })));
};
exports.InvoiceDriverManager = InvoiceDriverManager;
InvoiceDriverManager.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
InvoiceDriverManager.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
};