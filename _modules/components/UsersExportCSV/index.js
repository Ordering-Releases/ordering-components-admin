"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersExportCSV = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var UsersExportCSV = function UsersExportCSV(props) {
  var defaultUserTypesSelected = props.defaultUserTypesSelected,
    disabledActiveStateCondition = props.disabledActiveStateCondition,
    UIComponent = props.UIComponent,
    userTypesSelected = props.userTypesSelected,
    selectedUserActiveState = props.selectedUserActiveState,
    searchValue = props.searchValue,
    isSearchByUserId = props.isSearchByUserId,
    isSearchByUserEmail = props.isSearchByUserEmail,
    isSearchByUserPhone = props.isSearchByUserPhone,
    isSearchByUserName = props.isSearchByUserName;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useState = (0, _react.useState)({
      loading: false,
      error: null,
      result: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    actionStatus = _useState2[0],
    setActionStatus = _useState2[1];

  /**
   * Method to get csv from API
   */
  var getCSV = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(filterApply) {
      var _props$multiFilterVal, _props$multiFilterVal2, _props$multiFilterVal3, _props$multiFilterVal34, _props$multiFilterVal35, _props$multiFilterVal36, _props$multiFilterVal37, requestOptions, defaultConditions, filterConditons, isOrdersCountValue, _Object$keys, searchConditions, _props$multiFilterVal4, _props$multiFilterVal5, _props$multiFilterVal7, _props$multiFilterVal8, _props$multiFilterVal10, _props$multiFilterVal11, _props$multiFilterVal13, _props$multiFilterVal14, _props$multiFilterVal16, _props$multiFilterVal18, _props$multiFilterVal20, _props$multiFilterVal22, _props$multiFilterVal24, _props$multiFilterVal26, _props$multiFilterVal28, _props$multiFilterVal30, _props$multiFilterVal32, _searchConditions, _props$multiFilterVal6, _props$multiFilterVal9, _props$multiFilterVal12, _props$multiFilterVal15, _props$multiFilterVal17, _props$multiFilterVal19, _props$multiFilterVal21, _props$multiFilterVal23, _props$multiFilterVal25, _props$multiFilterVal27, _props$multiFilterVal29, _props$multiFilterVal31, _props$multiFilterVal33, filterConditonsObj, commonParams, transformedCommonParams, functionFetch, response, content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!loading) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.prev = 2;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            defaultConditions = [];
            if (Array.isArray(defaultUserTypesSelected)) {
              defaultConditions.push({
                attribute: 'level',
                value: defaultUserTypesSelected
              });
            }
            filterConditons = [];
            isOrdersCountValue = props.multiFilterValues && ((_props$multiFilterVal = props.multiFilterValues) === null || _props$multiFilterVal === void 0 ? void 0 : _props$multiFilterVal.ordersCount) && ((_props$multiFilterVal2 = props.multiFilterValues) === null || _props$multiFilterVal2 === void 0 ? void 0 : (_props$multiFilterVal3 = _props$multiFilterVal2.ordersCount) === null || _props$multiFilterVal3 === void 0 ? void 0 : _props$multiFilterVal3.value);
            if (filterApply) {
              if (userTypesSelected.length > 0) {
                filterConditons.push({
                  attribute: 'level',
                  value: userTypesSelected
                });
              }
              // if (!disabledActiveStateCondition) {
              //   filterConditons.push({ attribute: 'enabled', value: selectedUserActiveState })
              // }
              if (searchValue) {
                searchConditions = [];
                if (isSearchByUserId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                if (isSearchByUserEmail) {
                  searchConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                if (isSearchByUserPhone) {
                  searchConditions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                if (isSearchByUserName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                  searchConditions.push({
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
                filterConditons.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }
              if (((_Object$keys = Object.keys(props === null || props === void 0 ? void 0 : props.multiFilterValues)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
                _searchConditions = [];
                if ((_props$multiFilterVal4 = props.multiFilterValues) !== null && _props$multiFilterVal4 !== void 0 && _props$multiFilterVal4.name && ((_props$multiFilterVal5 = props.multiFilterValues) === null || _props$multiFilterVal5 === void 0 ? void 0 : _props$multiFilterVal5.name) !== null) {
                  _searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal6 = props.multiFilterValues) === null || _props$multiFilterVal6 === void 0 ? void 0 : _props$multiFilterVal6.name, "%"))
                    }
                  });
                }
                if ((_props$multiFilterVal7 = props.multiFilterValues) !== null && _props$multiFilterVal7 !== void 0 && _props$multiFilterVal7.lastname && ((_props$multiFilterVal8 = props.multiFilterValues) === null || _props$multiFilterVal8 === void 0 ? void 0 : _props$multiFilterVal8.lastname) !== null) {
                  _searchConditions.push({
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal9 = props.multiFilterValues) === null || _props$multiFilterVal9 === void 0 ? void 0 : _props$multiFilterVal9.lastname, "%"))
                    }
                  });
                }
                if ((_props$multiFilterVal10 = props.multiFilterValues) !== null && _props$multiFilterVal10 !== void 0 && _props$multiFilterVal10.email && ((_props$multiFilterVal11 = props.multiFilterValues) === null || _props$multiFilterVal11 === void 0 ? void 0 : _props$multiFilterVal11.email) !== null) {
                  _searchConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal12 = props.multiFilterValues) === null || _props$multiFilterVal12 === void 0 ? void 0 : _props$multiFilterVal12.email, "%"))
                    }
                  });
                }
                if ((_props$multiFilterVal13 = props.multiFilterValues) !== null && _props$multiFilterVal13 !== void 0 && _props$multiFilterVal13.cellphone && ((_props$multiFilterVal14 = props.multiFilterValues) === null || _props$multiFilterVal14 === void 0 ? void 0 : _props$multiFilterVal14.cellphone) !== null) {
                  _searchConditions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal15 = props.multiFilterValues) === null || _props$multiFilterVal15 === void 0 ? void 0 : _props$multiFilterVal15.cellphone, "%"))
                    }
                  });
                }
                if (((_props$multiFilterVal16 = props.multiFilterValues) === null || _props$multiFilterVal16 === void 0 ? void 0 : _props$multiFilterVal16.countryPhoneCode) !== null) {
                  _searchConditions.push({
                    attribute: 'country_phone_code',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat((_props$multiFilterVal17 = props.multiFilterValues) === null || _props$multiFilterVal17 === void 0 ? void 0 : _props$multiFilterVal17.countryPhoneCode, "%"))
                    }
                  });
                }
                if (((_props$multiFilterVal18 = props.multiFilterValues) === null || _props$multiFilterVal18 === void 0 ? void 0 : _props$multiFilterVal18.cityIds.length) !== 0) {
                  _searchConditions.push({
                    attribute: 'city_id',
                    value: (_props$multiFilterVal19 = props.multiFilterValues) === null || _props$multiFilterVal19 === void 0 ? void 0 : _props$multiFilterVal19.cityIds
                  });
                }
                if (((_props$multiFilterVal20 = props.multiFilterValues) === null || _props$multiFilterVal20 === void 0 ? void 0 : _props$multiFilterVal20.phoneVerified) !== null) {
                  _searchConditions.push({
                    attribute: 'phone_verified',
                    value: (_props$multiFilterVal21 = props.multiFilterValues) === null || _props$multiFilterVal21 === void 0 ? void 0 : _props$multiFilterVal21.phoneVerified
                  });
                }
                if (((_props$multiFilterVal22 = props.multiFilterValues) === null || _props$multiFilterVal22 === void 0 ? void 0 : _props$multiFilterVal22.emailVerified) !== null) {
                  _searchConditions.push({
                    attribute: 'email_verified',
                    value: (_props$multiFilterVal23 = props.multiFilterValues) === null || _props$multiFilterVal23 === void 0 ? void 0 : _props$multiFilterVal23.emailVerified
                  });
                }
                if (((_props$multiFilterVal24 = props.multiFilterValues) === null || _props$multiFilterVal24 === void 0 ? void 0 : _props$multiFilterVal24.userType) !== null) {
                  _searchConditions.push({
                    attribute: 'level',
                    value: (_props$multiFilterVal25 = props.multiFilterValues) === null || _props$multiFilterVal25 === void 0 ? void 0 : _props$multiFilterVal25.userType
                  });
                }
                if (((_props$multiFilterVal26 = props.multiFilterValues) === null || _props$multiFilterVal26 === void 0 ? void 0 : _props$multiFilterVal26.loyaltyLevel) !== null) {
                  _searchConditions.push({
                    attribute: 'loyalty_level_id',
                    value: (_props$multiFilterVal27 = props.multiFilterValues) === null || _props$multiFilterVal27 === void 0 ? void 0 : _props$multiFilterVal27.loyaltyLevel
                  });
                }
                if (((_props$multiFilterVal28 = props.multiFilterValues) === null || _props$multiFilterVal28 === void 0 ? void 0 : _props$multiFilterVal28.enabled) !== null) {
                  _searchConditions.push({
                    attribute: 'enabled',
                    value: (_props$multiFilterVal29 = props.multiFilterValues) === null || _props$multiFilterVal29 === void 0 ? void 0 : _props$multiFilterVal29.enabled
                  });
                }
                if (((_props$multiFilterVal30 = props.multiFilterValues) === null || _props$multiFilterVal30 === void 0 ? void 0 : _props$multiFilterVal30.deliveryFromDatetime) !== null) {
                  _searchConditions.push({
                    attribute: 'created_at',
                    value: {
                      condition: '>=',
                      value: (_props$multiFilterVal31 = props.multiFilterValues) === null || _props$multiFilterVal31 === void 0 ? void 0 : _props$multiFilterVal31.deliveryFromDatetime
                    }
                  });
                }
                if (((_props$multiFilterVal32 = props.multiFilterValues) === null || _props$multiFilterVal32 === void 0 ? void 0 : _props$multiFilterVal32.deliveryEndDatetime) !== null) {
                  _searchConditions.push({
                    attribute: 'created_at',
                    value: {
                      condition: '<=',
                      value: (_props$multiFilterVal33 = props.multiFilterValues) === null || _props$multiFilterVal33 === void 0 ? void 0 : _props$multiFilterVal33.deliveryEndDatetime
                    }
                  });
                }
                if (_searchConditions.length) {
                  filterConditons.push({
                    conector: 'AND',
                    conditions: _searchConditions
                  });
                }
              }
            }
            filterConditonsObj = {
              conditions: filterConditons,
              conector: 'AND'
            };
            commonParams = {
              mode: 'dashboard',
              orderBy: 'id',
              version: 'v2'
            };
            transformedCommonParams = Object.keys(commonParams).map(function (key) {
              return "".concat(key, "=").concat(commonParams[key]);
            }).join('&');
            functionFetch = filterApply ? isOrdersCountValue ? "".concat(ordering.root, "/users_new.csv?").concat(transformedCommonParams, "&orders_count_condition=").concat((_props$multiFilterVal34 = props.multiFilterValues) === null || _props$multiFilterVal34 === void 0 ? void 0 : (_props$multiFilterVal35 = _props$multiFilterVal34.ordersCount) === null || _props$multiFilterVal35 === void 0 ? void 0 : _props$multiFilterVal35.condition, "&orders_count_value=").concat((_props$multiFilterVal36 = props.multiFilterValues) === null || _props$multiFilterVal36 === void 0 ? void 0 : (_props$multiFilterVal37 = _props$multiFilterVal36.ordersCount) === null || _props$multiFilterVal37 === void 0 ? void 0 : _props$multiFilterVal37.value, "&where=").concat(JSON.stringify(filterConditonsObj)) : "".concat(ordering.root, "/users_new.csv?").concat(transformedCommonParams, "&where=").concat(JSON.stringify(filterConditonsObj)) : defaultConditions.length > 0 ? "".concat(ordering.root, "/users_new.csv?").concat(transformedCommonParams, "&where=").concat(JSON.stringify(defaultConditions)) : "".concat(ordering.root, "/users_new.csv?").concat(transformedCommonParams);
            _context.next = 16;
            return fetch(functionFetch, requestOptions);
          case 16:
            response = _context.sent;
            _context.next = 19;
            return response.json();
          case 19:
            content = _context.sent;
            setActionStatus({
              loading: false,
              result: content.result,
              error: null
            });
            _context.next = 26;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](2);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: _context.t0
            }));
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 23]]);
    }));
    return function getCSV(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionStatus: actionStatus,
    getCSV: getCSV
  })));
};
exports.UsersExportCSV = UsersExportCSV;
UsersExportCSV.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
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
UsersExportCSV.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  multiFilterValues: {}
};