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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var reduce_1 = __importDefault(require("lodash/reduce"));
var SortableTable_1 = __importDefault(require("dakota-portal/dist/components/SortableTable"));
var Loader_1 = __importDefault(require("dakota-portal/dist/components/Loader"));
var apollo_1 = __importDefault(require("../../../dev/apollo"));
var constants_1 = require("./constants");
var constants_2 = require("./constants");
var helpers_1 = require("../../helpers");
var styles_1 = require("../../pages/serviceOrder/styles");
var styles_2 = require("./styles");
var styles_3 = require("../../pages/serviceOrder/styles");
var SearchModal = function (_a) {
    var onClose = _a.onClose, onSelect = _a.onSelect, closeModal = _a.closeModal, query = _a.query, where = _a.where, rest = __rest(_a, ["onClose", "onSelect", "closeModal", "query", "where"]);
    var _b = react_1.default.useState(constants_2.META), meta = _b[0], setMeta = _b[1];
    var _c = react_1.default.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.default.useState({
        companies: [],
        totalItems: 0
    }), dataSource = _d[0], setDataSource = _d[1];
    react_1.default.useEffect(function () {
        handleFetch(meta);
    }, []);
    react_1.default.useEffect(function () {
        handleFetch(meta);
    }, [meta]);
    var onSearch = function (searchKeys) {
        var where = reduce_1.default(searchKeys, function (acc, val, key) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[key + "_contains"] = val, _a));
        }, {});
        handleFetch(meta, where, 0);
    };
    var handleFetch = function (meta, search, page) {
        if (search === void 0) { search = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var activePage, variables;
            return __generator(this, function (_a) {
                setIsLoading(true);
                activePage = !isEmpty_1.default(page) ? page : meta.activePage;
                variables = __assign(__assign({ where: __assign(__assign({}, where), search) }, meta), { totalItems: get_1.default(dataSource, "totalItems", 0), skip: activePage * meta.perPage, activePage: activePage });
                apollo_1.default
                    .query({ query: query, variables: variables })
                    .then(function (res) {
                    var totalItems = get_1.default(res, "data.companiesConnection.aggregate.count", 0);
                    setDataSource({
                        companies: get_1.default(res, "data.companies") || [],
                        totalItems: totalItems
                    });
                    setIsLoading(false);
                })
                    .catch(function (err) {
                    console.warn(err);
                    setIsLoading(false);
                });
                return [2 /*return*/];
            });
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isLoading && (react_1.default.createElement(styles_1.LoaderWrapper, null,
            react_1.default.createElement(Loader_1.default, null))),
        react_1.default.createElement(styles_2.ModalHeader, null,
            "Klantenlijst",
            react_1.default.createElement(styles_2.ModalCloseIcon, { onClick: closeModal })),
        react_1.default.createElement(styles_2.ModalBody, null,
            react_1.default.createElement(styles_3.FilledButton, { marginBottom: 20, onClick: function () { return onSelect(constants_1.DEFAULT_CLIENT); } }, "Kies standaard client"),
            react_1.default.createElement(SortableTable_1.default, { onSearch: onSearch, columns: constants_1.tableColumns(onSelect), dataSource: get_1.default(dataSource, "companies", []), onRowClick: function () { return null; }, meta: __assign(__assign({}, meta), { totalItems: get_1.default(dataSource, "totalItems", 0) }), onQueryChange: setMeta, configurationName: helpers_1.urls.SEARCH_CLIENT, routeProps: rest }))));
};
exports.default = SearchModal;
//# sourceMappingURL=index.js.map