"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingWebsite = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _ApiContext = require("../../contexts/ApiContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var OrderingWebsite = function OrderingWebsite(props) {
  var UIComponent = props.UIComponent,
    appId = props.appId;
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
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    themeValues = _useState2[0],
    setThemeValues = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    advancedValues = _useState4[0],
    setAdvancedValues = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      themes: [],
      error: null,
      siteId: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    orderingTheme = _useState6[0],
    setOrderingTheme = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      themes: [],
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    themesList = _useState8[0],
    setThemesList = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    site = _useState10[0],
    setSite = _useState10[1];
  var _useState11 = (0, _react.useState)({
      businesses: [],
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    businessesList = _useState12[0],
    setBusinessesList = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      franchises: [],
      error: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    franchisesList = _useState14[0],
    setFranchisesList = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      changes: {},
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    formState = _useState16[0],
    setFormState = _useState16[1];

  /**
   * Update form data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
    setSite(_objectSpread(_objectSpread({}, site), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  /**
  * Method to get the themes from API
  */
  var getSites = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requestOptions, response, _yield$response$json, error, result, found;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context.next = 21;
              break;
            }
            found = result.find(function (site) {
              return site.code === appId;
            });
            if (!found) {
              _context.next = 19;
              break;
            }
            _context.next = 16;
            return getSiteTheme(found.id);
          case 16:
            setSite(found);
            _context.next = 21;
            break;
          case 19:
            _context.next = 21;
            return handleAddSite();
          case 21:
            _context.next = 26;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 23]]);
    }));
    return function getSites() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses from API
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var where, conditions, _yield$ordering$setAc, _yield$ordering$setAc2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'enabled',
              value: true
            });
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            _context2.next = 8;
            return ordering.setAccessToken(token).businesses().select(['name', 'logo', 'slug']).where(where).asDashboard().get();
          case 8:
            _yield$ordering$setAc = _context2.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            if (!error) {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                businesses: result
              }));
            }
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return function getBusinesses() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get brand list
   */
  var getFranchises = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var where, conditions, requestOptions, functionFetch, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
              loading: true
            }));
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'enabled',
              value: true
            });
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            functionFetch = "".concat(ordering.root, "/franchises?where=").concat(JSON.stringify(where));
            _context3.next = 10;
            return fetch(functionFetch, requestOptions);
          case 10:
            response = _context3.sent;
            _context3.next = 13;
            return response.json();
          case 13:
            _yield$response$json2 = _context3.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
                loading: false,
                franchises: result
              }));
            } else {
              setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.next = 22;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            setFranchisesList(_objectSpread(_objectSpread({}, franchisesList), {}, {
              loading: false,
              error: _context3.t0
            }));
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 19]]);
    }));
    return function getFranchises() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
  * Function to add new site from API
  */
  var handleAddSite = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var initialData, requestOptions, response, _yield$response$json3, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            initialData = {
              code: appId,
              name: 'Ordering.co'
            };
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(initialData)
            };
            _context4.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();
          case 8:
            _yield$response$json3 = _context4.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (error) {
              _context4.next = 17;
              break;
            }
            _context4.next = 14;
            return getSiteTheme(result.id);
          case 14:
            setSite(result);
            _context4.next = 18;
            break;
          case 17:
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              themes: [],
              error: result
            }));
          case 18:
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              result: [_context4.t0.message]
            }));
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 20]]);
    }));
    return function handleAddSite() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get the site theme from API
   */
  var getSiteTheme = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(siteId) {
      var requestOptions, response, _yield$response$json4, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context5.next = 4;
            return fetch("".concat(ordering.root, "/sites/").concat(siteId, "/themes"), requestOptions);
          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return response.json();
          case 7:
            _yield$response$json4 = _context5.sent;
            error = _yield$response$json4.error;
            result = _yield$response$json4.result;
            setOrderingTheme({
              loading: false,
              themes: error ? [] : result,
              error: error ? result : null,
              siteId: siteId
            });
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function getSiteTheme(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
  * Method to assign the theme to site
  */
  var handleAssignTheme = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value, themeId, siteId) {
      var requestOptions, response, _yield$response$json5, error, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                theme_id: themeId,
                values: JSON.stringify(value)
              })
            };
            _context6.next = 4;
            return fetch("".concat(ordering.root, "/sites/").concat(siteId, "/themes"), requestOptions);
          case 4:
            response = _context6.sent;
            _context6.next = 7;
            return response.json();
          case 7:
            _yield$response$json5 = _context6.sent;
            error = _yield$response$json5.error;
            result = _yield$response$json5.result;
            if (!error) {
              showToast(_ToastContext.ToastType.Success, t('THEME_ADDED', 'Theme added'));
              setOrderingTheme(_objectSpread(_objectSpread({}, orderingTheme), {}, {
                themes: [result]
              }));
            } else {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context6.t0.message);
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleAssignTheme(_x3, _x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
  * Method to get the themes from API
  */
  var getThemes = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, response, _yield$response$json6, error, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setThemesList(_objectSpread(_objectSpread({}, themesList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context7.next = 5;
            return fetch("".concat(ordering.root, "/themes"), requestOptions);
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            _yield$response$json6 = _context7.sent;
            error = _yield$response$json6.error;
            result = _yield$response$json6.result;
            setThemesList({
              loading: false,
              themes: error ? [] : result,
              error: error ? result : null
            });
            _context7.next = 17;
            break;
          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            setThemesList(_objectSpread(_objectSpread({}, themesList), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 17:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 14]]);
    }));
    return function getThemes() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
  * Method to update the site theme from API
  */
  var handleUpdateSiteTheme = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(advancedTheme) {
      var _orderingTheme$themes, _orderingTheme$themes2, _orderingTheme$themes3, themeId, siteId, myProductvalues, seoOptions, values, requestOptions, response, _yield$response$json7, error, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            themeId = (_orderingTheme$themes = orderingTheme.themes[0]) === null || _orderingTheme$themes === void 0 ? void 0 : _orderingTheme$themes.theme_id;
            siteId = (_orderingTheme$themes2 = orderingTheme.themes[0]) === null || _orderingTheme$themes2 === void 0 ? void 0 : _orderingTheme$themes2.site_id;
            myProductvalues = _objectSpread(_objectSpread({}, orderingTheme.themes[0].values), {}, {
              my_products: _objectSpread(_objectSpread({}, (_orderingTheme$themes3 = orderingTheme.themes[0].values) === null || _orderingTheme$themes3 === void 0 ? void 0 : _orderingTheme$themes3.my_products), {}, {
                components: _objectSpread({}, themeValues)
              })
            });
            seoOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(formState.changes)
            };
            _context8.next = 8;
            return fetch("".concat(ordering.root, "/sites/").concat(site.id), seoOptions);
          case 8:
            values = advancedTheme ? JSON.parse(JSON.stringify(advancedTheme)) : JSON.parse(JSON.stringify(myProductvalues));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                values: JSON.stringify(values)
              })
            };
            _context8.next = 12;
            return fetch("".concat(ordering.root, "/sites/").concat(siteId, "/themes/").concat(themeId), requestOptions);
          case 12:
            response = _context8.sent;
            _context8.next = 15;
            return response.json();
          case 15:
            _yield$response$json7 = _context8.sent;
            error = _yield$response$json7.error;
            result = _yield$response$json7.result;
            if (!error) {
              showToast(_ToastContext.ToastType.Success, t('THEME_UPDATED', 'Theme updated'));
            } else {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context8.next = 24;
            break;
          case 21:
            _context8.prev = 21;
            _context8.t0 = _context8["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context8.t0.message);
          case 24:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 21]]);
    }));
    return function handleUpdateSiteTheme(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!appId) return;
    getThemes();
    getSites();
    getBusinesses();
    getFranchises();
  }, [appId]);
  (0, _react.useEffect)(function () {
    var _themesList$themes, _orderingTheme$themes4;
    if (orderingTheme !== null && orderingTheme !== void 0 && orderingTheme.siteId && (_themesList$themes = themesList.themes) !== null && _themesList$themes !== void 0 && _themesList$themes.length && !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$themes4 = orderingTheme.themes) !== null && _orderingTheme$themes4 !== void 0 && _orderingTheme$themes4.length)) {
      var _themesList$themes$, _valuesDefault$my_pro, _valuesDefault$my_pro2, _valuesDefault$my_pro3, _valuesDefault$my_pro4, _themesList$themes$2;
      var valuesDefault = JSON.parse(JSON.stringify((_themesList$themes$ = themesList.themes[0]) === null || _themesList$themes$ === void 0 ? void 0 : _themesList$themes$.values_default));
      if (valuesDefault !== null && valuesDefault !== void 0 && (_valuesDefault$my_pro = valuesDefault.my_products) !== null && _valuesDefault$my_pro !== void 0 && (_valuesDefault$my_pro2 = _valuesDefault$my_pro.components) !== null && _valuesDefault$my_pro2 !== void 0 && (_valuesDefault$my_pro3 = _valuesDefault$my_pro2.website_settings) !== null && _valuesDefault$my_pro3 !== void 0 && (_valuesDefault$my_pro4 = _valuesDefault$my_pro3.components) !== null && _valuesDefault$my_pro4 !== void 0 && _valuesDefault$my_pro4.values) {
        valuesDefault.my_products.components.website_settings.components.values.default_domain = "https://".concat(ordering.project, ".tryordering.com");
      }
      handleAssignTheme(valuesDefault, (_themesList$themes$2 = themesList.themes[0]) === null || _themesList$themes$2 === void 0 ? void 0 : _themesList$themes$2.id, orderingTheme === null || orderingTheme === void 0 ? void 0 : orderingTheme.siteId);
    }
  }, [JSON.stringify(themesList.themes), orderingTheme === null || orderingTheme === void 0 ? void 0 : orderingTheme.siteId]);
  (0, _react.useEffect)(function () {
    var _orderingTheme$themes5, _orderingTheme$themes6, _orderingTheme$themes7, _orderingTheme$themes8, _orderingTheme$themes9, _orderingTheme$themes10, _orderingTheme$themes11, _orderingTheme$themes12, _orderingTheme$themes13, _orderingTheme$themes14, _orderingTheme$themes15, _orderingTheme$themes16, _orderingTheme$themes17, _orderingTheme$themes18, _orderingTheme$themes19, _orderingTheme$themes20, _orderingTheme$themes21, _orderingTheme$themes28, _orderingTheme$themes29, _orderingTheme$themes30, _orderingTheme$themes31;
    if (!((_orderingTheme$themes5 = orderingTheme.themes[0]) !== null && _orderingTheme$themes5 !== void 0 && _orderingTheme$themes5.values)) return;
    if (((_orderingTheme$themes6 = orderingTheme.themes[0]) === null || _orderingTheme$themes6 === void 0 ? void 0 : (_orderingTheme$themes7 = _orderingTheme$themes6.values) === null || _orderingTheme$themes7 === void 0 ? void 0 : (_orderingTheme$themes8 = _orderingTheme$themes7.business_view) === null || _orderingTheme$themes8 === void 0 ? void 0 : (_orderingTheme$themes9 = _orderingTheme$themes8.components) === null || _orderingTheme$themes9 === void 0 ? void 0 : (_orderingTheme$themes10 = _orderingTheme$themes9.products) === null || _orderingTheme$themes10 === void 0 ? void 0 : (_orderingTheme$themes11 = _orderingTheme$themes10.components) === null || _orderingTheme$themes11 === void 0 ? void 0 : (_orderingTheme$themes12 = _orderingTheme$themes11.product) === null || _orderingTheme$themes12 === void 0 ? void 0 : (_orderingTheme$themes13 = _orderingTheme$themes12.components) === null || _orderingTheme$themes13 === void 0 ? void 0 : (_orderingTheme$themes14 = _orderingTheme$themes13.favorite) === null || _orderingTheme$themes14 === void 0 ? void 0 : _orderingTheme$themes14.hidden) === undefined && (_orderingTheme$themes15 = orderingTheme.themes[0]) !== null && _orderingTheme$themes15 !== void 0 && (_orderingTheme$themes16 = _orderingTheme$themes15.values) !== null && _orderingTheme$themes16 !== void 0 && (_orderingTheme$themes17 = _orderingTheme$themes16.business_view) !== null && _orderingTheme$themes17 !== void 0 && (_orderingTheme$themes18 = _orderingTheme$themes17.components) !== null && _orderingTheme$themes18 !== void 0 && (_orderingTheme$themes19 = _orderingTheme$themes18.products) !== null && _orderingTheme$themes19 !== void 0 && (_orderingTheme$themes20 = _orderingTheme$themes19.components) !== null && _orderingTheme$themes20 !== void 0 && (_orderingTheme$themes21 = _orderingTheme$themes20.product) !== null && _orderingTheme$themes21 !== void 0 && _orderingTheme$themes21.components) {
      var _orderingTheme$themes22, _orderingTheme$themes23, _orderingTheme$themes24, _orderingTheme$themes25, _orderingTheme$themes26, _orderingTheme$themes27;
      orderingTheme.themes[0].values.business_view.components.products.components.product.components.favorite = {
        hidden: (_orderingTheme$themes22 = orderingTheme.themes[0]) === null || _orderingTheme$themes22 === void 0 ? void 0 : (_orderingTheme$themes23 = _orderingTheme$themes22.values) === null || _orderingTheme$themes23 === void 0 ? void 0 : (_orderingTheme$themes24 = _orderingTheme$themes23.business_view) === null || _orderingTheme$themes24 === void 0 ? void 0 : (_orderingTheme$themes25 = _orderingTheme$themes24.components) === null || _orderingTheme$themes25 === void 0 ? void 0 : (_orderingTheme$themes26 = _orderingTheme$themes25.product) === null || _orderingTheme$themes26 === void 0 ? void 0 : (_orderingTheme$themes27 = _orderingTheme$themes26.components) === null || _orderingTheme$themes27 === void 0 ? void 0 : _orderingTheme$themes27.favorite
      };
    }
    setAdvancedValues(JSON.parse(JSON.stringify((_orderingTheme$themes28 = orderingTheme.themes[0]) === null || _orderingTheme$themes28 === void 0 ? void 0 : _orderingTheme$themes28.values)));
    var _themeValues = (_orderingTheme$themes29 = orderingTheme.themes[0]) === null || _orderingTheme$themes29 === void 0 ? void 0 : (_orderingTheme$themes30 = _orderingTheme$themes29.values) === null || _orderingTheme$themes30 === void 0 ? void 0 : (_orderingTheme$themes31 = _orderingTheme$themes30.my_products) === null || _orderingTheme$themes31 === void 0 ? void 0 : _orderingTheme$themes31.components;
    if (!_themeValues) return;
    setThemeValues(JSON.parse(JSON.stringify(_themeValues)));
  }, [orderingTheme === null || orderingTheme === void 0 ? void 0 : orderingTheme.themes]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    themeValues: themeValues,
    advancedValues: advancedValues,
    setAdvancedValues: setAdvancedValues,
    orderingTheme: orderingTheme,
    setThemeValues: setThemeValues,
    handleUpdateSiteTheme: handleUpdateSiteTheme,
    themesList: themesList,
    site: site,
    setSite: setSite,
    businessesList: businessesList,
    franchisesList: franchisesList,
    handleChangeInput: handleChangeInput
  })));
};
exports.OrderingWebsite = OrderingWebsite;
OrderingWebsite.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before sites list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after sites list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderingWebsite.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};