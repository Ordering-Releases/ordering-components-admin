"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptionDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
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
var ProductExtraOptionDetails = function ProductExtraOptionDetails(props) {
  var UIComponent = props.UIComponent,
    business = props.business,
    extra = props.extra,
    option = props.option,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleSucccessDeleteOption = props.handleSucccessDeleteOption;
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
      option: option,
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    optionState = _useState2[0],
    setOptionState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      changes: {},
      result: {}
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    changesState = _useState4[0],
    setChangesState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editSubOptionId = _useState6[0],
    setEditSubOptionId = _useState6[1];
  var _useState7 = (0, _react.useState)({
      changes: {},
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    settingChangeState = _useState8[0],
    setSettingChangeState = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    conditionalOptions = _useState10[0],
    setConditionalOptions = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    conditionalSubOptions = _useState12[0],
    setConditionalSubOptions = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    conditionalOptionId = _useState14[0],
    setConditionalOptionId = _useState14[1];
  var _useState15 = (0, _react.useState)(extra),
    _useState16 = _slicedToArray(_useState15, 2),
    extraState = _useState16[0],
    setExtraState = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    conditionalSubOptionId = _useState18[0],
    setConditionalSubOptionId = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = _slicedToArray(_useState19, 2),
    isAddForm = _useState20[0],
    setIsAddForm = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    dragoverSubOptionId = _useState22[0],
    setDragoverSubOptionId = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isSubOptionsBottom = _useState24[0],
    setIsSubOptionsBottom = _useState24[1];

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} id sub option id
   */
  var handleChangeInput = function handleChangeInput(e, id) {
    if (id === editSubOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    } else {
      setEditSubOptionId(id);
      setChangesState({
        result: {},
        changes: _defineProperty({}, e.target.name, e.target.value)
      });
    }
  };

  /**
   * Method change default suboption
   * @param {Number} id
   */
  var handleChangeDefaultSuboption = function handleChangeDefaultSuboption(id) {
    var _optionState$option, _optionState$option$s, _optionState$option$s2, _optionState$option2, _optionState$option2$, _optionState$option2$2;
    var suboptionPreselected = optionState === null || optionState === void 0 ? void 0 : (_optionState$option = optionState.option) === null || _optionState$option === void 0 ? void 0 : (_optionState$option$s = _optionState$option.suboptions) === null || _optionState$option$s === void 0 ? void 0 : (_optionState$option$s2 = _optionState$option$s.find(function (suboption) {
      return suboption.id === id;
    })) === null || _optionState$option$s2 === void 0 ? void 0 : _optionState$option$s2.preselected;
    var defaultSubOptionsLength = optionState === null || optionState === void 0 ? void 0 : (_optionState$option2 = optionState.option) === null || _optionState$option2 === void 0 ? void 0 : (_optionState$option2$ = _optionState$option2.suboptions) === null || _optionState$option2$ === void 0 ? void 0 : (_optionState$option2$2 = _optionState$option2$.filter(function (suboption) {
      return suboption === null || suboption === void 0 ? void 0 : suboption.preselected;
    })) === null || _optionState$option2$2 === void 0 ? void 0 : _optionState$option2$2.length;
    if (suboptionPreselected) {
      handleUpdateSubOption({
        id: id,
        preselected: false
      });
    } else {
      var _optionState$option3;
      if ((optionState === null || optionState === void 0 ? void 0 : (_optionState$option3 = optionState.option) === null || _optionState$option3 === void 0 ? void 0 : _optionState$option3.max) > defaultSubOptionsLength) {
        handleUpdateSubOption({
          id: id,
          preselected: true
        });
      } else {
        showToast(_ToastContext.ToastType.Error, t('MAX_PRESELECTED_OPTIONS_ERROR', 'Maximum number of options exceeded'), 4000);
      }
    }
  };

  /**
   * Method to change the option enabled state
   * @param {Boolean} enabled
   * @param {Number} id sub option id
   */
  var handleChangeSubOptionEnable = function handleChangeSubOptionEnable(enabled, id) {
    if (id === editSubOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
          enabled: enabled
        })
      });
    } else {
      setEditSubOptionId(id);
      setChangesState({
        result: {},
        changes: {
          enabled: enabled
        }
      });
    }
  };

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  var handleChangeSubOptionImage = function handleChangeSubOptionImage(file, id) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    if (id === editSubOptionId) {
      reader.onload = function () {
        setChangesState({
          result: {},
          changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
            image: reader.result
          })
        });
      };
    } else {
      setEditSubOptionId(id);
      reader.onload = function () {
        setChangesState({
          result: {},
          changes: {
            image: reader.result
          }
        });
      };
    }
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Method to change the suboption state
   */
  var handleChangeItem = function handleChangeItem(changes, id) {
    if (id !== undefined && editSubOptionId === id) setEditSubOptionId(id);
    setChangesState({
      result: {},
      changes: _objectSpread(_objectSpread({}, changesState.changes), changes)
    });
  };

  /**
   * Method to update the business state
   * @param {Object} updatedExtra updated extra
   */
  var handleSuccessUpdateBusiness = function handleSuccessUpdateBusiness(updatedExtra) {
    if (handleUpdateBusinessState) {
      var updatedExtras = business.extras.filter(function (extra) {
        if (extra.id === updatedExtra.id) {
          Object.assign(extra, updatedExtra);
        }
        return true;
      });
      var businessState = _objectSpread(_objectSpread({}, business), {}, {
        extras: updatedExtras
      });
      var categories = businessState.categories.map(function (item) {
        var _products = item.products.map(function (prod) {
          var _extras = prod.extras.filter(function (extra) {
            if (extra.id === updatedExtra.id) {
              Object.assign(extra, updatedExtra);
            }
            return true;
          });
          return _objectSpread(_objectSpread({}, prod), {}, {
            extras: _extras
          });
        });
        var _item = _objectSpread(_objectSpread({}, item), {}, {
          products: _products
        });
        return _item;
      });
      var updatedBusiness = _objectSpread(_objectSpread({}, businessState), {}, {
        categories: categories
      });
      handleUpdateBusinessState(updatedBusiness);
    }
  };
  var handleSetConditionalOptions = function handleSetConditionalOptions(updatedExtra) {
    var extracedOptions = updatedExtra.options.filter(function (item) {
      return item.id !== option.id;
    });
    var _conditionalOptions = [];
    var _iterator = _createForOfIteratorHelper(extracedOptions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var optionItem = _step.value;
        _conditionalOptions.push({
          value: optionItem.id,
          content: optionItem.name
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    setConditionalOptions(_conditionalOptions);
  };
  var handleSetConditionalSubOptions = function handleSetConditionalSubOptions(updatedExtra, optionId) {
    var selectedOption = updatedExtra.options.find(function (item) {
      return item.id === optionId;
    });
    var _conditionalSubOptions = [];
    var _iterator2 = _createForOfIteratorHelper(selectedOption.suboptions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var subOption = _step2.value;
        _conditionalSubOptions.push({
          value: subOption.id,
          content: subOption.name
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    setConditionalSubOptions(_conditionalSubOptions);
  };
  var handleSetDefaultCondition = function handleSetDefaultCondition(respectTo) {
    var _iterator3 = _createForOfIteratorHelper(extraState === null || extraState === void 0 ? void 0 : extraState.options),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;
        if (item !== null && item !== void 0 && item.suboptions) {
          var _iterator4 = _createForOfIteratorHelper(item.suboptions),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var subItem = _step4.value;
              if (subItem.id === respectTo) {
                setConditionalOptionId(item.id);
                setConditionalSubOptionId(subItem.id);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };

  /**
   * Method to save the new ingredient from API
   */
  var handleUpdateSubOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(changesParam) {
      var _changes, changes, key, requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _changes = changesParam || _objectSpread({}, changesState.changes);
            changes = {};
            for (key in _changes) {
              if (_changes[key] !== '') {
                changes = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, key, _changes[key]));
              }
            }
            if (!(Object.keys(changes).length === 0)) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context.next = 11;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions/").concat((changesParam === null || changesParam === void 0 ? void 0 : changesParam.id) || editSubOptionId), requestOptions);
          case 11:
            response = _context.sent;
            _context.next = 14;
            return response.json();
          case 14:
            content = _context.sent;
            setChangesState({
              changes: content.error ? changesState.changes : {},
              result: content === null || content === void 0 ? void 0 : content.result
            });
            if (content.error) {
              _context.next = 26;
              break;
            }
            subOptions = optionState.option.suboptions.filter(function (subOption) {
              if (subOption.id === content.result.id) {
                Object.assign(subOption, content.result);
              }
              return true;
            });
            updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
              suboptions: subOptions
            });
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              option: updatedOption,
              loading: false
            }));
            options = extra.options.filter(function (option) {
              if (option.id === updatedOption.id) {
                Object.assign(option, updatedOption);
              }
              return true;
            });
            updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
              options: options
            });
            setExtraState(updatedExtra);
            handleSuccessUpdateBusiness(updatedExtra);
            showToast(_ToastContext.ToastType.Success, t('CHOICE_SAVED', 'Choice saved'));
            return _context.abrupt("return", true);
          case 26:
            _context.next = 31;
            break;
          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context.t0.message
            }));
          case 31:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 28]]);
    }));
    return function handleUpdateSubOption(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to add new option from API
   */
  var handleAddOption = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      var changes, key, requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            changes = _objectSpread({}, values);
            for (key in changes) {
              if (!changes[key]) {
                delete changes[key];
              }
            }
            if (!(changes !== null && changes !== void 0 && changes.price)) {
              changes.price = 0;
            }
            if (!(Object.keys(changes).length === 0)) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            changes.enabled = true;
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context2.next = 12;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions"), requestOptions);
          case 12:
            response = _context2.sent;
            _context2.next = 15;
            return response.json();
          case 15:
            content = _context2.sent;
            if (!content.error) {
              subOptions = _toConsumableArray(optionState.option.suboptions);
              subOptions.push(_objectSpread(_objectSpread({}, content.result), {}, {
                preselected: false
              }));
              updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                suboptions: subOptions
              });
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                option: updatedOption,
                loading: false
              }));
              options = extra.options.filter(function (option) {
                if (option.id === updatedOption.id) {
                  Object.assign(option, updatedOption);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                options: options
              });
              setExtraState(updatedExtra);
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('CHOICE_ADDED', 'Choice added'));
              setIsAddForm(false);
            }
            _context2.next = 22;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context2.t0.message
            }));
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 19]]);
    }));
    return function handleAddOption(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the extra
   * @param {Number} subOptionId
   */
  var handleDeteteSubOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(subOptionId) {
      var requestOptions, response, content, subOptions, updatedOption, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id, "/suboptions/").concat(subOptionId), requestOptions);
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            content = _context3.sent;
            if (!content.error) {
              subOptions = optionState.option.suboptions.filter(function (subOption) {
                return subOption.id !== subOptionId;
              });
              updatedOption = _objectSpread(_objectSpread({}, optionState.option), {}, {
                suboptions: subOptions
              });
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                option: updatedOption,
                loading: false
              }));
              options = extra.options.filter(function (option) {
                if (option.id === updatedOption.id) {
                  Object.assign(option, updatedOption);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                options: options
              });
              setExtraState(updatedExtra);
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('CHOICE_DELETED', 'Choice deleted'));
            }
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context3.t0.message
            }));
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function handleDeteteSubOption(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to handle the option setting
   * @param {String} name setting name
   * @param {Boolean} checked check state of option setting
   */
  var handleOptionSetting = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, checked) {
      var change;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            change = _defineProperty({}, name, checked);
            if (name === 'conditioned' && !checked) {
              setConditionalSubOptionId(null);
              setConditionalOptionId(null);
              change.respect_to = 0;
            }
            setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
              changes: change
            }));
            handleUpdateOption(change);
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleOptionSetting(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to save the option from API
   * @param {Object} change
   */
  var handleUpdateOption = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(change) {
      var requestOptions, response, content, options, updatedExtra;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(change)
            };
            _context5.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id), requestOptions);
          case 6:
            response = _context5.sent;
            _context5.next = 9;
            return response.json();
          case 9:
            content = _context5.sent;
            if (!content.error) {
              setSettingChangeState({
                changes: content.error ? settingChangeState.changes : {},
                loading: false
              });
              setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
                option: _objectSpread(_objectSpread({}, optionState.option), content.result)
              }));
              options = extra.options.filter(function (option) {
                if (option.id === content.result.id) {
                  Object.assign(option, content.result);
                }
                return true;
              });
              updatedExtra = _objectSpread(_objectSpread({}, extra), {}, {
                options: options
              });
              setExtraState(updatedExtra);
              handleSuccessUpdateBusiness(updatedExtra);
              showToast(_ToastContext.ToastType.Success, t('OPTION_SAVED', 'Option saved'));
            }
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            setSettingChangeState(_objectSpread(_objectSpread({}, settingChangeState), {}, {
              loading: false,
              error: _context5.t0.message
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleUpdateOption(_x7) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the extra
   */
  var handleDeteteOption = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context6.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(option.id), requestOptions);
          case 6:
            response = _context6.sent;
            _context6.next = 9;
            return response.json();
          case 9:
            content = _context6.sent;
            if (!content.error) {
              handleSucccessDeleteOption && handleSucccessDeleteOption(option.id);
              showToast(_ToastContext.ToastType.Success, t('OPTION_DELETED', 'Option deleted'));
              props.onClose && props.onClose();
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
              loading: false,
              error: _context6.t0.message
            }));
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleDeteteOption() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to change the conditional option
   * @param {Number} optionId
   */
  var handleChangeConditionalOption = function handleChangeConditionalOption(optionId) {
    setConditionalOptionId(optionId);
    handleSetConditionalSubOptions(extraState, optionId);
  };

  /**
   * Method to change the conditional option
   * @param {Number} subOptionId
   */
  var handleChangeConditionalSubOption = function handleChangeConditionalSubOption(subOptionId) {
    handleUpdateOption({
      respect_to: subOptionId
    });
  };

  /**
   * Method to handle sub option drag start
   */
  var handleDragStart = function handleDragStart(event, subOption) {
    event.dataTransfer.setData('transferSubOptionId', subOption.id);
    var ghostElement = document.createElement('div');
    ghostElement.classList.add('ghostDragging');
    ghostElement.innerHTML = subOption.name;
    document.body.appendChild(ghostElement);
    event.dataTransfer.setDragImage(ghostElement, 0, 0);
    setIsSubOptionsBottom(false);
  };

  /**
   * Method to handle sub option drag over
   */
  var hanldeDragOver = function hanldeDragOver(event, subOption, isLastSubOption) {
    event.preventDefault();
    var element = event.target.closest('.draggable-suboption');
    if (element) {
      if (!isLastSubOption) {
        setDragoverSubOptionId(subOption.id);
      } else {
        var middlePositionY = window.scrollY + event.target.getBoundingClientRect().top + event.target.offsetHeight / 2;
        var dragPositionY = event.clientY;
        if (dragPositionY > middlePositionY) {
          setIsSubOptionsBottom(true);
          setDragoverSubOptionId(null);
        } else {
          setIsSubOptionsBottom(false);
          setDragoverSubOptionId(subOption.id);
        }
      }
    }
  };

  /**
   * Method to handle sub option drop
   */
  var handleDrop = function handleDrop(event, subOption) {
    event.preventDefault();
    var transferSubOptionId = parseInt(event.dataTransfer.getData('transferSubOptionId'));
    if (subOption.id === transferSubOptionId) return;
    var dropSubOptionRank;
    if (isSubOptionsBottom) {
      dropSubOptionRank = (subOption === null || subOption === void 0 ? void 0 : subOption.rank) + 1;
    } else {
      dropSubOptionRank = subOption === null || subOption === void 0 ? void 0 : subOption.rank;
    }
    setIsSubOptionsBottom(false);
    handleUpdateSubOption({
      id: transferSubOptionId,
      rank: dropSubOptionRank
    });
  };

  /**
   * Method to handle sub option drag end
   */
  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    setDragoverSubOptionId(null);
  };
  (0, _react.useEffect)(function () {
    if (conditionalOptionId) {
      handleSetConditionalOptions(extraState);
      handleSetConditionalSubOptions(extraState, conditionalOptionId);
      var selectedOption = extraState.options.find(function (item) {
        return item.id === option.id;
      });
      handleSetDefaultCondition(selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.respect_to);
    }
  }, [extraState, conditionalOptionId]);
  (0, _react.useEffect)(function () {
    setOptionState(_objectSpread(_objectSpread({}, optionState), {}, {
      option: option
    }));
    handleSetConditionalOptions(extra);
    handleSetDefaultCondition(option === null || option === void 0 ? void 0 : option.respect_to);
  }, [option, extra]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    optionState: optionState,
    changesState: changesState,
    editSubOptionId: editSubOptionId,
    settingChangeState: settingChangeState,
    handleChangeInput: handleChangeInput,
    handleChangeSubOptionImage: handleChangeSubOptionImage,
    handleChangeSubOptionEnable: handleChangeSubOptionEnable,
    handleDeteteSubOption: handleDeteteSubOption,
    handleOptionSetting: handleOptionSetting,
    conditionalOptions: conditionalOptions,
    conditionalSubOptions: conditionalSubOptions,
    conditionalOptionId: conditionalOptionId,
    conditionalSubOptionId: conditionalSubOptionId,
    handleChangeConditionalOption: handleChangeConditionalOption,
    handleChangeConditionalSubOption: handleChangeConditionalSubOption,
    handleAddOption: handleAddOption,
    handleDeteteOption: handleDeteteOption,
    handleChangeDefaultSuboption: handleChangeDefaultSuboption,
    handleUpdateSubOption: handleUpdateSubOption,
    handleChangeItem: handleChangeItem,
    handleUpdateOption: handleUpdateOption,
    isAddForm: isAddForm,
    setIsAddForm: setIsAddForm,
    dragoverSubOptionId: dragoverSubOptionId,
    isSubOptionsBottom: isSubOptionsBottom,
    handleDragStart: handleDragStart,
    hanldeDragOver: hanldeDragOver,
    handleDrop: handleDrop,
    handleDragEnd: handleDragEnd
  })));
};
exports.ProductExtraOptionDetails = ProductExtraOptionDetails;
ProductExtraOptionDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before product extra option details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after product extra option details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before product extra option details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after product extra option details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductExtraOptionDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};