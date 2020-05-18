"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var components_1 = require("dakota-portal/dist/components");
var components_2 = require("../../../../../components");
var styles_1 = require("../../styles");
var ServiceSection_1 = require("../General/ServiceSection");
var AddressSection_1 = require("../General/AddressSection");
var CustomerInfoSection_1 = require("../General/CustomerInfoSection");
var ReportSection_1 = require("../General/ReportSection");
var ProblemSection_1 = __importDefault(require("./../../../partials/details/General/ProblemSection"));
var constants_1 = require("../../../../serviceOrder/constants");
var helpers_1 = require("../../../../serviceOrder/helpers");
var models_1 = require("../../../../serviceOrder/models");
var styles_2 = require("../styles");
var GeneralInfo = function (_a) {
    var refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick, apolloClient = _a.apolloClient, setIsLoading = _a.setIsLoading, currentUser = _a.currentUser, url = _a.url, onUpdateSO = _a.onUpdateSO, promotedFields = _a.promotedFields, formikBag = _a.formikBag, onOpenMomentHistory = _a.onOpenMomentHistory;
    var values = get_1.default(formikBag, "values");
    var handleChange = get_1.default(formikBag, "handleChange");
    var onChange = function (name) { return function (val) { return __awaiter(void 0, void 0, void 0, function () {
        var keys, mutationData, value;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!(!!val || val === false)) return [3 /*break*/, 2];
                    keys = name.split(".");
                    mutationData = {};
                    value = get_1.default(val, "target.value", val);
                    if (keys.length > 1) {
                        mutationData = __assign(__assign({}, values), (_a = {}, _a[keys[0]] = __assign(__assign({}, values[keys[0]]), (_b = {}, _b[keys[1]] = value, _b)), _a));
                    }
                    else {
                        mutationData = __assign(__assign({}, values), (_c = {}, _c[name] = value, _c));
                    }
                    handleChange({ target: { name: name, value: value } });
                    return [4 /*yield*/, onUpdateSO(mutationData)];
                case 1:
                    _d.sent();
                    _d.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }; };
    var getFields = function (fields, isReporterFields) {
        if (isReporterFields === void 0) { isReporterFields = false; }
        if (isReporterFields) {
            fields = __spreadArrays(fields[0], fields[1]);
        }
        var formFields = helpers_1.getFormFields(fields, get_1.default(values, "orderType"));
        if (!isEmpty_1.default(formFields)) {
            var length_1 = Math.ceil(fields.length / 2);
            var majorFields = fields.slice(0, length_1);
            var minorFields = fields.slice(length_1, fields.length);
            return {
                majorFields: majorFields,
                minorFields: minorFields
            };
        }
        return {
            majorFields: [],
            minorFields: []
        };
    };
    var renderInput = function (_a) {
        var title = _a.title, name = _a.name, disabled = _a.disabled;
        return (react_1.default.createElement(styles_2.FormWrapper, null,
            react_1.default.createElement(styles_2.FormLabel, null, title),
            react_1.default.createElement(styles_2.FormInput, { value: get_1.default(values, name), disabled: disabled, onBlur: function (e) { return onChange(name)(e.target.value); } })));
    };
    var renderSelect = function (_a) {
        var title = _a.title, name = _a.name, disabled = _a.disabled, options = _a.options;
        return (react_1.default.createElement(styles_2.FormWrapper, null,
            react_1.default.createElement(styles_2.FormLabel, null, title),
            react_1.default.createElement(styles_2.FormSelect, { classNamePrefix: "type-select", options: options, value: options.find(function (option) { return get_1.default(option, "value") === get_1.default(values, name); }), onChange: onChange(name), isDisabled: disabled })));
    };
    var renderSwitch = function (_a) {
        var title = _a.title, name = _a.name;
        return (react_1.default.createElement(styles_2.FormWrapper, null,
            react_1.default.createElement(styles_2.FormLabel, null, title),
            react_1.default.createElement(styles_2.FormText, null, "UIT"),
            react_1.default.createElement(components_1.SwitchComponent, { checked: !!get_1.default(values, name), onChange: function () { return onChange(name)(!get_1.default(values, name)); } }),
            react_1.default.createElement(styles_2.FormText, { color: "primary" }, "AAN")));
    };
    var renderField = function (_a) {
        var title = _a.title, type = _a.type, name = _a.name, disabled = _a.disabled, options = _a.options;
        return type === models_1.CardItemTypes.select
            ? renderSelect({ title: title, name: name, disabled: disabled, options: options })
            : type === models_1.CardItemTypes.switch
                ? renderSwitch({ title: title, name: name })
                : renderInput({ title: title, name: name, disabled: disabled });
    };
    return (react_1.default.createElement(components_1.AccordionLink, { count: 3, label: "Algemene informatie", link: "generalInfo", ref: refs.generalInfo, isActive: activeLinks.includes("generalInfo"), onClick: function () { return onClick("generalInfo"); }, promotedFields: promotedFields.map(function (f) { return ({
            label: f,
            value: get_1.default(values, f, "")
        }); }) },
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(ServiceSection_1.ServiceSection, { formikBag: formikBag, user: currentUser, onUpdateSO: onUpdateSO, onOpenMomentHistory: onOpenMomentHistory })),
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(AddressSection_1.AddressSection, { formikBag: formikBag, apolloClient: apolloClient, setIsLoading: setIsLoading, onUpdateSO: onUpdateSO })),
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(CustomerInfoSection_1.CustomerInfoSection, { url: url, formikBag: formikBag, renderField: renderField, fields: getFields(constants_1.CLIENT_INFORMATION_FIELDS) })),
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(ReportSection_1.ReportSection, { renderField: renderField, fields: getFields(constants_1.REPORTER_FIELDS, true) })),
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(ProblemSection_1.default, { formikBag: formikBag, user: currentUser })),
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(styles_1.Right, null,
                react_1.default.createElement(components_2.GeneralButton, { title: "Wijzigingen opslaan", url: "go" })))));
};
exports.default = GeneralInfo;
//# sourceMappingURL=GeneralInfo.js.map