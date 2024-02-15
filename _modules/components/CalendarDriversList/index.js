"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarDriversList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
var _ApiContext = require("../../contexts/ApiContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _SessionContext = require("../../contexts/SessionContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var CalendarDriversList = function CalendarDriversList(props) {
  var _selectedBlock$block, _selectedBlock$block2, _paginationSettings$p, _selectedBlock$block14;
  var UIComponent = props.UIComponent,
    paginationSettings = props.paginationSettings;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      state: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isTimeChangeError = _useState2[0],
    setIsTimeChangeError = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedGroup = _useState4[0],
    setSelectedGroup = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showBreakBlock = _useState6[0],
    setShowBreakBlock = _useState6[1];
  var _useState7 = (0, _react.useState)('none'),
    _useState8 = _slicedToArray(_useState7, 2),
    propagation = _useState8[0],
    setPropagation = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    openDeleteModal = _useState10[0],
    setOpenDeleteModal = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: false,
      events: [],
      user: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    stackEventsState = _useState12[0],
    setStackEventsState = _useState12[1];
  var _useState13 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    alertState = _useState14[0],
    setAlertState = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openEditModal = _useState16[0],
    setOpenEditModal = _useState16[1];
  var _useState17 = (0, _react.useState)({
      driverIds: []
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    filterValues = _useState18[0],
    setFilterValues = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    openModal = _useState20[0],
    setOpenModal = _useState20[1];
  var _useState21 = (0, _react.useState)([(0, _moment.default)().startOf('day').utc().format('YYYY-MM-DD HH:mm:ss'), (0, _moment.default)().endOf('day').utc().format('YYYY-MM-DD HH:mm:ss')]),
    _useState22 = _slicedToArray(_useState21, 2),
    date = _useState22[0],
    setDate = _useState22[1];
  var _useState23 = (0, _react.useState)({
      user: null,
      block: null
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    selectedBlock = _useState24[0],
    setSelectedBlock = _useState24[1];
  var _useState25 = (0, _react.useState)(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block ? selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block = selectedBlock.block) === null || _selectedBlock$block === void 0 ? void 0 : _selectedBlock$block.start : new Date()),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedDate = _useState26[0],
    setSelectedDate = _useState26[1];
  var actualDate = (0, _moment.default)(selectedDate).format('YYYY-MM-DD');
  var _useState27 = (0, _react.useState)(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block ? selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block2 = selectedBlock.block) === null || _selectedBlock$block2 === void 0 ? void 0 : _selectedBlock$block2.until : new Date()),
    _useState28 = _slicedToArray(_useState27, 2),
    selectedUntilDate = _useState28[0],
    setSelectedUntilDate = _useState28[1];
  var _useState29 = (0, _react.useState)({
      state: {
        start: "".concat(actualDate, " 00:00:00"),
        end: "".concat(actualDate, " 23:59:00")
      },
      error: null,
      loading: false
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    scheduleState = _useState30[0],
    setScheduleState = _useState30[1];
  var _useState31 = (0, _react.useState)({
      freq: null,
      byweekday: []
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    ruleState = _useState32[0],
    setRuleState = _useState32[1];
  var _useState33 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    paginationProps = _useState34[0],
    setPaginationProps = _useState34[1];
  var timeErrorList = [t('END_TIME_LATER', 'Choose an end time later than the start time.'), t('START_TIME_EARLY', 'Choose a start time earlier than the end time.'), t('BREAK_END_TIME_EARLY', 'Choose a break end time later than the start/break start time and earlier than end time.'), t('BREAK_START_TIME_LATER', 'Choose a break start time later than the start times and earlier than end/break end times.'), t('DATE_RANGE_ERROR', 'The difference between dates should not be greater than 31'), t('UNTIL_TIME_LATER', 'Choose an until time later than the start time with a difference of 2 months or less.')];

  /**
   * Get session
   */
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];

  /**
   * Array to save drivers
   */
  var _useState35 = (0, _react.useState)({
      users: [],
      loading: false,
      error: null
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    driversList = _useState36[0],
    setDriversList = _useState36[1];
  var handleSetInitialStates = function handleSetInitialStates() {
    setSelectedBlock({
      user: null,
      block: null
    });
    var initialState = {
      start: "".concat(actualDate, " 00:00:00"),
      end: "".concat(actualDate, " 23:59:00")
    };
    setScheduleState({
      state: initialState,
      loading: false,
      error: null
    });
    setShowBreakBlock(false);
    setRuleState({
      freq: null,
      byweekday: []
    });
    setPropagation('none');
    setSelectedDate(new Date(date[0]));
    setSelectedUntilDate(new Date(date[0]));
    setStackEventsState({
      open: false,
      events: [],
      user: null
    });
    setOpenModal(false);
  };
  /**
   * Method to get drivers from API
   * @param {Number} page change time
   * @param {Number} pageSize open or close time
   * @param {Number} selectedGroup
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize, selectedGroupId) {
      var _filterValues$driverI, where, requestOptions, response, content, result, pagination, error, formattedUtcToLocalUsers, nextPageItems, remainingItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: true
            }));
            where = (filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$driverI = filterValues.driverIds) === null || _filterValues$driverI === void 0 ? void 0 : _filterValues$driverI.length) > 0 ? "&where=".concat(JSON.stringify({
              conditions: [{
                attribute: 'id',
                value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds
              }],
              conector: 'AND'
            })) : '';
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context.next = 6;
            return fetch("".concat(ordering.root, "/drivergroups/").concat(selectedGroupId, "/drivers?delivery_block_from=").concat(date[0], "&delivery_block_to=").concat(date[1], "&page=").concat(page, "&page_size=").concat(pageSize).concat(where), requestOptions);
          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();
          case 9:
            content = _context.sent;
            result = content.result, pagination = content.pagination, error = content.error;
            if (error) {
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: result
              }));
            } else {
              formattedUtcToLocalUsers = result.map(function (user) {
                return _objectSpread(_objectSpread({}, user), {}, {
                  delivery_blocks: user.delivery_blocks.map(function (block) {
                    return _objectSpread(_objectSpread({}, block), {}, {
                      start: (0, _moment.default)(_moment.default.utc(block.start).toDate()).local().format('YYYY-MM-DD HH:mm:ss'),
                      end: (0, _moment.default)(_moment.default.utc(block.end).toDate()).local().format('YYYY-MM-DD HH:mm:ss'),
                      break_start: block.break_start ? (0, _moment.default)(_moment.default.utc(block.break_start).toDate()).local().format('YYYY-MM-DD HH:mm:ss') : null,
                      break_end: block.break_end ? (0, _moment.default)(_moment.default.utc(block.break_end).toDate()).local().format('YYYY-MM-DD HH:mm:ss') : null
                    });
                  })
                });
              });
              driversList.users = formattedUtcToLocalUsers;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false
              }));
              nextPageItems = 0;
              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - driversList.users.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }
              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                from: pagination.from,
                to: pagination.to,
                nextPageItems: nextPageItems
              }));
            }
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            if (_context.t0.constructor.name !== 'Cancel') {
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));
            }
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function getDrivers(_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to validate time
   * @param {String} changeTime change time
   * @param {Boolean} isOpen open or close time
   * @param {Boolean} isBreak open break or close break time
   */
  var handleChangeScheduleTime = function handleChangeScheduleTime(changeTime, isOpen, isBreak) {
    var _date = (0, _moment.default)("".concat(actualDate, " ").concat(changeTime, ":00"));
    var _isTimeChangeError = false;
    if (isOpen) {
      var _scheduleState$state, _scheduleState$state2, _scheduleState$state3, _scheduleState$state4, _scheduleState$state5, _scheduleState$state6, _scheduleState$state7, _scheduleState$state8;
      _isTimeChangeError = !isBreak ? _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state = scheduleState.state) !== null && _scheduleState$state !== void 0 && _scheduleState$state.end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state2 = scheduleState.state) === null || _scheduleState$state2 === void 0 ? void 0 : _scheduleState$state2.end) : '23:59') : _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state3 = scheduleState.state) !== null && _scheduleState$state3 !== void 0 && _scheduleState$state3.break_end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state4 = scheduleState.state) === null || _scheduleState$state4 === void 0 ? void 0 : _scheduleState$state4.break_end) : '23:59') || _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state5 = scheduleState.state) !== null && _scheduleState$state5 !== void 0 && _scheduleState$state5.end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state6 = scheduleState.state) === null || _scheduleState$state6 === void 0 ? void 0 : _scheduleState$state6.end) : '23:59') || _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state7 = scheduleState.state) !== null && _scheduleState$state7 !== void 0 && _scheduleState$state7.start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state8 = scheduleState.state) === null || _scheduleState$state8 === void 0 ? void 0 : _scheduleState$state8.start) : '00:00');
      if (_isTimeChangeError) {
        setIsTimeChangeError({
          state: true,
          error: isBreak ? 3 : 1
        });
      } else {
        var _ref2, _scheduleState$break_, _selectedBlock$block3, _ref3, _scheduleState$end, _selectedBlock$block4;
        isBreak ? setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            break_start: "".concat(actualDate, " ").concat(changeTime, ":00"),
            break_end: (_ref2 = (_scheduleState$break_ = scheduleState === null || scheduleState === void 0 ? void 0 : scheduleState.break_end) !== null && _scheduleState$break_ !== void 0 ? _scheduleState$break_ : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block3 = selectedBlock.block) === null || _selectedBlock$block3 === void 0 ? void 0 : _selectedBlock$block3.break_end) !== null && _ref2 !== void 0 ? _ref2 : "".concat(actualDate, " 23:59:00")
          })
        })) : setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            start: "".concat(actualDate, " ").concat(changeTime, ":00"),
            end: (_ref3 = (_scheduleState$end = scheduleState === null || scheduleState === void 0 ? void 0 : scheduleState.end) !== null && _scheduleState$end !== void 0 ? _scheduleState$end : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block4 = selectedBlock.block) === null || _selectedBlock$block4 === void 0 ? void 0 : _selectedBlock$block4.end) !== null && _ref3 !== void 0 ? _ref3 : "".concat(actualDate, " 23:59:00")
          })
        }));
      }
    } else {
      var _scheduleState$state9, _scheduleState$state10, _scheduleState$state11, _scheduleState$state12, _scheduleState$state13, _scheduleState$state14, _scheduleState$state15, _scheduleState$state16;
      _isTimeChangeError = !isBreak ? _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state9 = scheduleState.state) !== null && _scheduleState$state9 !== void 0 && _scheduleState$state9.start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state10 = scheduleState.state) === null || _scheduleState$state10 === void 0 ? void 0 : _scheduleState$state10.start) : '00:00') : _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state11 = scheduleState.state) !== null && _scheduleState$state11 !== void 0 && _scheduleState$state11.break_start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state12 = scheduleState.state) === null || _scheduleState$state12 === void 0 ? void 0 : _scheduleState$state12.break_start) : '00:00') || _date.isSameOrBefore(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state13 = scheduleState.state) !== null && _scheduleState$state13 !== void 0 && _scheduleState$state13.start ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state14 = scheduleState.state) === null || _scheduleState$state14 === void 0 ? void 0 : _scheduleState$state14.start) : '00:00') || _date.isSameOrAfter(scheduleState !== null && scheduleState !== void 0 && (_scheduleState$state15 = scheduleState.state) !== null && _scheduleState$state15 !== void 0 && _scheduleState$state15.end ? (0, _moment.default)(scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state16 = scheduleState.state) === null || _scheduleState$state16 === void 0 ? void 0 : _scheduleState$state16.end) : '23:59');
      if (_isTimeChangeError && !(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.block)) {
        setIsTimeChangeError({
          state: true,
          error: isBreak ? 2 : 0
        });
      } else {
        var _ref4, _scheduleState$state$, _scheduleState$state17, _selectedBlock$block5, _ref5, _scheduleState$state$2, _scheduleState$state18, _selectedBlock$block6;
        isBreak ? setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            break_start: (_ref4 = (_scheduleState$state$ = scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state17 = scheduleState.state) === null || _scheduleState$state17 === void 0 ? void 0 : _scheduleState$state17.break_start) !== null && _scheduleState$state$ !== void 0 ? _scheduleState$state$ : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block5 = selectedBlock.block) === null || _selectedBlock$block5 === void 0 ? void 0 : _selectedBlock$block5.break_start) !== null && _ref4 !== void 0 ? _ref4 : "".concat(actualDate, " 00:00:00"),
            break_end: "".concat(actualDate, " ").concat(changeTime, ":00")
          })
        })) : setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
          state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
            start: (_ref5 = (_scheduleState$state$2 = scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state18 = scheduleState.state) === null || _scheduleState$state18 === void 0 ? void 0 : _scheduleState$state18.start) !== null && _scheduleState$state$2 !== void 0 ? _scheduleState$state$2 : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block6 = selectedBlock.block) === null || _selectedBlock$block6 === void 0 ? void 0 : _selectedBlock$block6.start) !== null && _ref5 !== void 0 ? _ref5 : "".concat(actualDate, " 00:00:00"),
            end: "".concat(actualDate, " ").concat(changeTime, ":00")
          })
        }));
      }
    }
  };

  /**
  * Method to add block time
  */
  var handleAddBlockTime = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _selectedBlock$user, scheduleUtc, requestOptions, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            scheduleUtc = {
              start: (0, _moment.default)(scheduleState.state.start).utc().format('YYYY-MM-DD HH:mm:ss'),
              end: (0, _moment.default)(scheduleState.state.end).utc().format('YYYY-MM-DD HH:mm:ss')
            };
            if (scheduleState.state.rrule) {
              scheduleUtc.rrule = scheduleState.state.rrule;
            }
            if (scheduleState.state.until) {
              scheduleUtc.until = (0, _moment.default)(scheduleState.state.until).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_start && showBreakBlock) {
              scheduleUtc.break_start = (0, _moment.default)(scheduleState.state.break_start).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_end && showBreakBlock) {
              scheduleUtc.break_end = (0, _moment.default)(scheduleState.state.break_end).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.name) {
              scheduleUtc.name = scheduleState.state.name;
            }
            if (scheduleState.state.description) {
              scheduleUtc.description = scheduleState.state.description;
            }
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(scheduleUtc)
            };
            _context2.next = 12;
            return fetch("".concat(ordering.root, "/drivers/").concat(selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$user = selectedBlock.user) === null || _selectedBlock$user === void 0 ? void 0 : _selectedBlock$user.id, "/delivery_blocks"), requestOptions);
          case 12:
            response = _context2.sent;
            _context2.next = 15;
            return response.json();
          case 15:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context2.next = 24;
              break;
            }
            _context2.next = 21;
            return getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
          case 21:
            handleSetInitialStates();
            _context2.next = 26;
            break;
          case 24:
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: result
            }));
            setAlertState({
              open: true,
              content: result
            });
          case 26:
            _context2.next = 31;
            break;
          case 28:
            _context2.prev = 28;
            _context2.t0 = _context2["catch"](0);
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 31:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 28]]);
    }));
    return function handleAddBlockTime() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
  * Method to delete block time
  */
  var deleteBlockTime = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _selectedBlock$user2, _selectedBlock$block7, requestOptions, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                propagation: propagation
              })
            };
            _context3.next = 5;
            return fetch("".concat(ordering.root, "/drivers/").concat(selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$user2 = selectedBlock.user) === null || _selectedBlock$user2 === void 0 ? void 0 : _selectedBlock$user2.id, "/delivery_blocks/").concat(selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block7 = selectedBlock.block) === null || _selectedBlock$block7 === void 0 ? void 0 : _selectedBlock$block7.id), requestOptions);
          case 5:
            response = _context3.sent;
            _context3.next = 8;
            return response.json();
          case 8:
            _yield$response$json2 = _context3.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (error) {
              _context3.next = 18;
              break;
            }
            _context3.next = 14;
            return getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
          case 14:
            handleSetInitialStates();
            setOpenDeleteModal(false);
            _context3.next = 19;
            break;
          case 18:
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: result
            }));
          case 19:
            _context3.next = 24;
            break;
          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 21]]);
    }));
    return function deleteBlockTime() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
  * Method to edit block time
  */
  var editBlockTime = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _selectedBlock$user3, _selectedBlock$block8, scheduleUtc, requestOptions, response, _yield$response$json3, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: true
            }));
            scheduleUtc = {
              start: (0, _moment.default)(scheduleState.state.start).utc().format('YYYY-MM-DD HH:mm:ss'),
              end: (0, _moment.default)(scheduleState.state.end).utc().format('YYYY-MM-DD HH:mm:ss')
            };
            if (scheduleState.state.rrule) {
              scheduleUtc.rrule = scheduleState.state.rrule;
            }
            if (scheduleState.state.until) {
              scheduleUtc.until = (0, _moment.default)(scheduleState.state.until).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_start) {
              scheduleUtc.break_start = (0, _moment.default)(scheduleState.state.break_start).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.break_end) {
              scheduleUtc.break_end = (0, _moment.default)(scheduleState.state.break_end).utc().format('YYYY-MM-DD HH:mm:ss');
            }
            if (scheduleState.state.name) {
              scheduleUtc.name = scheduleState.state.name;
            }
            if (scheduleState.state.description) {
              scheduleUtc.description = scheduleState.state.description;
            }
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(_objectSpread(_objectSpread({}, scheduleUtc), {}, {
                propagation: propagation
              }))
            };
            _context4.next = 12;
            return fetch("".concat(ordering.root, "/drivers/").concat(selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$user3 = selectedBlock.user) === null || _selectedBlock$user3 === void 0 ? void 0 : _selectedBlock$user3.id, "/delivery_blocks/").concat(selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block8 = selectedBlock.block) === null || _selectedBlock$block8 === void 0 ? void 0 : _selectedBlock$block8.id), requestOptions);
          case 12:
            response = _context4.sent;
            _context4.next = 15;
            return response.json();
          case 15:
            _yield$response$json3 = _context4.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (error) {
              _context4.next = 25;
              break;
            }
            _context4.next = 21;
            return getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
          case 21:
            handleSetInitialStates();
            setOpenEditModal(false);
            _context4.next = 27;
            break;
          case 25:
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: result
            }));
            setAlertState({
              open: true,
              content: result
            });
          case 27:
            _context4.next = 32;
            break;
          case 29:
            _context4.prev = 29;
            _context4.t0 = _context4["catch"](0);
            setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 32:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 29]]);
    }));
    return function editBlockTime() {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleSelectedUntilDate = function handleSelectedUntilDate(date) {
    // if (moment(date).isSameOrBefore(selectedDate)) return
    setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      state: _objectSpread(_objectSpread({}, scheduleState.state), {}, {
        until: (0, _moment.default)(date).endOf('day').format('YYYY-MM-DD HH:mm:ss')
      })
    }));
  };
  var handleChangeDriver = function handleChangeDriver(driverId) {
    var _driverIds = _toConsumableArray(filterValues.driverIds);
    if (!_driverIds.includes(driverId)) {
      _driverIds.push(driverId);
    } else {
      _driverIds = _driverIds.filter(function (id) {
        return id !== driverId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      driverIds: _driverIds
    }));
  };
  var handleClearFilters = function handleClearFilters() {
    setFilterValues({
      driverIds: []
    });
  };
  (0, _react.useEffect)(function () {
    if (!(selectedGroup !== null && selectedGroup !== void 0 && selectedGroup.id)) return;
    getDrivers(paginationProps.currentPage, paginationProps.pageSize, selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id);
  }, [selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id, date, filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds]);
  (0, _react.useEffect)(function () {
    var _scheduleState$state$3, _scheduleState$state19, _selectedBlock$block9, _scheduleState$state$4, _scheduleState$state20, _selectedBlock$block10, _scheduleState$state$5, _scheduleState$state21, _selectedBlock$block11, _scheduleState$state$6, _scheduleState$state22, _selectedBlock$block12;
    var _startHour = (0, _moment.default)((_scheduleState$state$3 = scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state19 = scheduleState.state) === null || _scheduleState$state19 === void 0 ? void 0 : _scheduleState$state19.start) !== null && _scheduleState$state$3 !== void 0 ? _scheduleState$state$3 : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block9 = selectedBlock.block) === null || _selectedBlock$block9 === void 0 ? void 0 : _selectedBlock$block9.start).format('HH:mm');
    var _endHour = (0, _moment.default)((_scheduleState$state$4 = scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state20 = scheduleState.state) === null || _scheduleState$state20 === void 0 ? void 0 : _scheduleState$state20.end) !== null && _scheduleState$state$4 !== void 0 ? _scheduleState$state$4 : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block10 = selectedBlock.block) === null || _selectedBlock$block10 === void 0 ? void 0 : _selectedBlock$block10.end).format('HH:mm');
    var _breakStartHour = (0, _moment.default)((_scheduleState$state$5 = scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state21 = scheduleState.state) === null || _scheduleState$state21 === void 0 ? void 0 : _scheduleState$state21.break_start) !== null && _scheduleState$state$5 !== void 0 ? _scheduleState$state$5 : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block11 = selectedBlock.block) === null || _selectedBlock$block11 === void 0 ? void 0 : _selectedBlock$block11.break_start).format('HH:mm');
    var _breakEndHour = (0, _moment.default)((_scheduleState$state$6 = scheduleState === null || scheduleState === void 0 ? void 0 : (_scheduleState$state22 = scheduleState.state) === null || _scheduleState$state22 === void 0 ? void 0 : _scheduleState$state22.break_end) !== null && _scheduleState$state$6 !== void 0 ? _scheduleState$state$6 : selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block12 = selectedBlock.block) === null || _selectedBlock$block12 === void 0 ? void 0 : _selectedBlock$block12.break_end).format('HH:mm');
    var changes = showBreakBlock ? {
      start: "".concat(actualDate, " ").concat(_startHour, ":00"),
      end: "".concat(actualDate, " ").concat(_endHour, ":00"),
      break_start: "".concat(actualDate, " ").concat(_breakStartHour, ":00"),
      break_end: "".concat(actualDate, " ").concat(_breakEndHour, ":00")
    } : {
      start: "".concat(actualDate, " ").concat(_startHour, ":00"),
      end: "".concat(actualDate, " ").concat(_endHour, ":00")
    };
    if (!(0, _moment.default)(selectedDate).isSameOrBefore(selectedUntilDate)) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        until: (0, _moment.default)(selectedDate).endOf('day').format('YYYY-MM-DD HH:mm:ss')
      });
      setSelectedUntilDate(selectedDate);
    }
    setScheduleState(_objectSpread(_objectSpread({}, scheduleState), {}, {
      state: _objectSpread(_objectSpread({}, scheduleState.state), changes)
    }));
  }, [selectedDate]);
  (0, _react.useEffect)(function () {
    var _selectedBlock$block13;
    setShowBreakBlock(!!(selectedBlock !== null && selectedBlock !== void 0 && (_selectedBlock$block13 = selectedBlock.block) !== null && _selectedBlock$block13 !== void 0 && _selectedBlock$block13.break_start));
  }, [selectedBlock === null || selectedBlock === void 0 ? void 0 : (_selectedBlock$block14 = selectedBlock.block) === null || _selectedBlock$block14 === void 0 ? void 0 : _selectedBlock$block14.break_start]);
  (0, _react.useEffect)(function () {
    if (date[0]) {
      handleSetInitialStates();
    }
  }, [date]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    date: date,
    setDate: setDate,
    openModal: openModal,
    getDrivers: getDrivers,
    alertState: alertState,
    driversList: driversList,
    propagation: propagation,
    setOpenModal: setOpenModal,
    selectedDate: selectedDate,
    scheduleState: scheduleState,
    selectedBlock: selectedBlock,
    setAlertState: setAlertState,
    timeErrorList: timeErrorList,
    editBlockTime: editBlockTime,
    openEditModal: openEditModal,
    setPropagation: setPropagation,
    showBreakBlock: showBreakBlock,
    selectedGroup: selectedGroup,
    paginationProps: paginationProps,
    ruleState: ruleState,
    setRuleState: setRuleState,
    actualDate: actualDate,
    setSelectedDate: setSelectedDate,
    deleteBlockTime: deleteBlockTime,
    openDeleteModal: openDeleteModal,
    setScheduleState: setScheduleState,
    setSelectedBlock: setSelectedBlock,
    setOpenEditModal: setOpenEditModal,
    stackEventsState: stackEventsState,
    isTimeChangeError: isTimeChangeError,
    selectedUntilDate: selectedUntilDate,
    setShowBreakBlock: setShowBreakBlock,
    setOpenDeleteModal: setOpenDeleteModal,
    handleAddBlockTime: handleAddBlockTime,
    setSelectedGroup: setSelectedGroup,
    setStackEventsState: setStackEventsState,
    setSelectedUntilDate: setSelectedUntilDate,
    setIsTimeChangeError: setIsTimeChangeError,
    handleChangeScheduleTime: handleChangeScheduleTime,
    handleSelectedUntilDate: handleSelectedUntilDate,
    handleSetInitialStates: handleSetInitialStates,
    filterValues: filterValues,
    handleChangeDriver: handleChangeDriver,
    handleClearFilters: handleClearFilters
  })));
};
exports.CalendarDriversList = CalendarDriversList;
CalendarDriversList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
CalendarDriversList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};