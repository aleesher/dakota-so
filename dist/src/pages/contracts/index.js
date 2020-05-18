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
var recompose_1 = require("recompose");
var react_components_1 = require("@apollo/react-components");
var react_hooks_1 = require("@apollo/react-hooks");
var withFilters_1 = __importDefault(require("dakota-portal/dist/components/withFilters"));
var MenuContext_1 = __importDefault(require("dakota-portal/dist/components/AppMenu/MenuContext"));
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var react_router_dom_1 = require("react-router-dom");
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var SortableTable_1 = __importStar(require("dakota-portal/dist/components/SortableTable"));
var components_1 = require("dakota-portal/dist/components");
var filterHelper_1 = __importDefault(require("dakota-portal/dist/helpers/filterHelper"));
var helpers_1 = require("../../helpers");
var i18_1 = __importDefault(require("../../helpers/i18"));
var TableWrapper_1 = require("../../components/TableWrapper");
var style_1 = require("../../components/GeneralButton/style");
var queries_1 = require("./queries");
var tableHelper_1 = __importDefault(require("../../helpers/tableHelper"));
var constants_1 = require("./constants");
var exportHelper_1 = __importDefault(require("../../helpers/exportHelper"));
var serviceContracts_1 = __importDefault(require("./../../constants/locales/nl/serviceContracts"));
var contractDetails_1 = __importDefault(require("./partials/contractDetails"));
var components_2 = require("../../components");
var indexeren_1 = __importDefault(require("./partials/indexeren"));
var components_3 = require("../../components");
var IconEdit = components_1.ActionMenuIcon(Edit_1.default);
var Contracts = function (_a) {
    var history = _a.history, match = _a.match, where = _a.where, filter = _a.filter, client = _a.client, serviceContractActions = _a.actions, getDisabledRows = _a.getDisabledRows, executeSubscriptions = _a.executeSubscriptions;
    var dublicateContract = react_hooks_1.useMutation(queries_1.DUBLICATE_CONTRACT)[0];
    var createContract = react_hooks_1.useMutation(queries_1.CREATE_CONTRACT)[0];
    var menuContext = React.useContext(MenuContext_1.default);
    var _b = React.useState([]), contracts = _b[0], setContracts = _b[1];
    var _c = React.useState(""), searchText = _c[0], setSearchText = _c[1];
    var _d = React.useState({
        activePage: 0,
        totalItems: 0,
        perPage: constants_1.PER_PAGE
    }), meta = _d[0], setMeta = _d[1];
    var whereInput = where;
    if (get_1.default(where, "AND") && isEmpty_1.default(get_1.default(where, "AND"))) {
        whereInput = get_1.default(history, "location.state.filters", {});
    }
    else {
        whereInput = __assign(__assign({}, where), get_1.default(history, "location.state.filters", {}));
    }
    React.useEffect(executeSubscriptions, []);
    var filters = searchText
        ? {
            AND: [
                whereInput,
                {
                    OR: [
                        { code_contains: searchText },
                        { name_contains: searchText },
                        { customerCode_contains: searchText },
                        { city_contains: searchText }
                    ]
                }
            ]
        }
        : whereInput;
    var variables = {
        skip: meta.activePage * meta.perPage,
        perPage: meta.perPage,
        where: filters,
        orderBy: meta.orderByKey && meta.orderByType
            ? meta.orderByKey + "_" + meta.orderByType.toUpperCase()
            : "id_DESC"
    };
    var refetchQueries = [{ query: queries_1.FETCH_CONTRACTS, variables: variables }];
    var addContractToList = function (contract) {
        setContracts(function (contracts) { return __spreadArrays([contract], contracts); });
        setMeta(function (meta) { return (__assign(__assign({}, meta), { totalItems: meta.totalItems + 1 })); });
    };
    var onRowClick = function (rowItem) {
        window.open(match.url + "/service-contract/" + get_1.default(rowItem, "id"), "_blank");
    };
    var createNewServiceContract = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, createServiceContract, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, createContract({
                            variables: { data: { code: helpers_1.generateCode() } }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    createServiceContract = data.createServiceContract;
                    addContractToList(createServiceContract);
                    onRowClick(createServiceContract);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log("Err: ", JSON.stringify(err_1, null, 2));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", null,
        React.createElement(TableWrapper_1.TableHeaderWrapper, null,
            React.createElement(components_1.TableHeader, { pageName: "Service Contracts" }),
            React.createElement(TableWrapper_1.TableControl, null,
                React.createElement(react_router_dom_1.Link, { to: match.path + "/indexeren", className: "buttonLink" },
                    React.createElement(components_3.GeneralButton, { className: "control", title: "Indexeren", url: "/so/sc/indexeren" })),
                React.createElement(style_1.CustomStyle, { className: "control", onClick: createNewServiceContract }, "Nieuw Contract")),
            React.createElement(components_1.TableHeader, { pageName: "", searchHandler: setSearchText })),
        React.createElement(react_components_1.Query, { query: queries_1.FETCH_CONTRACTS, variables: variables, onCompleted: function (data) {
                setContracts(get_1.default(data, "serviceContracts", []));
                setMeta(__assign(__assign({}, meta), { totalItems: get_1.default(data, "serviceContractsConnection.aggregate.count", 0) }));
            } }, function (_a) {
            var loading = _a.loading, data = _a.data, _b = _a.error, error = _b === void 0 ? null : _b;
            if (error) {
                return React.createElement("div", null,
                    "`Error! $",
                    error.message,
                    "`");
            }
            if (loading) {
                return React.createElement(components_1.Loader, null);
            }
            return (React.createElement(SortableTable_1.default, { columns: __spreadArrays([
                    SortableTable_1.createActionMenuColumn(tableHelper_1.default.createActionMenuItems({
                        onClickEdit: function (rowItem) { return onRowClick(rowItem); },
                        onClickBlock: function (contract) {
                            return serviceContractActions.block(contract, refetchQueries);
                        },
                        onClickDelete: function (contract) {
                            return serviceContractActions.delete(contract, refetchQueries);
                        },
                        onClickDuplicate: function (contract) { return __awaiter(void 0, void 0, void 0, function () {
                            var data_1, dublicatedServiceContract, err_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, dublicateContract({
                                                variables: {
                                                    data: __assign(__assign({}, contract), { id: undefined, description: "", customerCode: "", code: helpers_1.generateCode() })
                                                }
                                            })];
                                    case 1:
                                        data_1 = (_a.sent()).data;
                                        dublicatedServiceContract = data_1.createServiceContract;
                                        addContractToList(dublicatedServiceContract);
                                        onRowClick(dublicatedServiceContract);
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_2 = _a.sent();
                                        console.log("Err: ", JSON.stringify(err_2, null, 2));
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }
                    }), contracts.length)
                ], constants_1.COLUMNS), onRowClick: function (rowItem) { return onRowClick(rowItem); }, dataSource: contracts, onQueryChange: function (newMeta) { return setMeta(newMeta); }, meta: meta, onExportClick: exportHelper_1.default.onExportClick(queries_1.FETCH_ALL_CONTRACTS, "allServiceContracts", variables, constants_1.COLUMNS, client, get_1.default(data, "serviceContractsConnection.aggregate.count", 0)), exportButtons: constants_1.EXPORT_BUTTONS, exportTypes: ["excel", "pdf"], filterFields: __assign(__assign({}, serviceContracts_1.default.field), serviceContracts_1.default.filter), filters: filterHelper_1.default.separateFilters(filters, searchText), pageName: "Service Contracts", fileName: "dakota-so-" + i18_1.default
                    .t("ServiceContracts.contracts")
                    .toLocaleLowerCase(), searchText: searchText, showTotalNumber: true, disabledRows: getDisabledRows(contracts) }));
        }),
        React.createElement(components_1.ModalRoute, { path: match.url + "/service-contract/:scId", parentPath: match.url, component: contractDetails_1.default, onBackdropClick: history.goBack }),
        React.createElement(TableWrapper_1.ModalBoxs, { path: match.path + "/indexeren", parentPath: match.url, component: indexeren_1.default, variant: "wide" })));
};
exports.default = recompose_1.compose(withFilters_1.default({
    entityName: "ServiceContract",
    preDefinedFilters: [
        {
            title: "Customer",
            key: "customerCode",
            type: "String"
        }
    ],
    i18n: i18_1.default
}), components_2.withLockEntities({
    entity: "serviceContract"
}))(Contracts);
//# sourceMappingURL=index.js.map