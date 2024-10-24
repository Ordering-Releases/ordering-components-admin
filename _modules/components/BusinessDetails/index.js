"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var BusinessDetails = function BusinessDetails(props) {
  var asDashboard = props.asDashboard,
    business = props.business,
    businessId = props.businessId,
    propsToFetch = props.propsToFetch,
    UIComponent = props.UIComponent,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
    handleSucessAddBusiness = props.handleSucessAddBusiness;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      business: null,
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessState = _useState2[0],
    setBusinessState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    actionStatus = _useState4[0],
    setActionStatus = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formState = _useState6[0],
    setFormState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      key: '',
      result: {
        error: false
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    spoonityKeyState = _useState8[0],
    setSpoonityKeyState = _useState8[1];
  var _useState9 = (0, _react.useState)({
      site: null,
      loading: false,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    siteState = _useState10[0],
    setSiteState = _useState10[1];

  /**
   * Clean formState
   */
  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };

  /**
   * Method to get business from API
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fetchEndpoint, _yield$fetchEndpoint$, result, _business2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            fetchEndpoint = asDashboard ? ordering.setAccessToken(session.token).businesses(businessId).asDashboard().select(propsToFetch) : ordering.setAccessToken(session.token).businesses(businessId).select(propsToFetch);
            _context.next = 5;
            return fetchEndpoint.get();
          case 5:
            _yield$fetchEndpoint$ = _context.sent;
            result = _yield$fetchEndpoint$.content.result;
            _business2 = Array.isArray(result) ? null : result;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              business: _business2
            }));
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function getBusinesses() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to change business enable/disable or featured/not featured
   * @param {Boolean} enabled business enable state
   * @param {Boolean} isFeatured state to check enable or featured
   */

  var handleChangeActiveBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(enabled) {
      var isFeatured,
        changes,
        _yield$ordering$setAc,
        _yield$ordering$setAc2,
        error,
        result,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            isFeatured = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
            _context2.prev = 1;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            changes = isFeatured ? {
              featured: enabled
            } : {
              enabled: enabled
            };
            _context2.next = 7;
            return ordering.setAccessToken(session.token).businesses(businessId).save(changes);
          case 7:
            _yield$ordering$setAc = _context2.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _objectSpread(_objectSpread({}, businessState.business), result)
              }));
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
            }
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 15]]);
    }));
    return function handleChangeActiveBusiness(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to delete business from API
   */
  var handleDeleteBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(businessId), requestOptions);
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            content = _context3.sent;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: content.error ? content.result : null
            }));
            if (!content.error) {
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_DELETED', 'Business deleted'));
              handleSucessRemoveBusiness && handleSucessRemoveBusiness(businessId);
              props.onClose && props.onClose();
            }
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 14]]);
    }));
    return function handleDeleteBusiness() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to duplicate business from API
   */
  var handleDuplicateBusiness = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context4.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(businessId, "/duplicate"), requestOptions);
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            content = _context4.sent;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: content.error ? content.result : null
            }));
            if (!content.error) {
              handleSucessAddBusiness && handleSucessAddBusiness(content === null || content === void 0 ? void 0 : content.result);
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_DUPLICATED', 'Business duplicated'));
            }
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function handleDuplicateBusiness() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to delet the business owner
   */
  var handleDeleteBusinessOwner = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(owners) {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, _businessState$busine, _owners, _business;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context5.next = 5;
            return ordering.setAccessToken(session.token).businesses(businessId).save({
              owners: owners
            });
          case 5:
            _yield$ordering$setAc3 = _context5.sent;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              _owners = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.owners.filter(function (owner) {
                return owners.includes(owner.id);
              });
              _business = _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
                owners: _owners
              });
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _business
              }));
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_OWNER_DELETED', 'Business owner deleted'));
            }
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleDeleteBusinessOwner(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to delet the business owner
   */
  var handleAddBusinessOwner = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(owners, newOwner) {
      var _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, _businessState$busine2, _owners, _business;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context6.next = 5;
            return ordering.setAccessToken(session.token).businesses(businessId).save({
              owners: owners
            });
          case 5:
            _yield$ordering$setAc5 = _context6.sent;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              _owners = [].concat(_toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.owners), [newOwner]);
              _business = _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
                owners: _owners
              });
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _business
              }));
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_OWNER_ADDED', 'Business owner added'));
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleAddBusinessOwner(_x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to update the business from the API
   */
  var handleUpdateBusinessClick = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            _context7.next = 5;
            return ordering.businesses(businessId).save(formState.changes, {
              accessToken: session.token
            });
          case 5:
            response = _context7.sent;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: response.content.error ? formState.changes : {},
              result: response.content,
              loading: false
            }));
            if (!response.content.error) {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _objectSpread(_objectSpread({}, businessState.business), response.content.result)
              }));
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
            }
            _context7.next = 13;
            break;
          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context7.t0.message
              },
              loading: false
            }));
          case 13:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 10]]);
    }));
    return function handleUpdateBusinessClick() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to set Spoonity key
   */
  var handleUpdateSpoonityKey = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(key, config) {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            setSpoonityKeyState(_objectSpread(_objectSpread({}, spoonityKeyState), {}, {
              loading: true
            }));
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                value: key
              })
            };
            _context8.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(businessId, "/configs/").concat(config), requestOptions);
          case 6:
            response = _context8.sent;
            _context8.next = 9;
            return response.json();
          case 9:
            content = _context8.sent;
            if (content) {
              showToast(_ToastContext.ToastType.Success, t('SPOONITY_KEY_UPDATED', 'Spoonity key updated'));
              setSpoonityKeyState(_objectSpread(_objectSpread({}, spoonityKeyState), {}, {
                key: content.result.value,
                result: content.result,
                loading: false
              }));
            }
            _context8.next = 17;
            break;
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            showToast(_ToastContext.ToastType.Error, t('SPOONITY_KEY_ERROR', 'Spoonity key error'));
            setSpoonityKeyState(_objectSpread(_objectSpread({}, spoonityKeyState), {}, {
              result: {
                error: true,
                result: _context8.t0.message
              },
              loading: false
            }));
          case 17:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 13]]);
    }));
    return function handleUpdateSpoonityKey(_x6, _x7) {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to add the business fields when new busines item is added
   */
  var handleSuccessAddBusinessItem = function handleSuccessAddBusinessItem(name, result) {
    var params = [].concat(_toConsumableArray(businessState === null || businessState === void 0 ? void 0 : businessState.business[name]), [result]);
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, _defineProperty({}, name, params))
    }));
  };
  /**
   * Method to delete the business item from business
   */
  var handleSuccessDeleteBusinessItem = function handleSuccessDeleteBusinessItem(name, id) {
    var params = businessState === null || businessState === void 0 ? void 0 : businessState.business[name].filter(function (item) {
      return item.id !== id;
    });
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, _defineProperty({}, name, params))
    }));
  };

  /**
   * Method to update the business
   */
  var handleUpdateBusinessState = function handleUpdateBusinessState(result) {
    var business = _objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business);
    Object.assign(business, result);
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: business
    }));
  };
  var handleUpdatePreorderConfigs = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(params, configId) {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                value: params
              })
            };
            _context9.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat((business === null || business === void 0 ? void 0 : business.id) || businessId, "/configs/").concat(configId), requestOptions);
          case 6:
            response = _context9.sent;
            _context9.next = 9;
            return response.json();
          case 9:
            content = _context9.sent;
            if (!content.error) {
              setActionStatus({
                loading: false,
                error: null
              });
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _objectSpread(_objectSpread({}, businessState.business), {}, {
                  configs: businessState.business.configs.map(function (config) {
                    return config.id === configId ? content.result : config;
                  })
                })
              }));
              showToast(_ToastContext.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
            } else {
              setActionStatus({
                loading: false,
                error: content.result
              });
            }
            _context9.next = 16;
            break;
          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context9.t0.message]
            });
          case 16:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 13]]);
    }));
    return function handleUpdatePreorderConfigs(_x8, _x9) {
      return _ref9.apply(this, arguments);
    };
  }();

  /**
   * Method to get the themes from API
   */
  var getSites = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var requestOptions, response, _yield$response$json, error, result, site;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context10.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context10.sent;
            _context10.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context10.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              site = result.find(function (site) {
                return site.code === 'website';
              });
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                site: site
              }));
            } else {
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                error: result
              }));
            }
            _context10.next = 17;
            break;
          case 14:
            _context10.prev = 14;
            _context10.t0 = _context10["catch"](0);
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: false,
              error: [_context10.t0.message]
            }));
          case 17:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 14]]);
    }));
    return function getSites() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSyncEvent = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var event,
        _businessState$busine3,
        response,
        _yield$response$json2,
        result,
        error,
        _args11 = arguments;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            event = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : 'business';
            _context11.prev = 1;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            _context11.next = 5;
            return fetch("https://integrations.ordering.co/pulseposdps/api/sync_".concat(event, ".php?store_id=").concat(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.external_id), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            });
          case 5:
            response = _context11.sent;
            _context11.next = 8;
            return response.json();
          case 8:
            _yield$response$json2 = _context11.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (!error) {
              showToast(_ToastContext.ToastType.Success, (result === null || result === void 0 ? void 0 : result[0]) || t('OK', 'OK'));
            }
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false
            }));
            _context11.next = 18;
            break;
          case 15:
            _context11.prev = 15;
            _context11.t0 = _context11["catch"](1);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              error: [_context11.t0.message],
              loading: false
            }));
          case 18:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[1, 15]]);
    }));
    return function handleSyncEvent() {
      return _ref11.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!(businessState !== null && businessState !== void 0 && businessState.business)) return;
    handleSucessUpdateBusiness && handleSucessUpdateBusiness(businessState === null || businessState === void 0 ? void 0 : businessState.business);
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);
  (0, _react.useEffect)(function () {
    if (business) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        loading: false,
        business: business
      }));
    } else {
      getBusinesses();
    }
  }, [businessId, business]);
  (0, _react.useEffect)(function () {
    getSites();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessState: businessState,
    actionStatus: actionStatus,
    formState: formState,
    setFormState: setFormState,
    cleanFormState: cleanFormState,
    handleChangeActiveBusiness: handleChangeActiveBusiness,
    handleDuplicateBusiness: handleDuplicateBusiness,
    handleDeleteBusiness: handleDeleteBusiness,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleSuccessAddBusinessItem: handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem: handleSuccessDeleteBusinessItem,
    handleUpdatePreorderConfigs: handleUpdatePreorderConfigs,
    handleUpdateSpoonityKey: handleUpdateSpoonityKey,
    handleSyncEvent: handleSyncEvent,
    spoonityKeyState: spoonityKeyState,
    siteState: siteState
  })));
};
exports.BusinessDetails = BusinessDetails;
BusinessDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
  * This must be contains businessId to fetch
  */
  businessId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
  * Business, this must be contains an object with all business info
  */
  business: _propTypes.default.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'slug', 'schedule', 'description', 'about', 'logo', 'header', 'phone', 'cellphone', 'owner_id', 'city_id', 'address', 'address_notes', 'zipcode', 'location', 'featured', 'timezone', 'currency', 'food', 'alcohol', 'groceries', 'laundry', 'use_printer', 'printer_id', 'minimum', 'delivery_price', 'always_deliver', 'tax_type', 'tax', 'delivery_time', 'pickup_time', 'service_fee', 'fixed_usage_fee', 'percentage_usage_fee', 'order_default_priority', 'cancel_order_after_minutes', 'enabled', 'preorder_time', 'maximum', 'schedule_ranges', 'franchise_id', 'external_id', 'front_layout', 'seo_image', 'seo_title', 'seo_description', 'eta_status_times', 'eta_variation_time', 'price_level', 'facebook_profile', 'instagram_profile', 'tiktok_profile', 'snapchat_profile', 'pinterest_profile', 'whatsapp_number', 'delivery_tax_rate', 'delivery_tax_type', 'disabled_reason', 'menus_count', 'available_menus_count', 'menus_shared_count', 'available_menus_shared_count', 'professionals', 'configs', 'checkoutfields', 'reviews', 'open', 'today', 'lazy_load_products_recommended', 'available_products_count', 'valid_service', 'num_zones', 'types', 'metafields', 'owners', 'gallery', 'city', 'webhooks', 'maximums', 'paymethods', 'ribbon', 'offers', 'drivergroups']
};