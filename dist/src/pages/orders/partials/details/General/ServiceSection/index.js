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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var constants_1 = require("../../../../../serviceOrder/constants");
var urls_1 = __importDefault(require("../../../../../../helpers/urls"));
var styles_1 = require("../../styles");
exports.ServiceSection = function (_a) {
    var user = _a.user, onUpdateSO = _a.onUpdateSO, formikBag = _a.formikBag, onOpenMomentHistory = _a.onOpenMomentHistory;
    var role = get_1.default(user, "roles[0].role.name");
    var onChange = function (key) { return function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var values;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    values = __assign(__assign({}, formikBag.values), (_a = {}, _a[key] = value.value, _a));
                    formikBag.handleChange({ target: { name: key, value: value.value } });
                    return [4 /*yield*/, onUpdateSO(values)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); }; };
    var values = formikBag.values;
    return (React.createElement(styles_1.FormCard, null,
        React.createElement(Grid_1.default, { container: true },
            React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.FormWrapper, null,
                    React.createElement(styles_1.FormLabel, null, "Servicetype"),
                    React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: constants_1.SERVICE_TYPES, value: constants_1.SERVICE_TYPES.find(function (option) { return get_1.default(option, "value") === get_1.default(values, "serviceType"); }), isDisabled: role !== "admin", onChange: onChange("serviceType") })),
                React.createElement(styles_1.FormWrapperSelect, null,
                    React.createElement(styles_1.FormLabel, null, "Selecteer land"),
                    React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: constants_1.COUNTRIES, value: constants_1.COUNTRIES.find(function (option) { return get_1.default(option, "value") === get_1.default(values, "countryCode"); }), onChange: onChange("countryCode") })),
                React.createElement(styles_1.FormWrapperSelect, null,
                    React.createElement(styles_1.FormLabel, null, "Selecteer SO type"),
                    React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: constants_1.SO_TYPES, value: constants_1.SO_TYPES.find(function (option) { return get_1.default(option, "value") === get_1.default(values, "orderType"); }), onChange: onChange("orderType") })),
                React.createElement(styles_1.FormWrapper, null,
                    React.createElement(styles_1.FormLabel, null, "Global ID"),
                    React.createElement(styles_1.FormInput, { value: get_1.default(values, "globalId"), disabled: true })),
                React.createElement(styles_1.FormWrapper, null,
                    React.createElement(styles_1.FormLabel, null, "Concept ID"),
                    React.createElement(styles_1.FormInput, { value: get_1.default(values, "globalId"), disabled: true })),
                React.createElement(styles_1.FormWrapperSelect, null,
                    React.createElement(styles_1.FormLabel, null, "Serviceorder nummer"),
                    React.createElement(styles_1.FormInput, { value: get_1.default(values, "code"), disabled: true })),
                React.createElement(styles_1.FormWrapperSelect, null,
                    React.createElement(styles_1.FormLabel, null, "Prioriteit"),
                    React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: constants_1.PRIORITY_OPTIONS, value: constants_1.PRIORITY_OPTIONS.find(function (option) { return get_1.default(option, "value") === get_1.default(values, "priority"); }), onChange: onChange("priority") })),
                React.createElement(styles_1.FormWrapper, null,
                    React.createElement(styles_1.FormLabel, null, "Status"),
                    React.createElement(styles_1.FormLink, { onClick: onOpenMomentHistory }, get_1.default(values, "status")))),
            React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.ServiceWrapper, null,
                    React.createElement(styles_1.ServiceUnorderedList, null,
                        React.createElement(styles_1.ServiceAnchor, null,
                            React.createElement(styles_1.ServiceList, null, "Daken met garantie"),
                            React.createElement(styles_1.ServiceSpan, { to: urls_1.default.EXTERNAL_DAKDAKA }, " Ja")),
                        React.createElement(styles_1.ServiceAnchor, null,
                            React.createElement(styles_1.ServiceList, null, "Lekkages laatse 3 maanden"),
                            React.createElement(styles_1.ServiceSpan, { to: urls_1.default.EXTERNAL_ACTIVITIETEN }, " 1")),
                        React.createElement(styles_1.ServiceAnchor, null,
                            React.createElement(styles_1.ServiceList, null, "Lekkages historie"),
                            React.createElement(styles_1.ServiceSpan, { to: urls_1.default.EXTERNAL_ACTIVITIETEN }, " 25")),
                        React.createElement(styles_1.ServiceAnchor, null,
                            React.createElement(styles_1.ServiceList, null, "Sub-complex Value"),
                            React.createElement(styles_1.ServiceSpan, { to: urls_1.default.EXTERNAL_ACTIVITIETEN }, " C501")),
                        React.createElement(styles_1.ServiceAnchor, null,
                            React.createElement(styles_1.ServiceList, null, "Daken Value"),
                            React.createElement(styles_1.ServiceSpan, { to: urls_1.default.EXTERNAL_ACTIVITIETEN }, "10")),
                        React.createElement(styles_1.ServiceAnchor, null,
                            React.createElement(styles_1.ServiceList, null, "Activiteiten Value"),
                            React.createElement(styles_1.ServiceSpan, { to: urls_1.default.EXTERNAL_ACTIVITIETEN }, "6")),
                        React.createElement(styles_1.ServiceAnchor, null,
                            React.createElement(styles_1.ServiceList, null, "Geregistreerde uren Value"),
                            React.createElement(styles_1.ServiceSpan, { to: urls_1.default.EXTERNAL_ACTIVITIETEN }, "5"))))))));
};
//# sourceMappingURL=index.js.map