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
var withFilters_1 = __importDefault(require("dakota-portal/dist/components/withFilters"));
var MenuContext_1 = __importDefault(require("dakota-portal/dist/components/AppMenu/MenuContext"));
var _get = require("lodash/get");
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var i18_1 = __importDefault(require("../../helpers/i18"));
var initialInspections_1 = __importDefault(require("../../constants/locales/nl/initialInspections"));
var SortableTable_1 = __importStar(require("dakota-portal/dist/components/SortableTable"));
var components_1 = require("dakota-portal/dist/components");
var filterHelper_1 = __importDefault(require("dakota-portal/dist/helpers/filterHelper"));
var urls_1 = __importDefault(require("../../helpers/urls"));
var partials_1 = require("./partials");
var TableWrapper_1 = require("../../components/TableWrapper");
var queries_1 = require("./queries");
var constants_1 = require("./constants");
var tableHelper_1 = __importDefault(require("../../helpers/tableHelper"));
var constants_2 = require("./constants");
var exportHelper_1 = __importDefault(require("../../helpers/exportHelper"));
var constants_3 = require("../home/constants");
var components_2 = require("../../components");
var PromotedFields_1 = __importDefault(require("./partials/PromotedFields"));
var ModalWrapper_1 = require("dakota-portal/dist/components/ModalWrapper");
var IconEdit = components_1.ActionMenuIcon(Edit_1.default);
var Leakages = function (_a) {
    var history = _a.history, match = _a.match, where = _a.where, filter = _a.filter, client = _a.client, serviceOrderActions = _a.actions, getDisabledRows = _a.getDisabledRows, executeSubscriptions = _a.executeSubscriptions;
    var menuContext = React.useContext(MenuContext_1.default);
    var _b = React.useState(""), searchText = _b[0], setSearchText = _b[1];
    var _c = React.useState({
        activePage: 0,
        totalItems: 0,
        perPage: constants_1.PER_PAGE
    }), meta = _c[0], setMeta = _c[1];
    React.useEffect(executeSubscriptions, []);
    var parsed = constants_3.parseURL(location.search.slice(1));
    if (parsed.type) {
        where.orderType = parsed.type;
    }
    var filters = searchText
        ? {
            AND: [
                where,
                {
                    OR: [
                        { code_contains: searchText },
                        { ownerName_contains: searchText },
                        { roofPartnerName_contains: searchText }
                    ]
                }
            ]
        }
        : where;
    var variables = {
        skip: meta.activePage * meta.perPage,
        perPage: meta.perPage,
        where: filters,
        orderBy: meta.orderByKey && meta.orderByType
            ? meta.orderByKey + "_" + meta.orderByType.toUpperCase()
            : "id_DESC"
    };
    var title = "" + parsed.type.charAt(0) + parsed.type
        .slice(1)
        .toLocaleLowerCase() + " Serviceorders";
    var refetchQueries = [{ query: queries_1.FETCH_LEAKAGES, variables: variables }];
    var params = "?list=" + match.url + "&filter=" + JSON.stringify(filter);
    var onFetchCompeted = function (data) {
        setMeta(__assign(__assign({}, meta), { totalItems: _get(data, "serviceOrdersConnection.aggregate.count", 0) }));
    };
    return (React.createElement("div", null,
        React.createElement(TableWrapper_1.TableHeaderWrapper, null,
            React.createElement(components_1.TableHeader, { pageName: title, searchHandler: setSearchText }),
            React.createElement(TableWrapper_1.TableHeaderLink, { to: urls_1.default.LOG_MOMENT },
                React.createElement(TableWrapper_1.TableHeaderButton, null, "Logmomenten")),
            React.createElement(TableWrapper_1.TableHeaderLink, { to: urls_1.default.SO_PROMOTED },
                React.createElement(TableWrapper_1.TableHeaderButton, null, "Promoot velden"))),
        React.createElement(react_components_1.Query, { query: queries_1.FETCH_LEAKAGES, variables: variables, onCompleted: onFetchCompeted }, function (_a) {
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
            var leakages = _get(data, "serviceOrders", []);
            return (React.createElement(SortableTable_1.default, { columns: __spreadArrays([
                    SortableTable_1.createActionMenuColumn(tableHelper_1.default.createActionMenuItems({
                        onClickEdit: function (_a) {
                            var id = _a.id;
                            history.push(urls_1.default.SO_DETAILS + "/" + id);
                        },
                        onClickBlock: function (leakage) {
                            return serviceOrderActions.block(leakage, refetchQueries);
                        },
                        onClickDelete: function (leakage) {
                            return serviceOrderActions.delete(leakage, refetchQueries);
                        }
                    }), leakages.length)
                ], constants_2.COLUMNS), onRowClick: function (_a) {
                    var id = _a.id;
                    return history.push(urls_1.default.SO_DETAILS + "/" + id);
                }, dataSource: leakages, onQueryChange: function (newMeta) { return setMeta(newMeta); }, meta: meta, onExportClick: exportHelper_1.default.onExportClick(queries_1.FETCH_ALL_SERVICE_ORDERS, "allServiceOrders", variables, constants_2.COLUMNS, client, _get(data, "serviceOrdersConnection.aggregate.count", 0)), exportButtons: constants_1.EXPORT_BUTTONS, exportTypes: ["excel", "pdf"], filterFields: __assign(__assign({}, initialInspections_1.default.field), initialInspections_1.default.filter), filters: filterHelper_1.default.separateFilters(filters, searchText), pageName: i18_1.default.t("ServiceOrder.serviceOrders"), fileName: "dakota-so-" + i18_1.default
                    .t("ServiceOrder.serviceOrders")
                    .toLocaleLowerCase(), searchText: searchText, showTotalNumber: true, disabledRows: getDisabledRows(leakages), rowFullyDisabled: true }));
        }),
        React.createElement(components_1.ModalRoute, { component: partials_1.LeakageDetails, path: urls_1.default.SO_DETAILS + "/:id", parentPath: match.url, variant: "wide" }),
        React.createElement(ModalWrapper_1.ModalBox, { component: PromotedFields_1.default, path: urls_1.default.SO_PROMOTED, parentPath: match.url, variant: "wide", chartModal: true }),
        React.createElement(components_1.ModalRoute, { component: partials_1.Moment, path: urls_1.default.LOG_MOMENT, parentPath: match.url, variant: "wide" })));
};
exports.default = recompose_1.compose(withFilters_1.default({
    entityName: "ServiceOrder",
    preDefinedFilters: [
        {
            title: "Ordersoort",
            key: "postalCode",
            type: "String"
        }
    ],
    i18n: i18_1.default
}), components_2.withLockEntities({
    entity: "serviceOrder"
}))(Leakages);
//# sourceMappingURL=index.js.map