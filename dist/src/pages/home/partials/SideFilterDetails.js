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
var react_1 = __importStar(require("react"));
var react_components_1 = require("@apollo/react-components");
var get_1 = __importDefault(require("lodash/get"));
var map_1 = __importDefault(require("lodash/fp/map"));
var filter_1 = __importDefault(require("lodash/fp/filter"));
var sortBy_1 = __importDefault(require("lodash/fp/sortBy"));
var compose_1 = __importDefault(require("lodash/fp/compose"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var components_1 = require("dakota-portal/dist/components");
var ColorFilter_1 = __importStar(require("dakota-portal/dist/components/CustomFilter/Filters/ColorFilter"));
var StringFilter_1 = __importDefault(require("dakota-portal/dist/components/CustomFilter/Filters/StringFilter"));
var SelectFilter_1 = __importDefault(require("dakota-portal/dist/components/CustomFilter/Filters/SelectFilter"));
var FieldsFilter_1 = __importDefault(require("dakota-portal/dist/components/CustomFilter/FieldsFilter"));
var SideFilterPage_1 = require("dakota-portal/dist/components/SideFilter/SideFilterPage");
var queries_1 = require("dakota-portal/dist/components/withFilters/queries");
var FiltersActionsContext_1 = __importDefault(require("../../../helpers/filters/FiltersActionsContext"));
var i18_1 = __importDefault(require("../../../helpers/i18"));
var styles_1 = require("./../styles");
exports.SideFilterDetails = function (_a) {
    var history = _a.history, _b = _a.entityName, entityName = _b === void 0 ? "ServiceOrder" : _b;
    var setFilterExpanded = react_1.useContext(SideFilterPage_1.SideFilterContext).setFilterExpanded;
    var _c = react_1.useContext(FiltersActionsContext_1.default), actions = _c.actions, selectedFilter = _c.selectedFilter, selectedGroupId = _c.selectedGroupId, isNew = _c.isNew, groups = _c.groups;
    var _d = react_1.useState(selectedGroupId || ""), groupId = _d[0], setGroupId = _d[1];
    var _e = react_1.default.useState(selectedFilter.name), name = _e[0], setName = _e[1];
    var _f = react_1.default.useState(selectedFilter.color), color = _f[0], setColor = _f[1];
    var _g = react_1.default.useState(selectedFilter.fields), fields = _g[0], setFields = _g[1];
    react_1.default.useEffect(function () {
        setName(selectedFilter.name);
        setColor(selectedFilter.color);
        setFields(selectedFilter.fields);
    }, [selectedFilter]);
    react_1.default.useEffect(function () { return setGroupId(selectedGroupId); }, [selectedGroupId]);
    // hide filter on first render
    react_1.default.useEffect(function () {
        setFilterExpanded(false);
        if (!selectedFilter.color) {
            setColor(ColorFilter_1.FILTER_COLORS[1].value);
        }
    }, []);
    var getFilterableFields = function (entityFields) {
        return compose_1.default(sortBy_1.default("title"), map_1.default(function (field) {
            return ({
                title: i18_1.default.t(entityName + ".field." + field.name),
                key: field.name,
                type: get_1.default(field, "type.ofType.name") || get_1.default(field, "type.name")
            });
        }), filter_1.default(function (field) {
            return !!field.name &&
                get_1.default(field, "type.ofType.name") !== "ID" &&
                (get_1.default(field, "type.ofType.kind") === "SCALAR" ||
                    get_1.default(field, "type.kind") === "SCALAR") &&
                !field.name.startsWith("_");
        }))(entityFields);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isNew) return [3 /*break*/, 3];
                    if (!groupId) return [3 /*break*/, 2];
                    return [4 /*yield*/, actions.filter.saveNew(groupId, __assign(__assign({}, selectedFilter), { name: name.trim(), color: color,
                            fields: fields }))];
                case 1:
                    _a.sent();
                    setFilterExpanded(false);
                    _a.label = 2;
                case 2: return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, actions.filter.save(__assign(__assign({}, selectedFilter), { name: name.trim(), color: color,
                        fields: fields }))];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var formatGroups = function () {
        return (groups || []).map(function (group) { return ({
            value: get_1.default(group, "id"),
            label: get_1.default(group, "name")
        }); });
    };
    return (react_1.default.createElement(components_1.SideFilter, { title: "" },
        react_1.default.createElement(react_components_1.Query, { query: queries_1.FETCH_INFO, variables: {
                entityName: entityName
            }, fetchPolicy: "cache-and-network" }, function (_a) {
            var data = _a.data, loading = _a.loading, _b = _a.error, error = _b === void 0 ? null : _b;
            if (error) {
                return react_1.default.createElement("div", null,
                    "Error! $",
                    error.message);
            }
            if (loading) {
                return react_1.default.createElement(components_1.Loader, null);
            }
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { style: { width: "100%" } },
                    react_1.default.createElement(FormControl_1.default, { style: { width: "100%" } },
                        react_1.default.createElement(styles_1.InputLabel, null, "Name"),
                        react_1.default.createElement(StringFilter_1.default, { value: name, onChange: setName, onApply: function () { return null; } }))),
                isNew && !selectedGroupId && (react_1.default.createElement("div", { style: { marginBottom: 20, width: "100%" } },
                    react_1.default.createElement(FormControl_1.default, { style: { width: "100%" } },
                        react_1.default.createElement(styles_1.InputLabel, null, "Group"),
                        react_1.default.createElement(SelectFilter_1.default, { onChange: setGroupId, values: formatGroups(), value: groupId, onApply: function () { return null; } })))),
                react_1.default.createElement("div", { style: { width: "100%" } },
                    react_1.default.createElement(FormControl_1.default, { style: { width: "100%" } },
                        react_1.default.createElement(styles_1.InputLabel, null, "Color"),
                        react_1.default.createElement(ColorFilter_1.default, { value: color, onChange: setColor, onApply: function () { return null; } }))),
                react_1.default.createElement(FieldsFilter_1.default, { history: history, initialFilters: fields, preDefinedFilters: [], onApplyFilters: function (filters) { return setFields(filters); }, comparisonType: selectedFilter.comparisonType, fields: getFilterableFields(get_1.default(data, "__type.fields", [])), handleSubmit: handleSubmit })));
        })));
};
//# sourceMappingURL=SideFilterDetails.js.map