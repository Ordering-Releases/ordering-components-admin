"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceList = void 0;

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

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PlaceList = function PlaceList(props) {
  var UIComponent = props.UIComponent,
      cityMangersPropsToFetch = props.cityMangersPropsToFetch;

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
    countries: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      countriesState = _useState2[0],
      setCountriesState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    options: [],
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdownOptionsState = _useState4[0],
      setDropdownOptionsState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    users: [],
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      cityManagerList = _useState6[0],
      setCityMangerList = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      actionState = _useState8[0],
      setActionState = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedCity = _useState10[0],
      setSelectedCity = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      changesState = _useState12[0],
      setChangesState = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      openCity = _useState14[0],
      setOpenCity = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedCityList = _useState16[0],
      setSelectedCityList = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      openZoneDropdown = _useState18[0],
      setOpenZonedropdown = _useState18[1];

  var _useState19 = (0, _react.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      selectedZoneDropdown = _useState20[0],
      setSelectedZoneDropdown = _useState20[1];

  var _useState21 = (0, _react.useState)([]),
      _useState22 = _slicedToArray(_useState21, 2),
      selectedZoneList = _useState22[0],
      setSelectedZoneList = _useState22[1];

  var _useState23 = (0, _react.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      startSeveralDeleteStart = _useState24[0],
      setStartSeveralDeleteStart = _useState24[1];
  /**
   * Method to get the countries from API
   */


  var getCountries = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$ordering$count, _yield$ordering$count2, error, result;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                loading: true
              }));
              _context.next = 4;
              return ordering.countries().get();

            case 4:
              _yield$ordering$count = _context.sent;
              _yield$ordering$count2 = _yield$ordering$count.content;
              error = _yield$ordering$count2.error;
              result = _yield$ordering$count2.result;

              if (!error) {
                setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                  loading: false,
                  countries: result
                }));
              } else {
                setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getCountries() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get the dropdown options from API
   */


  var getDropdownOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context2.next = 5;
              return fetch("".concat(ordering.root, "/dropdownoptions"), requestOptions);

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              content = _context2.sent;

              if (!content.error) {
                setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                  loading: false,
                  options: content.result
                }));
              } else {
                setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function getDropdownOptions() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to update country from API
   */


  var handleChangeCountryName = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(countryId, changes) {
      var _yield$ordering$count3, _yield$ordering$count4, error, result, countries;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              _context3.next = 5;
              return ordering.countries(countryId).save(changes);

            case 5:
              _yield$ordering$count3 = _context3.sent;
              _yield$ordering$count4 = _yield$ordering$count3.content;
              error = _yield$ordering$count4.error;
              result = _yield$ordering$count4.result;

              if (!error) {
                countries = countriesState.countries.filter(function (country) {
                  if (country.id === countryId) {
                    Object.assign(country, result);
                  }

                  return true;
                });
                setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                  countries: countries
                }));
                showToast(_ToastContext.ToastType.Success, t('COUNTRY_SAVED', 'Country saved'));
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              setActionState({
                loading: false,
                error: [_context3.t0.message]
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function handleChangeCountryName(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to update the city from API
   */


  var handleUpdateCity = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(countryId, cityId, changes) {
      var _yield$ordering$count5, _yield$ordering$count6, error, result, countries;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              _context4.next = 5;
              return ordering.countries(countryId).cities(cityId).save(changes);

            case 5:
              _yield$ordering$count5 = _context4.sent;
              _yield$ordering$count6 = _yield$ordering$count5.content;
              error = _yield$ordering$count6.error;
              result = _yield$ordering$count6.result;

              if (!error) {
                countries = countriesState.countries.map(function (country) {
                  if (country.id === countryId) {
                    var cities = country.cities.filter(function (city) {
                      if (city.id === cityId) {
                        Object.assign(city, result);
                      }

                      return true;
                    });
                    country.cities = cities;
                  }

                  return country;
                });
                setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                  countries: countries
                }));
                showToast(_ToastContext.ToastType.Success, t('CITY_SAVED', 'City saved'));
                setChangesState({});
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context4.next = 15;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              setActionState({
                loading: false,
                error: [_context4.t0.message]
              });

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 12]]);
    }));

    return function handleUpdateCity(_x3, _x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the city from API
   */


  var handleDeleteCity = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(countryId, cityId) {
      var _yield$ordering$count7, _yield$ordering$count8, error, result, countries, cityList;

      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              _context5.next = 5;
              return ordering.countries(countryId).cities(cityId).delete();

            case 5:
              _yield$ordering$count7 = _context5.sent;
              _yield$ordering$count8 = _yield$ordering$count7.content;
              error = _yield$ordering$count8.error;
              result = _yield$ordering$count8.result;

              if (!error) {
                countries = countriesState.countries.map(function (country) {
                  if (parseInt(country.id) === parseInt(countryId)) {
                    var cities = country.cities.filter(function (city) {
                      return city.id !== cityId;
                    });
                    country.cities = cities;
                  }

                  return country;
                });
                setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                  countries: countries
                }));
                showToast(_ToastContext.ToastType.Success, t('CITY_REMOVED', 'City removed'));

                if (startSeveralDeleteStart) {
                  cityList = _toConsumableArray(selectedCityList);
                  cityList.shift();

                  if (cityList.length === 0) {
                    setStartSeveralDeleteStart(false);
                  }

                  setSelectedCityList(cityList);
                }
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: result
                }));
                setStartSeveralDeleteStart(false);
              }

              _context5.next = 16;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              setActionState({
                loading: false,
                error: [_context5.t0.message]
              });
              setStartSeveralDeleteStart(false);

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 12]]);
    }));

    return function handleDeleteCity(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to get city managers from API
   */


  var getCityManagers = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var source, _yield$ordering$setAc, result;

      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setCityMangerList(_objectSpread(_objectSpread({}, cityManagerList), {}, {
                loading: true
              }));
              source = {};
              _context6.next = 5;
              return ordering.setAccessToken(token).users().select(cityMangersPropsToFetch).where([{
                attribute: 'level',
                value: [1]
              }]).get({
                cancelToken: source
              });

            case 5:
              _yield$ordering$setAc = _context6.sent;
              result = _yield$ordering$setAc.content.result;
              setCityMangerList(_objectSpread(_objectSpread({}, cityManagerList), {}, {
                loading: false,
                users: result
              }));
              _context6.next = 13;
              break;

            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
              setCityMangerList(_objectSpread(_objectSpread({}, cityManagerList), {}, {
                loading: false,
                error: _context6.t0.message
              }));

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 10]]);
    }));

    return function getCityManagers() {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Method to add new city from API
   */


  var handleAddCity = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _yield$ordering$count9, _yield$ordering$count10, error, result, countries;

      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (changesState !== null && changesState !== void 0 && changesState.country_id) {
                _context7.next = 3;
                break;
              }

              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                error: t('SELECT_COUNTRY', 'Select a country')
              }));
              return _context7.abrupt("return");

            case 3:
              _context7.prev = 3;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              changesState.enabled = true;
              _context7.next = 9;
              return ordering.countries(changesState === null || changesState === void 0 ? void 0 : changesState.country_id).cities().save(changesState);

            case 9:
              _yield$ordering$count9 = _context7.sent;
              _yield$ordering$count10 = _yield$ordering$count9.content;
              error = _yield$ordering$count10.error;
              result = _yield$ordering$count10.result;

              if (!error) {
                countries = countriesState.countries.map(function (country) {
                  if (country.id === (changesState === null || changesState === void 0 ? void 0 : changesState.country_id)) {
                    var cities = [].concat(_toConsumableArray(country.cities), [result]);
                    country.cities = cities;
                  }

                  return country;
                });
                setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                  countries: countries
                }));
                showToast(_ToastContext.ToastType.Success, t('CITY_ADDED', 'City added'));
                setChangesState({});
                setOpenCity(false);
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context7.next = 19;
              break;

            case 16:
              _context7.prev = 16;
              _context7.t0 = _context7["catch"](3);
              setActionState({
                loading: false,
                error: [_context7.t0.message]
              });

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[3, 16]]);
    }));

    return function handleAddCity() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleChangesState = function handleChangesState(key, val) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, _defineProperty({}, key, val)));
  };

  var handleSaveCity = function handleSaveCity() {
    handleUpdateCity(selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.country_id, selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.id, changesState);
  };

  var handleCheckboxClick = function handleCheckboxClick(city) {
    var found = selectedCityList.find(function (_city) {
      return (_city === null || _city === void 0 ? void 0 : _city.id) === city.id;
    });

    if (!found) {
      setSelectedCityList([].concat(_toConsumableArray(selectedCityList), [city]));
    } else {
      var cities = selectedCityList.filter(function (_city) {
        return _city.id !== city.id;
      });
      setSelectedCityList(cities);
    }
  };

  var handleAllCheckboxClick = function handleAllCheckboxClick() {
    var _countriesState$count;

    var cities = (_countriesState$count = countriesState.countries) === null || _countriesState$count === void 0 ? void 0 : _countriesState$count.reduce(function (_cities, country) {
      return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
    }, []);

    if (cities.length === selectedCityList.length) {
      setSelectedCityList([]);
    } else {
      setSelectedCityList(cities);
    }
  };
  /**
   * Method to delete the several cities from API
   */


  var handleSeveralDeleteCities = function handleSeveralDeleteCities() {
    setStartSeveralDeleteStart(true);
  };
  /**
   * Method to update the city from API
   */


  var handleUpdateDropdown = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(dropdownId, changes) {
      var requestOptions, response, content, dropdownOptions;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context8.next = 6;
              return fetch("".concat(ordering.root, "/dropdownoptions/").concat(dropdownId), requestOptions);

            case 6:
              response = _context8.sent;
              _context8.next = 9;
              return response.json();

            case 9:
              content = _context8.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                dropdownOptions = dropdownOptionsState.options.filter(function (option) {
                  if (option.id === dropdownId) {
                    Object.assign(option, content.result);
                  }

                  return true;
                });
                setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                  options: dropdownOptions
                }));
                showToast(_ToastContext.ToastType.Success, t('ZONE_SAVED', 'Zone saved'));
                setChangesState({});
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context8.next = 16;
              break;

            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](0);
              setActionState({
                loading: false,
                error: [_context8.t0.message]
              });

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 13]]);
    }));

    return function handleUpdateDropdown(_x8, _x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  var handleSaveZone = function handleSaveZone() {
    handleUpdateDropdown(selectedZoneDropdown === null || selectedZoneDropdown === void 0 ? void 0 : selectedZoneDropdown.id, changesState);
  };
  /**
   * Method to add new city from API
   */


  var handleAddZone = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var requestOptions, response, content, dropdownOptions;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (changesState !== null && changesState !== void 0 && changesState.name) {
                _context9.next = 3;
                break;
              }

              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                error: t('NAME_REQUIRED', 'The name is required.')
              }));
              return _context9.abrupt("return");

            case 3:
              _context9.prev = 3;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              changesState.enabled = true;
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changesState)
              };
              _context9.next = 10;
              return fetch("".concat(ordering.root, "/dropdownoptions"), requestOptions);

            case 10:
              response = _context9.sent;
              _context9.next = 13;
              return response.json();

            case 13:
              content = _context9.sent;

              if (!content.error) {
                dropdownOptions = [].concat(_toConsumableArray(dropdownOptionsState.options), [content.result]);
                setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                  options: dropdownOptions
                }));
                showToast(_ToastContext.ToastType.Success, t('ZONE_ADDED', 'Zone added'));
                setChangesState({});
                setOpenZonedropdown(false);
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context9.next = 20;
              break;

            case 17:
              _context9.prev = 17;
              _context9.t0 = _context9["catch"](3);
              setActionState({
                loading: false,
                error: [_context9.t0.message]
              });

            case 20:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[3, 17]]);
    }));

    return function handleAddZone() {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the city from API
   */


  var handleDeleteZone = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(zoneId) {
      var requestOptions, response, content, dropdownOptions, zoneList;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context10.next = 6;
              return fetch("".concat(ordering.root, "/dropdownoptions/").concat(zoneId), requestOptions);

            case 6:
              response = _context10.sent;
              _context10.next = 9;
              return response.json();

            case 9:
              content = _context10.sent;

              if (!content.error) {
                dropdownOptions = dropdownOptionsState.options.filter(function (zone) {
                  return zone.id !== zoneId;
                });
                setDropdownOptionsState(_objectSpread(_objectSpread({}, dropdownOptionsState), {}, {
                  options: dropdownOptions
                }));
                showToast(_ToastContext.ToastType.Success, t('ZONE_REMOVED', 'Zone removed'));

                if (startSeveralDeleteStart) {
                  zoneList = _toConsumableArray(selectedZoneList);
                  zoneList.shift();

                  if (zoneList.length === 0) {
                    setStartSeveralDeleteStart(false);
                  }

                  setSelectedZoneList(zoneList);
                }
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
                setStartSeveralDeleteStart(false);
              }

              _context10.next = 17;
              break;

            case 13:
              _context10.prev = 13;
              _context10.t0 = _context10["catch"](0);
              setActionState({
                loading: false,
                error: [_context10.t0.message]
              });
              setStartSeveralDeleteStart(false);

            case 17:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 13]]);
    }));

    return function handleDeleteZone(_x10) {
      return _ref10.apply(this, arguments);
    };
  }();

  var handleCheckboxZoneClick = function handleCheckboxZoneClick(zone) {
    var found = selectedZoneList.find(function (_zone) {
      return (_zone === null || _zone === void 0 ? void 0 : _zone.id) === zone.id;
    });

    if (!found) {
      setSelectedZoneList([].concat(_toConsumableArray(selectedZoneList), [zone]));
    } else {
      var zones = selectedZoneList.filter(function (_zone) {
        return _zone.id !== zone.id;
      });
      setSelectedZoneList(zones);
    }
  };

  var handleAllCheckboxZoneClick = function handleAllCheckboxZoneClick() {
    var zones = _toConsumableArray(dropdownOptionsState.options);

    if (zones.length === selectedZoneList.length) {
      setSelectedZoneList([]);
    } else {
      setSelectedZoneList(zones);
    }
  };
  /**
   * Method to delete the several cities from API
   */


  var handleSeveralDeleteZones = function handleSeveralDeleteZones() {
    setStartSeveralDeleteStart(true);
  };

  (0, _react.useEffect)(function () {
    var _selectedZoneList$;

    if (!startSeveralDeleteStart || selectedZoneList.length === 0) return;
    handleDeleteZone((_selectedZoneList$ = selectedZoneList[0]) === null || _selectedZoneList$ === void 0 ? void 0 : _selectedZoneList$.id);
  }, [selectedZoneList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    var _selectedCityList$, _selectedCityList$2;

    if (!startSeveralDeleteStart || selectedCityList.length === 0) return;
    handleDeleteCity((_selectedCityList$ = selectedCityList[0]) === null || _selectedCityList$ === void 0 ? void 0 : _selectedCityList$.country_id, (_selectedCityList$2 = selectedCityList[0]) === null || _selectedCityList$2 === void 0 ? void 0 : _selectedCityList$2.id);
  }, [selectedCityList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    setChangesState({});
  }, [selectedCity]);
  (0, _react.useEffect)(function () {
    getCityManagers();
    getCountries();
    getDropdownOptions();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    countriesState: countriesState,
    dropdownOptionsState: dropdownOptionsState,
    cityManagerList: cityManagerList,
    actionState: actionState,
    handleChangeCountryName: handleChangeCountryName,
    handleUpdateCity: handleUpdateCity,
    handleDeleteCity: handleDeleteCity,
    selectedCity: selectedCity,
    setSelectedCity: setSelectedCity,
    openCity: openCity,
    setOpenCity: setOpenCity,
    changesState: changesState,
    handleChangesState: handleChangesState,
    cleanChagesState: function cleanChagesState() {
      return setChangesState({});
    },
    handleSaveCity: handleSaveCity,
    handleAddCity: handleAddCity,
    selectedCityList: selectedCityList,
    handleCheckboxClick: handleCheckboxClick,
    handleAllCheckboxClick: handleAllCheckboxClick,
    handleSeveralDeleteCities: handleSeveralDeleteCities,
    handleUpdateDropdown: handleUpdateDropdown,
    openZoneDropdown: openZoneDropdown,
    setOpenZonedropdown: setOpenZonedropdown,
    selectedZoneDropdown: selectedZoneDropdown,
    setSelectedZoneDropdown: setSelectedZoneDropdown,
    handleSaveZone: handleSaveZone,
    handleAddZone: handleAddZone,
    handleDeleteZone: handleDeleteZone,
    selectedZoneList: selectedZoneList,
    handleCheckboxZoneClick: handleCheckboxZoneClick,
    handleAllCheckboxZoneClick: handleAllCheckboxZoneClick,
    handleSeveralDeleteZones: handleSeveralDeleteZones
  })));
};

exports.PlaceList = PlaceList;
PlaceList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before place list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after place list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PlaceList.defaultProps = {
  cityMangersPropsToFetch: ['id', 'name', 'lastname'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};