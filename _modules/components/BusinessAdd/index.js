"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAdd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
 * Component to manage business form details behavior without UI component
 */
var BusinessAdd = function BusinessAdd(props) {
  var _configs$google_maps_, _session$user;
  var UIComponent = props.UIComponent,
    handleOpenCategory = props.handleOpenCategory,
    defaultSandboxRequiredGateways = props.defaultSandboxRequiredGateways;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    zoneState = _useState4[0],
    setZoneState = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    gallery = _useState6[0],
    setGallery = _useState6[1];
  var _useState7 = (0, _react.useState)({
      paymethods: [],
      loading: true,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    paymethodsList = _useState8[0],
    setPaymethodsList = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    paymethodIds = _useState10[0],
    setPaymethodIds = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    addressChange = _useState12[0],
    setAddressChange = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    schedule = _useState14[0],
    setSchedule = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    kmlData = _useState16[0],
    setKmlData = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    cityId = _useState18[0],
    setCityId = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    details = _useState20[0],
    setDetails = _useState20[1];
  var timeout = null;
  var paymethodsNotAllowed = ['paypal_express', 'authorize'];
  var googleMapsApiKey = configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var sandboxRequiredGateways = defaultSandboxRequiredGateways || ['paypal', 'stripe_direct', 'paypal_express', 'stripe_connect', 'stripe_redirect', 'carlos_payment', 'ivr'];

  /**
   * Clean formState
   */
  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };

  /**
   * deafult params to add the business newly
   */
  var defaultAddBusinessParams = {
    minimum: 0,
    delivery_price: 0,
    tax: 0,
    tax_type: 1,
    service_fee: 0,
    enabled: true,
    owner_id: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id
  };

  /**
  * Method to get paymethods from API
  */
  var getAllPaymethods = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, _yield$response$json, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(ordering.root, "/paymethods?where=[{%22attribute%22:%22enabled%22,%22value%22:true}]"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                }
              });
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: parsePaymethods(result)
              }));
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                error: _context.t0.message
              }));
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function getAllPaymethods() {
      return _ref.apply(this, arguments);
    };
  }();
  var parsePaymethods = function parsePaymethods(paymethods) {
    var _paymethods = paymethods && paymethods.filter(function (paymethod) {
      return !paymethodsNotAllowed.includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway);
    });
    return _paymethods;
  };
  var handleChangeZoneState = function handleChangeZoneState(e, isMany, unit) {
    var _e$target;
    var currentChanges = {};
    if (isMany) {
      currentChanges = _objectSpread({}, e);
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }
    if ((e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.name) === 'distance') {
      var _data;
      setZoneState(_objectSpread(_objectSpread({}, zoneState), {}, {
        data: (_data = {}, _defineProperty(_data, e.target.name, e.target.value), _defineProperty(_data, "unit", unit), _data)
      }));
    } else {
      setZoneState(_objectSpread(_objectSpread({}, zoneState), currentChanges));
    }
  };

  /**
   * Method to add the business
   */
  var handleAddBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _formState$changes, changes, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              formState === null || formState === void 0 ? true : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? true : delete _formState$changes.schedule;
              changes = _objectSpread(_objectSpread(_objectSpread({}, formState.changes), defaultAddBusinessParams), {}, {
                schedule: schedule
              }, cityId && {
                city_id: cityId
              });
              _context4.next = 7;
              return ordering.businesses().save(changes, {
                accessToken: session.token
              });
            case 7:
              response = _context4.sent;
              if (response.content.error) {
                _context4.next = 20;
                break;
              }
              if (!(paymethodIds.length > 0)) {
                _context4.next = 12;
                break;
              }
              _context4.next = 12;
              return Promise.all(paymethodIds.map( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(paymethodId) {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return handleAddPaymethods(response.content.result.id, paymethodId);
                        case 2:
                          return _context2.abrupt("return", _context2.sent);
                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 12:
              if (!(gallery.length > 0)) {
                _context4.next = 15;
                break;
              }
              _context4.next = 15;
              return Promise.all(gallery.map( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(galleryItem) {
                  var _response$content, _response$content$res;
                  var newGallery;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          newGallery = {
                            business_id: response === null || response === void 0 ? void 0 : (_response$content = response.content) === null || _response$content === void 0 ? void 0 : (_response$content$res = _response$content.result) === null || _response$content$res === void 0 ? void 0 : _response$content$res.id,
                            file: galleryItem === null || galleryItem === void 0 ? void 0 : galleryItem.file,
                            type: 1
                          };
                          _context3.next = 3;
                          return handleAddBusinessGallery(response.content.result.id, newGallery);
                        case 3:
                          return _context3.abrupt("return", _context3.sent);
                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));
                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 15:
              if (!(zoneState !== null && zoneState !== void 0 && zoneState.name && zoneState !== null && zoneState !== void 0 && zoneState.minimum && zoneState !== null && zoneState !== void 0 && zoneState.price)) {
                _context4.next = 18;
                break;
              }
              _context4.next = 18;
              return handleAddDeliveryZone(response.content.result.id);
            case 18:
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_ADDED', 'Business added'));
              handleOpenCategory && handleOpenCategory(response.content.result.slug);
            case 20:
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: response.content.error ? formState.changes : {},
                result: response.content,
                loading: false
              }));
              _context4.next = 26;
              break;
            case 23:
              _context4.prev = 23;
              _context4.t0 = _context4["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context4.t0.message
                },
                loading: false
              }));
            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 23]]);
    }));
    return function handleAddBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleAddDeliveryZone = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(businessId) {
      var currentChanges, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              currentChanges = _objectSpread({}, zoneState);
              currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, {
                data: JSON.stringify(zoneState === null || zoneState === void 0 ? void 0 : zoneState.data),
                type: (zoneState === null || zoneState === void 0 ? void 0 : zoneState.type) || 2,
                enabled: true,
                schedule: JSON.stringify([{
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }, {
                  enabled: true,
                  lapses: [{
                    open: {
                      hour: 0,
                      minute: 0
                    },
                    close: {
                      hour: 23,
                      minute: 59
                    }
                  }]
                }])
              });
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: JSON.stringify(currentChanges)
              };
              _context5.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/deliveryzones"), requestOptions);
            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return response.json();
            case 8:
              content = _context5.sent;
              return _context5.abrupt("return", content);
            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return function handleAddDeliveryZone(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleAddPaymethods = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(businessId, paymethodId) {
      var paymethod, params, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              paymethod = paymethodsList.paymethods.find(function (_paymethod) {
                return _paymethod.id === paymethodId;
              });
              params = {
                enabled: true,
                paymethod_id: paymethodId,
                sandbox: sandboxRequiredGateways.includes(paymethod.gateway)
              };
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                },
                body: JSON.stringify(params)
              };
              _context6.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/paymethods"), requestOptions);
            case 5:
              response = _context6.sent;
              _context6.next = 8;
              return response.json();
            case 8:
              content = _context6.sent;
              return _context6.abrupt("return", content);
            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return function handleAddPaymethods(_x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleAddBusinessGallery = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(businessId, changes) {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: JSON.stringify(changes)
              };
              _context7.next = 3;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/gallery"), requestOptions);
            case 3:
              response = _context7.sent;
              _context7.next = 6;
              return response.json();
            case 6:
              content = _context7.sent;
              return _context7.abrupt("return", content);
            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return function handleAddBusinessGallery(_x6, _x7) {
      return _ref7.apply(this, arguments);
    };
  }();
  var getCities = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _yield$ordering$count, _yield$ordering$count2, error, result, cities, _cities, _cities$, _iterator, _step, country;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return ordering.countries().select().get();
            case 3:
              _yield$ordering$count = _context8.sent;
              _yield$ordering$count2 = _yield$ordering$count.content;
              error = _yield$ordering$count2.error;
              result = _yield$ordering$count2.result;
              cities = [];
              if (!error) {
                _iterator = _createForOfIteratorHelper(result);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    country = _step.value;
                    if (country !== null && country !== void 0 && country.enabled) {
                      cities = [].concat(_toConsumableArray(cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (((_cities = cities) === null || _cities === void 0 ? void 0 : _cities.length) > 0) setCityId((_cities$ = cities[0]) === null || _cities$ === void 0 ? void 0 : _cities$.id);
              }
              _context8.next = 14;
              break;
            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](0);
              console.log(_context8.t0.message);
            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 11]]);
    }));
    return function getCities() {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};
    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  var handlechangeImage = function handlechangeImage(file, name) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, reader.result))
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Update ribbon data
   * @param {Object} changes Related HTML event
   */
  var handleChangeRibbon = function handleChangeRibbon(changes) {
    var _formState$changes2, _formState$changes3;
    var ribbonChanges = formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.ribbon ? _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.ribbon), changes) : _objectSpread({}, changes);
    var currentChanges = _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
      ribbon: ribbonChanges
    });
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: currentChanges
    }));
  };
  var handleChangeSwtich = function handleChangeSwtich(name, checked) {
    var changes = _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, checked));
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: changes
    }));
  };
  var changeFormState = function changeFormState(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), changes)
    }));
  };
  var getTimeZone = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(lat, lng) {
      var date, timestamp, url, response, result;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              date = new Date();
              timestamp = Math.floor(date.getTime() / 1000);
              url = "https://maps.googleapis.com/maps/api/timezone/json?location=".concat(lat, ",").concat(lng, "&timestamp=").concat(timestamp, "&key=").concat(googleMapsApiKey);
              _context9.next = 5;
              return fetch(url, {
                method: 'GET'
              });
            case 5:
              response = _context9.sent;
              _context9.next = 8;
              return response.json();
            case 8:
              result = _context9.sent;
              return _context9.abrupt("return", result === null || result === void 0 ? void 0 : result.timeZoneId);
            case 10:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return function getTimeZone(_x8, _x9) {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleChangeAddress = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(address) {
      var _address$location, _address$location2;
      var timezone;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return getTimeZone(address === null || address === void 0 ? void 0 : (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat, address === null || address === void 0 ? void 0 : (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng);
            case 2:
              timezone = _context10.sent;
              setAddressChange({
                address: address === null || address === void 0 ? void 0 : address.address,
                location: _objectSpread(_objectSpread({}, address === null || address === void 0 ? void 0 : address.location), {}, {
                  zipcode: address !== null && address !== void 0 && address.zipcode ? address.zipcode : -1,
                  zoom: 15
                }),
                timezone: timezone
              });
            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    return function handleChangeAddress(_x10) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleChangeCenter = function handleChangeCenter(address) {
    var timezone;
    clearTimeout(timeout);
    timeout = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return getTimeZone(address === null || address === void 0 ? void 0 : address.lat(), address === null || address === void 0 ? void 0 : address.lng());
            case 2:
              timezone = _context11.sent;
              setAddressChange({
                location: {
                  lat: address === null || address === void 0 ? void 0 : address.lat(),
                  lng: address === null || address === void 0 ? void 0 : address.lng(),
                  zoom: 15,
                  zipcode: -1
                },
                timezone: timezone
              });
            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })), 200);
  };
  var handleUploadKmlFiles = function handleUploadKmlFiles(files) {
    if (files.length === 1) {
      var reader = new window.FileReader();
      reader.readAsText(files[0]);
      reader.onload = function () {
        extractGoogleCoords(reader.result);
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
    }
  };
  var extractGoogleCoords = function extractGoogleCoords(plainText) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(plainText, 'text/xml');
    var googlePolygons = [];
    var placeMarkName = '';
    if (xmlDoc.documentElement.nodeName === 'kml') {
      var _iterator2 = _createForOfIteratorHelper(xmlDoc.getElementsByTagName('Placemark')),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim();
          var polygons = item.getElementsByTagName('Polygon');
          var _iterator3 = _createForOfIteratorHelper(polygons),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var polygon = _step3.value;
              var coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
              coords = coords.replace(/\n/g, ' ').replace(/\s+/g, ' ');
              var points = coords.split(' ');
              var googlePolygonsPaths = [];
              var _iterator4 = _createForOfIteratorHelper(points),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var point = _step4.value;
                  var coord = point.split(',');
                  googlePolygonsPaths.push({
                    lat: +coord[1],
                    lng: +coord[0]
                  });
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              googlePolygons.push(googlePolygonsPaths);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        result: {
          error: t('INVALID_KML_FILE', 'Invalid KML file')
        }
      }));
    }
    if (googlePolygons.length === 1) {
      setZoneState(_objectSpread(_objectSpread({}, zoneState), {}, {
        type: 2,
        name: placeMarkName,
        data: googlePolygons[0]
      }));
      setKmlData(googlePolygons[0]);
    } else {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        result: {
          error: t('INVALID_KML_FILE', 'Invalid KML file')
        }
      }));
    }
  };
  var getSchedule = function getSchedule(periods) {
    var _schedule$, _schedule$2;
    var extraHours = null;
    var schedule = [];
    var _loop = function _loop(i) {
      var _period$open, _period$close, _period$open4, _period$close4, _period$open7;
      var period = periods.find(function (item) {
        var _item$open;
        return (item === null || item === void 0 ? void 0 : (_item$open = item.open) === null || _item$open === void 0 ? void 0 : _item$open.day) === i;
      });
      if (!period) {
        !extraHours ? schedule.push({
          enabled: true,
          lapses: [{
            open: {
              hour: 0,
              minute: 0
            },
            close: {
              hour: 23,
              minute: 59
            }
          }]
        }) : schedule.push({
          enabled: true,
          lapses: extraHours
        });
      }
      if ((period === null || period === void 0 ? void 0 : (_period$open = period.open) === null || _period$open === void 0 ? void 0 : _period$open.day) === i && (period === null || period === void 0 ? void 0 : (_period$close = period.close) === null || _period$close === void 0 ? void 0 : _period$close.day) === i) {
        var _period$open2, _period$open3, _period$close2, _period$close3;
        var lapses = [{
          open: {
            hour: period === null || period === void 0 ? void 0 : (_period$open2 = period.open) === null || _period$open2 === void 0 ? void 0 : _period$open2.hours,
            minute: period === null || period === void 0 ? void 0 : (_period$open3 = period.open) === null || _period$open3 === void 0 ? void 0 : _period$open3.minutes
          },
          close: {
            hour: period === null || period === void 0 ? void 0 : (_period$close2 = period.close) === null || _period$close2 === void 0 ? void 0 : _period$close2.hours,
            minute: period === null || period === void 0 ? void 0 : (_period$close3 = period.close) === null || _period$close3 === void 0 ? void 0 : _period$close3.minutes
          }
        }];
        extraHours && lapses.unshift(extraHours);
        extraHours = null;
        schedule.push({
          enabled: true,
          lapses: lapses
        });
      }
      if ((period === null || period === void 0 ? void 0 : (_period$open4 = period.open) === null || _period$open4 === void 0 ? void 0 : _period$open4.day) === i && period !== null && period !== void 0 && period.close && (period === null || period === void 0 ? void 0 : (_period$close4 = period.close) === null || _period$close4 === void 0 ? void 0 : _period$close4.day) !== i) {
        var _period$open5, _period$open6, _period$close5, _period$close6;
        var _lapses = [{
          open: {
            hour: period === null || period === void 0 ? void 0 : (_period$open5 = period.open) === null || _period$open5 === void 0 ? void 0 : _period$open5.hours,
            minute: period === null || period === void 0 ? void 0 : (_period$open6 = period.open) === null || _period$open6 === void 0 ? void 0 : _period$open6.minutes
          },
          close: {
            hour: 23,
            minute: 59
          }
        }];
        extraHours && _lapses.unshift(extraHours);
        if ((period === null || period === void 0 ? void 0 : (_period$close5 = period.close) === null || _period$close5 === void 0 ? void 0 : _period$close5.hours) !== 0 && (period === null || period === void 0 ? void 0 : (_period$close6 = period.close) === null || _period$close6 === void 0 ? void 0 : _period$close6.minutes) !== 0) {
          var _period$close7, _period$close8;
          extraHours = {
            open: {
              hour: 0,
              minute: 0
            },
            close: {
              hour: period === null || period === void 0 ? void 0 : (_period$close7 = period.close) === null || _period$close7 === void 0 ? void 0 : _period$close7.hours,
              minute: period === null || period === void 0 ? void 0 : (_period$close8 = period.close) === null || _period$close8 === void 0 ? void 0 : _period$close8.minutes
            }
          };
        }
        schedule.push({
          enabled: true,
          lapses: _lapses
        });
      }
      if ((period === null || period === void 0 ? void 0 : (_period$open7 = period.open) === null || _period$open7 === void 0 ? void 0 : _period$open7.day) === i && !(period !== null && period !== void 0 && period.close)) {
        var _period$open8, _period$open9;
        var _lapses2 = [{
          open: {
            hour: period === null || period === void 0 ? void 0 : (_period$open8 = period.open) === null || _period$open8 === void 0 ? void 0 : _period$open8.hours,
            minute: period === null || period === void 0 ? void 0 : (_period$open9 = period.open) === null || _period$open9 === void 0 ? void 0 : _period$open9.minutes
          },
          close: {
            hour: 23,
            minute: 59
          }
        }];
        extraHours = null;
        schedule.push({
          enabled: true,
          lapses: _lapses2
        });
      }
    };
    for (var i = 0; i < 7; i++) {
      _loop(i);
    }
    if (extraHours && (_schedule$ = schedule[0]) !== null && _schedule$ !== void 0 && _schedule$.enabled) schedule[0].lapses.unshift(extraHours);
    if (extraHours && !((_schedule$2 = schedule[0]) !== null && _schedule$2 !== void 0 && _schedule$2.enabled)) schedule[0] = {
      enabled: true,
      lapses: extraHours
    };
    return schedule;
  };
  (0, _react.useEffect)(function () {
    if (details) {
      var _details$photos, _details$price_level, _details$opening_hour, _details$opening_hour2, _details$geometry, _details$geometry$loc, _details$geometry2, _details$geometry2$lo;
      var photos = details === null || details === void 0 ? void 0 : (_details$photos = details.photos) === null || _details$photos === void 0 ? void 0 : _details$photos.map(function (photo) {
        return {
          temp_id: (0, _utils.getUniqueId)(),
          file: photo.getUrl()
        };
      });
      (photos === null || photos === void 0 ? void 0 : photos.length) > 0 && setGallery(photos);
      var changes = _objectSpread(_objectSpread({
        name: details === null || details === void 0 ? void 0 : details.name,
        slug: (0, _utils.stringToSlug)(details === null || details === void 0 ? void 0 : details.name),
        cellphone: details === null || details === void 0 ? void 0 : details.international_phone_number,
        price_level: details === null || details === void 0 ? void 0 : (_details$price_level = details.price_level) === null || _details$price_level === void 0 ? void 0 : _details$price_level.toString(),
        logo: details === null || details === void 0 ? void 0 : details.icon,
        address: details === null || details === void 0 ? void 0 : details.formatted_address
      }, (details === null || details === void 0 ? void 0 : (_details$opening_hour = details.opening_hours) === null || _details$opening_hour === void 0 ? void 0 : _details$opening_hour.periods) && {
        schedule: getSchedule(details === null || details === void 0 ? void 0 : (_details$opening_hour2 = details.opening_hours) === null || _details$opening_hour2 === void 0 ? void 0 : _details$opening_hour2.periods)
      }), {}, {
        location: {
          lat: details === null || details === void 0 ? void 0 : (_details$geometry = details.geometry) === null || _details$geometry === void 0 ? void 0 : (_details$geometry$loc = _details$geometry.location) === null || _details$geometry$loc === void 0 ? void 0 : _details$geometry$loc.lat(),
          lng: details === null || details === void 0 ? void 0 : (_details$geometry2 = details.geometry) === null || _details$geometry2 === void 0 ? void 0 : (_details$geometry2$lo = _details$geometry2.location) === null || _details$geometry2$lo === void 0 ? void 0 : _details$geometry2$lo.lng(),
          zipcode: -1,
          zoom: 15
        }
      });
      changeFormState(changes);
    }
  }, [details]);
  (0, _react.useEffect)(function () {
    if (!addressChange) return;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), addressChange)
    }));
  }, [addressChange]);
  (0, _react.useEffect)(function () {
    getAllPaymethods();
    getCities();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cleanFormState: cleanFormState,
    formState: formState,
    setFormState: setFormState,
    handleChangeInput: handleChangeInput,
    handlechangeImage: handlechangeImage,
    handleAddBusiness: handleAddBusiness,
    handleChangeAddress: handleChangeAddress,
    handleChangeCenter: handleChangeCenter,
    handleChangeSwtich: handleChangeSwtich,
    handleChangeRibbon: handleChangeRibbon,
    handleChangeGallery: setGallery,
    changeFormState: changeFormState,
    paymethodsList: paymethodsList,
    kmlData: kmlData,
    handleUploadKmlFiles: handleUploadKmlFiles,
    zoneState: zoneState,
    handleChangeZoneState: handleChangeZoneState,
    gallery: gallery,
    paymethodIds: paymethodIds,
    handleChangePaymethodIds: setPaymethodIds,
    handleChangeSchedule: setSchedule,
    details: details,
    setDetails: setDetails
  })));
};
exports.BusinessAdd = BusinessAdd;
BusinessAdd.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before business details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after business details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessAdd.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};