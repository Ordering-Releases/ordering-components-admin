"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImporterForm = void 0;
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
 * Component to create importer form without UI component
 */

var ImporterForm = function ImporterForm(props) {
  var UIComponent = props.UIComponent,
    handleSuccessAdd = props.handleSuccessAdd,
    handleSuccessUpdateImporter = props.handleSuccessUpdateImporter,
    selectedImporter = props.selectedImporter,
    handleCustomEditImporter = props.handleCustomEditImporter,
    handleCustomAddImporter = props.handleCustomAddImporter;
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
    mappingState = _useState4[0],
    setMappingState = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    fieldList = _useState6[0],
    setFieldList = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    metafieldList = _useState8[0],
    setMetaFieldList = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isEdit = _useState10[0],
    setIsEdit = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    editState = _useState12[0],
    setEditState = _useState12[1];
  var integerKeys = ['business_id', 'external_business_id', 'category_id', 'external_category_id', 'external_parent_category_id', 'product_id', 'rank', 'external_product_id', 'extra_id', 'external_extra_id', 'extra_option_id', 'external_extra_option_id', 'extra_option_suboption_id', 'external_extra_option_suboption_id'];
  /**
  * Update form state data
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
  var handleChangeMappingInput = function handleChangeMappingInput(e, isMany) {
    var mappingData = {};
    if (isMany) {
      Object.values(e).map(function (obj) {
        mappingData = _objectSpread(_objectSpread({}, mappingData), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      mappingData = _defineProperty({}, e.target.name, e.target.value);
    }
    if (integerKeys.includes(e.target.name) && e.target.value === '') {
      var removeKey = e.target.name;
      var _mappingState = mappingState;
      delete _mappingState[removeKey];
      setMappingState(_objectSpread({}, _mappingState));
      return;
    }
    setMappingState(_objectSpread(_objectSpread({}, mappingState), mappingData));
  };
  var addNewField = function addNewField(key, value) {
    var field = _defineProperty({}, key, parseInt(value));
    setFieldList(_objectSpread(_objectSpread({}, fieldList), field));
    clearFieldForm();
  };
  var removeField = function removeField(fieldKey) {
    var _fieldList = _objectSpread({}, fieldList);
    delete _fieldList[fieldKey];
    setFieldList(_fieldList);
  };
  var addNewMetaField = function addNewMetaField(key, value) {
    var field = _defineProperty({}, key, parseInt(value));
    setMetaFieldList(_objectSpread(_objectSpread({}, metafieldList), field));
    clearFieldForm();
  };
  var removeMetaField = function removeMetaField(metaFieldKey) {
    var _metafieldList = _objectSpread({}, metafieldList);
    delete _metafieldList[metaFieldKey];
    setMetaFieldList(_metafieldList);
  };
  var handleChangeSelect = function handleChangeSelect(type, value) {
    var currentChanges = {};
    currentChanges = _defineProperty({}, type, value);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
    if (!isEdit) {
      setMappingState({});
      clearMappingForm();
    }
  };
  var clearMappingForm = function clearMappingForm() {
    if (document.getElementById('importer-form')) {
      document.getElementById('importer-form').reset();
    }
  };
  var clearFieldForm = function clearFieldForm() {
    if (document.getElementById('field-form')) {
      document.getElementById('field-form').reset();
    }
  };
  var clearImorterForm = function clearImorterForm() {
    clearMappingForm();
    clearFieldForm();
    setMappingState({});
    setFieldList({});
    setEditState({});
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  };
  var handleEditState = function handleEditState(seletedImpoter) {
    var _seletedImpoter$mappi, _seletedImpoter$mappi2;
    var _metafieldList = {};
    _metafieldList = seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi = seletedImpoter.mapping) === null || _seletedImpoter$mappi === void 0 ? void 0 : _seletedImpoter$mappi.metafields;
    if (_typeof(_metafieldList) === 'object' && _metafieldList !== null) {
      setMetaFieldList(_metafieldList);
    }
    var _fieldList = {};
    _fieldList = seletedImpoter === null || seletedImpoter === void 0 ? void 0 : (_seletedImpoter$mappi2 = seletedImpoter.mapping) === null || _seletedImpoter$mappi2 === void 0 ? void 0 : _seletedImpoter$mappi2.fields;
    if (_typeof(_fieldList) === 'object' && _fieldList !== null) {
      setFieldList(_fieldList);
    }
    var _mappingState = {};
    _mappingState = seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.mapping;
    setMappingState(_mappingState);
    setEditState(_objectSpread(_objectSpread({}, editState), {}, {
      name: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.name,
      slug: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.slug,
      type: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type,
      mapping: _mappingState,
      fields: _fieldList,
      metafields: _metafieldList
    }));
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        name: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.name,
        // slug: seletedImpoter?.slug,
        type: seletedImpoter === null || seletedImpoter === void 0 ? void 0 : seletedImpoter.type
      })
    }));
  };
  var handleCreateImporter = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(updatedChanges) {
      var data, requestOptions, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!handleCustomAddImporter) {
              _context.next = 3;
              break;
            }
            handleCustomAddImporter(formState.changes);
            return _context.abrupt("return");
          case 3:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            data = updatedChanges ? _objectSpread({}, updatedChanges) : _objectSpread({}, formState.changes);
            _context.prev = 5;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(data)
            };
            _context.next = 10;
            return fetch("".concat(ordering.root, "/importers"), requestOptions);
          case 10:
            response = _context.sent;
            _context.next = 13;
            return response.json();
          case 13:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            } else {
              showToast(_ToastContext.ToastType.Success, t('IMPORTER_SAVED', 'Importer saved'));
              clearImorterForm();
              setFormState({
                loading: false,
                changes: {},
                result: {
                  error: false,
                  result: result
                }
              });
              if (handleSuccessAdd) {
                handleSuccessAdd(result);
              }
              if (props.onClose) {
                props.onClose();
              }
            }
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](5);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: [_context.t0.message]
              },
              loading: false
            }));
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 19]]);
    }));
    return function handleCreateImporter(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Function to update importer
   */
  var editImporter = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(updatedChanges) {
      var data, requestOptions, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!handleCustomEditImporter) {
              _context2.next = 3;
              break;
            }
            handleCustomEditImporter(formState.changes);
            return _context2.abrupt("return");
          case 3:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            data = updatedChanges ? _objectSpread({}, updatedChanges) : _objectSpread({}, formState.changes);
            _context2.prev = 5;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(data)
            };
            _context2.next = 10;
            return fetch("".concat(ordering.root, "/importers/").concat(selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.id), requestOptions);
          case 10:
            response = _context2.sent;
            _context2.next = 13;
            return response.json();
          case 13:
            _yield$response$json2 = _context2.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (error) {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            } else {
              showToast(_ToastContext.ToastType.Success, t('IMPORTER_SAVED', 'Importer saved'));
              clearImorterForm();
              setFormState({
                loading: false,
                changes: {},
                result: {
                  error: false,
                  result: result
                }
              });
              handleSuccessUpdateImporter && handleSuccessUpdateImporter(result);
              props.onClose && props.onClose();
            }
            _context2.next = 22;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](5);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: [_context2.t0.message]
              },
              loading: false
            }));
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 19]]);
    }));
    return function editImporter(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (Object.keys(metafieldList).length !== 0) {
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        metafields: metafieldList
      }));
    }
  }, [metafieldList]);
  (0, _react.useEffect)(function () {
    if (Object.keys(fieldList).length !== 0) {
      setMappingState(_objectSpread(_objectSpread({}, mappingState), {}, {
        fields: fieldList
      }));
    }
  }, [fieldList]);
  (0, _react.useEffect)(function () {
    if (Object.keys(mappingState).length !== 0) {
      var data = _objectSpread({}, mappingState);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          mapping: JSON.stringify(data)
        })
      }));
    }
  }, [mappingState]);
  var downloadCSV = function downloadCSV() {
    var allowedBusinessImporters = {
      business_id: 10,
      external_business_id: 120,
      name: 'House mine',
      logo: '"https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,h_100,c_limit/v1539095959/crya6ibldlsz4hjyo03e.jpg"',
      email: 'test@ordering.co',
      slug: 'test_slug',
      header: '"https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/bqvntsurh8opknu58z9f/1534196989.jpg"',
      about: 'test about',
      address: '"5th Avenue, New York, NY, USA"',
      location: '"{""lat"":40.7552112,""lng"":-73.982322}"',
      timezone: 'America/New_York',
      description: 'test description',
      cellphone: '123123123123',
      phone: '123123',
      featured: 1,
      enabled: 1,
      front_layout: 'food',
      seo_image: '"https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,h_100,c_limit/v1539095959/crya6ibldlsz4hjyo03e.jpg"',
      seo_title: 'seo title',
      seo_description: 'seo description',
      category_id: 10,
      external_category_id: 120,
      external_parent_category_id: 130,
      product_id: 10,
      image: '"https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/wmpfkcedo4y2kwxcamve/1534167067.png"',
      rank: 10,
      parent_category_id: 20,
      external_product_id: 100,
      price: 10,
      images: '"https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/lx0zuprnuozhqmaa97jj/1534200630.jpg"',
      sku: 'test_sku',
      inventoried: 1,
      quantity: 10,
      upselling: 1,
      in_offer: 1,
      offer_price: 10,
      offer_rate: 0,
      offer_rate_type: 1,
      offer_include_options: 1,
      tax_id: 10,
      fee_id: 10,
      estimated_person: '"test person"',
      barcode: '"0123456789"',
      barcode_alternative: '"0123"',
      seo_keywords: 'test key',
      hide_special_instructions: 1,
      maximum_per_order: 2,
      minimum_per_order: 1,
      extra_id: 10,
      external_extra_id: 100,
      extra_option_id: 10,
      external_extra_option_id: 100,
      extra_option_suboption_id: 10,
      external_extra_option_suboption_id: 100,
      min: 1,
      max: 1
    };
    var uniqueKeys = ['slug', 'name', 'sku', 'seo_keywords'];
    var csvFields = {};
    if ((selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type) === 'sync_multiple') {
      selectedImporter.mapping.forEach(function (mapping) {
        var _mapping = _objectSpread({}, mapping);
        var fields = _objectSpread({}, _mapping.fields);
        var typeName = _mapping.type.replace('sync_', '').replaceAll('_', ' ');
        var newFields = {};
        for (var key in fields) {
          newFields[typeName + ' ' + key] = fields[key];
        }
        delete _mapping.fields;
        delete _mapping.metafields;
        delete _mapping.type;
        var _csvFields = _objectSpread(_objectSpread({}, _mapping), newFields);
        csvFields = _objectSpread(_objectSpread({}, csvFields), _csvFields);
      });
    } else {
      var _mappingState = _objectSpread({}, mappingState);
      var fields = _objectSpread({}, _mappingState.fields);
      delete _mappingState.fields;
      delete _mappingState.metafields;
      csvFields = _objectSpread(_objectSpread({}, _mappingState), fields);
    }
    var values = Object.values(csvFields);
    var max = Math.max.apply(Math, values);
    var csvHeaders = Array(max + 1).fill('');
    var csvRow1 = Array(max + 1).fill('');
    var csvRow2 = Array(max + 1).fill('');
    for (var key in csvFields) {
      var fieldName = key.replaceAll('_', ' ');
      csvHeaders[csvFields[key]] = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      if ((selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type) !== 'sync_multiple') {
        csvRow1[csvFields[key]] = allowedBusinessImporters[key] || ' ';
        if (integerKeys.includes(key)) {
          csvRow2[csvFields[key]] = allowedBusinessImporters[key] + 1;
        } else if (uniqueKeys.includes(key)) {
          csvRow2[csvFields[key]] = allowedBusinessImporters[key] + '_2';
        } else {
          csvRow2[csvFields[key]] = allowedBusinessImporters[key] || ' ';
        }
      }
    }
    if ((selectedImporter === null || selectedImporter === void 0 ? void 0 : selectedImporter.type) === 'sync_multiple') {
      selectedImporter.mapping.forEach(function (mapping) {
        var _mapping = _objectSpread({}, mapping);
        var fields = _objectSpread({}, _mapping.fields);
        delete _mapping.fields;
        delete _mapping.type;
        for (var _key in _mapping) {
          csvRow1[_mapping[_key]] = allowedBusinessImporters[_key] || ' ';
          if (integerKeys.includes(_key)) {
            csvRow2[_mapping[_key]] = allowedBusinessImporters[_key] + 1;
          } else if (uniqueKeys.includes(_key)) {
            csvRow2[_mapping[_key]] = allowedBusinessImporters[_key] + '_2';
          } else {
            csvRow2[_mapping[_key]] = allowedBusinessImporters[_key] || ' ';
          }
        }
        for (var _key2 in fields) {
          csvRow1[fields[_key2]] = allowedBusinessImporters[_key2] || ' ';
          if (integerKeys.includes(_key2)) {
            csvRow2[fields[_key2]] = allowedBusinessImporters[_key2] + 1;
          } else if (uniqueKeys.includes(_key2)) {
            csvRow2[fields[_key2]] = allowedBusinessImporters[_key2] + '_2';
          } else {
            csvRow2[fields[_key2]] = allowedBusinessImporters[_key2] || ' ';
          }
        }
      });
    }
    var rows = [csvHeaders, csvRow1, csvRow2];
    var csvContent = rows.map(function (e) {
      return e.join(',');
    }).join('\n');
    var link = document.createElement('a');
    link.download = (editState === null || editState === void 0 ? void 0 : editState.type) + '.csv';
    var blob = new Blob(["\uFEFF", csvContent], {
      type: 'text/csv'
    });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function () {
      link.href = reader.result;
      link.click();
    };
  };
  var handleUpdateMultipleMapping = function handleUpdateMultipleMapping(updatedMapping) {
    setEditState(_objectSpread(_objectSpread({}, editState), {}, {
      mapping: updatedMapping
    }));
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        mapping: JSON.stringify(updatedMapping)
      })
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    mappingState: mappingState,
    fieldList: fieldList,
    metafieldList: metafieldList,
    editState: editState,
    isEdit: isEdit,
    handleChangeInput: handleChangeInput,
    handleChangeSelect: handleChangeSelect,
    handleChangeMappingInput: handleChangeMappingInput,
    addNewField: addNewField,
    removeField: removeField,
    addNewMetaField: addNewMetaField,
    removeMetaField: removeMetaField,
    clearImorterForm: clearImorterForm,
    setIsEdit: setIsEdit,
    handleCreateImporter: handleCreateImporter,
    handleEditState: handleEditState,
    editImporter: editImporter,
    downloadCSV: downloadCSV,
    handleUpdateMultipleMapping: handleUpdateMultipleMapping
  })));
};
exports.ImporterForm = ImporterForm;
ImporterForm.propTypes = {
  /**
   * Function to update importer list
   */
  handleSuccessUpdateImporter: _propTypes.default.func,
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
ImporterForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};