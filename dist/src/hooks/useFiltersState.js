"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var set_1 = __importDefault(require("lodash/set"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var FieldsFilter_1 = require("dakota-portal/dist/components/CustomFilter/FieldsFilter");
var index_1 = require("../helpers/index");
var helpers_1 = require("../helpers");
var graphql_tag_1 = __importDefault(require("graphql-tag"));
function convertFiltersToWhere(filters) {
    var filtersWithValues = filters.filter(function (filter) { return !!filter.field; });
    return filtersWithValues.map(function (_a) {
        var field = _a.field, comparisonOperator = _a.comparisonOperator, value = _a.value;
        var result = {};
        var fieldName = comparisonOperator === "eq" ? field : field + "_" + comparisonOperator;
        set_1.default(result, fieldName, value);
        return result;
    });
}
var FETCH_SERVICE_ORDER_FILTER_COUNT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query filter($where: ServiceOrderWhereInput) {\n    serviceOrders(where: $where) {\n      id\n    }\n    serviceOrdersConnection(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"], ["\n  query filter($where: ServiceOrderWhereInput) {\n    serviceOrders(where: $where) {\n      id\n    }\n    serviceOrdersConnection(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"])));
var FETCH_SERVICE_CONTRACT_FILTER_COUNT = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query filter($where: ServiceContractWhereInput) {\n    serviceContracts(where: $where) {\n      id\n    }\n    serviceContractsConnection(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"], ["\n  query filter($where: ServiceContractWhereInput) {\n    serviceContracts(where: $where) {\n      id\n    }\n    serviceContractsConnection(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"])));
exports.EMPTY_FILTER = {
    name: "",
    fields: [],
    color: ""
};
exports.useFiltersState = function (saveQuery, fetchQuery, entity) { return function (initialGroups, client, alertContext) {
    var _a = react_1.useState(initialGroups), groups = _a[0], setGroups = _a[1];
    var _b = react_1.useState(""), selectedGroupId = _b[0], setSelectedGroupId = _b[1];
    var _c = react_1.useState(exports.EMPTY_FILTER), selectedFilter = _c[0], setSelectedFilter = _c[1];
    var _d = react_1.useState(false), isNew = _d[0], setIsNew = _d[1];
    function saveFilterGroups(filterGroups) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setGroups(__spreadArrays(filterGroups));
                        return [4 /*yield*/, client.mutate({
                                mutation: saveQuery,
                                refetchQueries: [{ query: fetchQuery }],
                                variables: {
                                    filterGroups: filterGroups
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function calcTotalAmount(filter) {
        return __awaiter(this, void 0, void 0, function () {
            var filterParsing, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filterParsing = convertFiltersToWhere(filter.fields);
                        return [4 /*yield*/, client.query({
                                query: entity === "ServiceContract"
                                    ? FETCH_SERVICE_CONTRACT_FILTER_COUNT
                                    : FETCH_SERVICE_ORDER_FILTER_COUNT,
                                variables: {
                                    where: {
                                        AND: filterParsing
                                    }
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, entity === "ServiceContract"
                                ? response.data.serviceContractsConnection.aggregate.count
                                : response.data.serviceOrdersConnection.aggregate.count];
                }
            });
        });
    }
    function clearSlider() {
        setSelectedGroupId("");
        setSelectedFilter(exports.EMPTY_FILTER);
    }
    var groupActions = {
        move: function (source, destination) {
            return __awaiter(this, void 0, void 0, function () {
                var updatedGroups;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updatedGroups = index_1.DnD.reorder(groups, source.index, destination.index);
                            return [4 /*yield*/, saveFilterGroups(updatedGroups)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        rename: function (id, newName) {
            return __awaiter(this, void 0, void 0, function () {
                var group;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            group = groups.find(function (g) { return g.id === id; });
                            group.name = newName;
                            return [4 /*yield*/, saveFilterGroups(groups)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        create: function () {
            return __awaiter(this, void 0, void 0, function () {
                var newGroup;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            newGroup = {
                                id: Date.now().toString(),
                                name: "Untitled",
                                filters: []
                            };
                            return [4 /*yield*/, saveFilterGroups(__spreadArrays(groups, [newGroup]))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        delete: function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, saveFilterGroups(groups.filter(function (g) { return g.id !== id; }))];
                        case 1:
                            _a.sent();
                            if (id === selectedGroupId) {
                                clearSlider();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
    };
    var filterActions = {
        move: function (source, destination) {
            return __awaiter(this, void 0, void 0, function () {
                var group, sourceGroup, destinationGroup, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (source.droppableId === destination.droppableId) {
                                group = groups.find(function (g) { return g.id === source.droppableId; });
                                group.filters = index_1.DnD.reorder(group.filters, source.index, destination.index);
                            }
                            else {
                                sourceGroup = groups.find(function (g) { return g.id === source.droppableId; });
                                destinationGroup = groups.find(function (g) { return g.id === destination.droppableId; });
                                result = index_1.DnD.move(sourceGroup.filters, destinationGroup.filters, source, destination);
                                sourceGroup.filters = result[source.droppableId];
                                destinationGroup.filters = result[destination.droppableId];
                            }
                            return [4 /*yield*/, saveFilterGroups(groups)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        select: function (filterId, groupId) {
            setSelectedGroupId(groupId);
            var group = groups.find(function (g) { return g.id === groupId; });
            var filter = group.filters.find(function (f) { return f.id === filterId; });
            setSelectedFilter(filter);
        },
        addNew: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    setSelectedGroupId("");
                    setSelectedFilter({
                        id: Date.now().toString(),
                        name: "New filter",
                        comparisonType: "AND",
                        amount: 0,
                        color: Colors_1.default.mediumSeaGreen,
                        fields: []
                    });
                    setIsNew(true);
                    return [2 /*return*/];
                });
            });
        },
        saveNew: function (groupId, filter) {
            return __awaiter(this, void 0, void 0, function () {
                var group, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            group = groups.find(function (g) { return g.id === groupId; });
                            group.filters.push(filter);
                            setSelectedGroupId(groupId);
                            setSelectedFilter(filter);
                            _a = filter;
                            return [4 /*yield*/, calcTotalAmount(filter)];
                        case 1:
                            _a.amount = _b.sent();
                            setIsNew(false);
                            return [4 /*yield*/, saveFilterGroups(groups)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        clone: function (filterId, groupId) {
            var group = groups.find(function (g) { return g.id === groupId; });
            var filter = group.filters.find(function (f) { return f.id === filterId; });
            setSelectedGroupId(groupId);
            var newFilter = __assign(__assign({}, filter), { id: Date.now().toString(), name: "Clone " + filter.name });
            setSelectedFilter(newFilter);
            setIsNew(true);
        },
        save: function (updatedFilter) {
            return __awaiter(this, void 0, void 0, function () {
                var group, index, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            group = groups.find(function (g) { return g.id === selectedGroupId; });
                            index = group.filters.indexOf(selectedFilter);
                            _a = updatedFilter;
                            return [4 /*yield*/, calcTotalAmount(updatedFilter)];
                        case 1:
                            _a.amount = _b.sent();
                            group.filters[index] = updatedFilter;
                            setSelectedFilter(updatedFilter);
                            return [4 /*yield*/, saveFilterGroups(groups)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        delete: function (filterId, groupId) {
            return __awaiter(this, void 0, void 0, function () {
                var group;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            group = groups.find(function (g) { return g.id === groupId; });
                            group.filters = group.filters.filter(function (f) { return f.id !== filterId; });
                            if (filterId === selectedFilter.id) {
                                clearSlider();
                            }
                            return [4 /*yield*/, saveFilterGroups(groups)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        redirect: function (selectedFilter, history, url) {
            var redirectUrl = url === helpers_1.urls.HOME ? helpers_1.urls.SO_LIST : helpers_1.urls.SC_LIST;
            var filters = get_1.default(selectedFilter, "fields", []).map(function (field) {
                return FieldsFilter_1.createFilter(field);
            });
            var filter = {
                comparisonType: get_1.default(selectedFilter, "comparisonType"),
                filters: filters
            };
            history.push(redirectUrl + "?filter=" + JSON.stringify(filter));
        }
    };
    return {
        groups: groups,
        setGroups: setGroups,
        selectedFilter: selectedFilter,
        selectedGroupId: selectedGroupId,
        isNew: isNew,
        actions: {
            group: groupActions,
            filter: filterActions
        }
    };
}; };
var templateObject_1, templateObject_2;
//# sourceMappingURL=useFiltersState.js.map