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
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var get_1 = __importDefault(require("lodash/get"));
var reduce_1 = __importDefault(require("lodash/reduce"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var react_hooks_1 = require("@apollo/react-hooks");
var SortableTable_1 = __importStar(require("dakota-portal/dist/components/SortableTable"));
var components_1 = require("dakota-portal/dist/components");
var constants_1 = require("./constants");
var constants_2 = require("../../constants");
var queries_1 = require("./queries");
var tableHelper_1 = __importDefault(require("../../../../helpers/tableHelper"));
var components_2 = require("../../../../components");
var helpers_1 = require("../../../../helpers");
var styles_1 = require("../../../serviceOrder/styles");
var styles_2 = require("../../../../components/SearchModal/styles");
var Moment = function (_a) {
    var history = _a.history, match = _a.match;
    var client = react_hooks_1.useApolloClient();
    var _b = React.useState({
        activePage: 0,
        totalItems: 0,
        perPage: constants_2.PER_PAGE
    }), meta = _b[0], setMeta = _b[1];
    var _c = React.useState(false), showForm = _c[0], toggleForm = _c[1];
    var _d = React.useState(constants_1.FORM_VALUES), formValues = _d[0], setFormValues = _d[1];
    var _e = React.useState([]), moments = _e[0], setMoments = _e[1];
    var _f = React.useState(false), isLoading = _f[0], setIsLoading = _f[1];
    var _g = React.useState(), momentId = _g[0], setMomentId = _g[1];
    var url = match.url;
    React.useEffect(function () {
        handleFetchMoments();
    }, []);
    var formatValues = function (values) {
        return reduce_1.default(values, function (acc, val, key) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[key] = constants_1.NUMBER_FIELDS.includes(key) ? parseInt(val, 10) : val, _a)));
        }, {});
    };
    var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!values) {
                        toggleForm(false);
                        setFormValues(constants_1.FORM_VALUES);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    setIsLoading(true);
                    data = formatValues(values);
                    if (!data.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, handleUpdateMoment(data)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, handleCreateMoment(data)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    toggleForm(false);
                    setFormValues(constants_1.FORM_VALUES);
                    handleFetchMoments();
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    toggleForm(false);
                    setIsLoading(false);
                    console.error(err_1.message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var handleCreateMoment = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.mutate({
                            mutation: queries_1.CREATE_MOMENT,
                            variables: { data: values }
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error(err_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleUpdateMoment = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var id, data, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = values.id, data = __rest(values, ["id"]);
                    return [4 /*yield*/, client.mutate({
                            mutation: queries_1.UPDATE_MOMENT,
                            variables: { data: data, where: { id: id } }
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.error(err_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleFetchMoments = function (newMeta) {
        if (newMeta === void 0) { newMeta = {}; }
        var currentMeta = !isEmpty_1.default(newMeta) ? newMeta : meta;
        var variables = {
            skip: currentMeta.activePage * currentMeta.perPage,
            perPage: currentMeta.perPage,
            orderBy: currentMeta.orderByKey && currentMeta.orderByType
                ? currentMeta.orderByKey + "_" + currentMeta.orderByType.toUpperCase()
                : "id_DESC"
        };
        client
            .query({
            query: queries_1.FETCH_MOMENTS,
            variables: variables
        })
            .then(function (res) {
            var moments = get_1.default(res, "data.moments", []);
            setMeta(__assign(__assign({}, currentMeta), { totalItems: get_1.default(res, "data.momentsConnection.aggregate.count", 0) }));
            setMoments(moments);
            setIsLoading(false);
        })
            .catch(function (err) {
            setIsLoading(false);
            console.error(err.message);
        });
    };
    var handleDeleteMoment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setIsLoading(true);
                    return [4 /*yield*/, client.mutate({
                            mutation: queries_1.DELETE_MOMENT,
                            variables: { where: { id: momentId } }
                        })];
                case 1:
                    _a.sent();
                    handleToggleModal();
                    handleFetchMoments();
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    setIsLoading(false);
                    console.error(err_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleClickCheckbox = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setIsLoading(true);
                    return [4 /*yield*/, handleUpdateMoment(values)];
                case 1:
                    _a.sent();
                    handleFetchMoments();
                    return [3 /*break*/, 3];
                case 2:
                    err_5 = _a.sent();
                    setIsLoading(false);
                    console.error(err_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleToggleModal = function (id) {
        if (id === void 0) { id = ""; }
        if (!id) {
            setMomentId("");
            history.goBack();
        }
        else {
            setMomentId(id);
            history.push(helpers_1.urls.check(url + helpers_1.urls.CONFIRM_MODAL));
        }
    };
    return (React.createElement(components_1.SlideModal, { headerProps: {
            onClose: history.goBack,
            title: "Nieuwe logmomenten aanmaken"
        } },
        React.createElement(styles_1.FormCard, null,
            React.createElement(Grid_1.default, { container: true, xs: 12 },
                React.createElement(Grid_1.default, { xs: 6, item: true },
                    React.createElement(styles_1.CardTitle, { hasborder: "false" }, "Logmomenten")),
                React.createElement(Grid_1.default, { xs: 6, item: true, container: true, justify: "flex-end", alignItems: "center" },
                    React.createElement(styles_1.TransparentButton, { height: "56px", onClick: function () { return toggleForm(!showForm); } }, "Toevoegen logmomenten"))),
            isLoading && (React.createElement(styles_1.LoaderWrapper, null,
                React.createElement(components_1.Loader, null))),
            React.createElement(SortableTable_1.default, { columns: __spreadArrays([
                    SortableTable_1.createActionMenuColumn(tableHelper_1.default.createActionMenuItems({
                        onClickEdit: function (moment) {
                            toggleForm(true);
                            setFormValues(moment);
                        },
                        onClickBlock: function () { return null; },
                        onClickDelete: function (_a) {
                            var id = _a.id;
                            return handleToggleModal(id);
                        }
                    }), moments.length)
                ], constants_1.COLUMNS(handleClickCheckbox)), dataSource: moments, onRowClick: function () { return null; }, meta: meta, onQueryChange: handleFetchMoments, onSubmitForm: showForm ? handleSubmit : null, onValueChange: function () { return null; }, selectedRows: [], disabledRows: [], formValues: formValues, isNotConfigurable: true }),
            React.createElement(styles_2.ModalBox, { component: components_2.ConfirmModal, path: helpers_1.urls.check(url + helpers_1.urls.CONFIRM_MODAL), parentPath: url, outDelay: 300, onBackdropClick: function () { return handleToggleModal(); }, props: {
                    onConfirm: function () { return handleDeleteMoment(); },
                    onCancel: function () { return handleToggleModal(); },
                    onClose: function () { return handleToggleModal(); },
                    text: "Wilt u het logmoment echt verwijderen?"
                }, width: "auto" }))));
};
exports.default = Moment;
//# sourceMappingURL=index.js.map