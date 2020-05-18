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
var react_components_1 = require("@apollo/react-components");
var react_hooks_1 = require("@apollo/react-hooks");
var get_1 = __importDefault(require("lodash/get"));
var components_1 = require("dakota-portal/dist/components");
var components_2 = require("./../../../../../components");
var styles_1 = require("./../../../styles");
var TermItem_1 = __importDefault(require("./TermItem"));
var AddTerm_1 = __importDefault(require("./AddTerm"));
var ErrorMessage_1 = __importDefault(require("./ErrorMessage"));
var styles_2 = require("./styles");
var queries_1 = require("./queries");
var INITIAL_TERM_ITEM = {
    description: "",
    invoiceDirectly: false,
    invoiceFrom: new Date(),
    invoicePeriod: "Afterwards",
    nextInvoicingDate: new Date(),
    progressPercent: 0
};
var Terms = function (_a) {
    var isLocked = _a.isLocked, code = _a.code, refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick;
    var updateTerms = react_hooks_1.useMutation(queries_1.UPDATE_TERMS_DATA)[0];
    var createTerm = react_hooks_1.useMutation(queries_1.CREATE_TERM)[0];
    var deleteTerm = react_hooks_1.useMutation(queries_1.DELETE_TERM)[0];
    var _b = react_1.default.useState([]), terms = _b[0], setTerms = _b[1];
    var handleAddClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, newTerm;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTerm({
                        variables: {
                            data: __assign({ serviceContractCode: code }, INITIAL_TERM_ITEM)
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    newTerm = get_1.default(data, "createServiceContractTerm", {});
                    setTerms(__spreadArrays(terms, [newTerm]));
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteTerm = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var data, deletedTermId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteTerm({
                        variables: { where: { id: id } }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    deletedTermId = get_1.default(data, "deleteServiceContractTerm.id", {});
                    setTerms(terms.filter(function (_a) {
                        var id = _a.id;
                        return id !== deletedTermId;
                    }));
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(components_1.AccordionLink, { ref: refs.terms, label: "Termijnen", link: "terms", isActive: activeLinks.includes("terms"), onClick: function () { return onClick("terms"); } },
        react_1.default.createElement(styles_1.AccordionContainer, null,
            react_1.default.createElement(styles_2.TermsContainer, null,
                react_1.default.createElement(react_components_1.Query, { query: queries_1.GET_TERMS_DATA, variables: { where: { serviceContractCode: code } }, fetchPolicy: "cache-and-network", onCompleted: function (data) {
                        var terms = get_1.default(data, "serviceContractTerms", []);
                        setTerms(terms);
                    } }, function (_a) {
                    var loading = _a.loading, _b = _a.error, error = _b === void 0 ? null : _b;
                    if (loading) {
                        return react_1.default.createElement("span", null, "Loading...");
                    }
                    if (error) {
                        return react_1.default.createElement("span", null, JSON.stringify(error, null, 2));
                    }
                    var sectionLabels = [
                        "Factureren vanaf",
                        "Volgende factureringsdatum",
                        "Voorgangspercentage",
                        "Omschrijving",
                        "Facturereingsperiode",
                        "Factuurvoorstel"
                    ];
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        isLocked && (react_1.default.createElement(ErrorMessage_1.default, { text: "Servicecontract wordt momenteel bewerkt en kan niet door u worden bewerk" })),
                        react_1.default.createElement(styles_2.Container, null,
                            react_1.default.createElement(styles_2.Labels, { style: !terms.length ? { width: 0 } : undefined }, !!terms.length
                                ? sectionLabels.map(function (label) { return (react_1.default.createElement(styles_2.Label, { key: label }, label)); })
                                : Array(sectionLabels.length)
                                    .fill("")
                                    .map(function (_, i) { return react_1.default.createElement(styles_2.Label, { key: i }); })),
                            terms.map(function (term, i) { return (react_1.default.createElement(styles_2.ContentItem, { key: term.id },
                                react_1.default.createElement(styles_2.TitleWrapper, null,
                                    react_1.default.createElement(styles_2.Title, null,
                                        "Termijn ",
                                        i + 1),
                                    react_1.default.createElement(components_2.SubcomplexMenu, { position: {
                                            top: "4px",
                                            right: "10px"
                                        }, actions: [
                                            {
                                                label: "Delete",
                                                onClick: function () { return handleDeleteTerm(term.id); }
                                            }
                                        ] })),
                                react_1.default.createElement(TermItem_1.default, { term: term, onChange: function (field, value) {
                                        var _a;
                                        return updateTerms({
                                            variables: {
                                                where: { id: term.id },
                                                data: (_a = {}, _a[field] = value, _a)
                                            },
                                            refetchQueries: [
                                                {
                                                    query: queries_1.GET_TERMS_DATA,
                                                    variables: {
                                                        where: {
                                                            serviceContractCode: code
                                                        }
                                                    }
                                                }
                                            ]
                                        });
                                    } }))); }),
                            !isLocked && terms.length < 3 && (react_1.default.createElement(styles_2.ContentItem, null,
                                react_1.default.createElement(AddTerm_1.default, { onClick: handleAddClick }))))));
                })))));
};
exports.default = Terms;
//# sourceMappingURL=Terms.js.map