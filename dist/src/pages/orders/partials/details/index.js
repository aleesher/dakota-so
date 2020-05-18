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
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var react_hooks_1 = require("@apollo/react-hooks");
var react_components_1 = require("@apollo/react-components");
var formik_1 = require("formik");
var recompose_1 = require("recompose");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var ArrowBack_1 = __importDefault(require("@material-ui/icons/ArrowBack"));
var Loader_1 = __importDefault(require("dakota-portal/dist/components/Loader"));
var components_1 = require("../../../../components");
var Accordions = __importStar(require("./Accordions"));
var constants_1 = require("../../constants");
var AccessControl_1 = require("../../../../components/AccessControl");
var helpers_1 = require("../../../../helpers");
var queries_1 = require("../../../../components/withSOActions/queries");
var queries_2 = require("../../queries");
var Styles = __importStar(require("../styles"));
var styles_1 = require("../../../serviceOrder/styles");
var styles_2 = require("../../../../components/SearchModal/styles");
var HEAD_HEIGHT = 130;
var ACCORDION_ANIMATION_TIME = 750;
var Index = function (_a) {
    var history = _a.history, location = _a.location, match = _a.match, onLockEntity = _a.onLockEntity, lockedBy = _a.userId, onExecuteMutation = _a.onExecuteMutation, onGetSOCustomer = _a.onGetSOCustomer, onGetSOAddress = _a.onGetSOAddress, isSOLoading = _a.isSOLoading;
    var client = react_hooks_1.useApolloClient();
    var containerRef = React.useRef(null);
    var accordionRefs = React.useState(constants_1.NAV_ITEMS.reduce(function (acc, _a) {
        var _b;
        var link = _a.link;
        return (__assign(__assign({}, acc), (_b = {}, _b[link] = React.useRef(null), _b)));
    }, {}))[0];
    var _b = React.useState([]), activeLinks = _b[0], setActiveLinks = _b[1];
    var _c = React.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = React.useState({}), currentUser = _d[0], setCurrentUser = _d[1];
    var _e = React.useState({
        promotedAlgemene: [],
        promotedWorkOrder: [],
        promotedDocumenten: [],
        promotedBeoordelen: []
    }), promotedAccFields = _e[0], setPromotedAccFields = _e[1];
    var _f = React.useState(""), soCode = _f[0], setSoCode = _f[1];
    var url = match.url, soId = match.params.id;
    React.useEffect(function () {
        window.addEventListener("beforeunload", function (ev) {
            ev.preventDefault();
            ev.returnValue = "";
            unlockEntity();
        });
        return function cleanup() {
            unlockEntity();
            window.removeEventListener("beforeunload", null);
        };
    }, []);
    var scrollToTab = function (link) {
        setTimeout(function () {
            var container = containerRef.current;
            container.style.scrollBehavior = "smooth";
            container.scrollTo(0, accordionRefs[link].current.offsetTop - HEAD_HEIGHT);
            container.style.scrollBehavior = "initial";
        }, ACCORDION_ANIMATION_TIME);
    };
    var handleTabSelected = function (link) {
        var updatedLinks = activeLinks.includes(link)
            ? activeLinks
            : __spreadArrays(activeLinks, [link]);
        setActiveLinks(updatedLinks);
        scrollToTab(link);
    };
    var handleAccordionSelected = function (link) {
        var isRemoved = activeLinks.includes(link);
        var updatedLinks = isRemoved
            ? activeLinks.filter(function (l) { return l !== link; })
            : __spreadArrays(activeLinks, [link]);
        if (!isRemoved) {
            scrollToTab(link);
        }
        setActiveLinks(updatedLinks);
    };
    var unlockEntity = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, onLockEntity("UNLOCK", {
                            data: { lockedBy: lockedBy, entityName: "serviceOrder" },
                            where: { id: soId }
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log("err", err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var lockEntity = function (id) {
        if (id === void 0) { id = ""; }
        return __awaiter(void 0, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, onLockEntity("LOCK", {
                                data: { lockedBy: lockedBy, entityName: "serviceOrder" },
                                where: { id: !!id ? id : soId }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log("err", err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var handleClose = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, unlockEntity()];
                case 1:
                    _a.sent();
                    history.goBack();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSelectCustomer = function (formikBag) { return function (customer) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    history.goBack();
                    formikBag.handleChange({ target: { name: "customer", value: customer } });
                    return [4 /*yield*/, handleUpdateSO(__assign(__assign({}, formikBag.values), { customer: customer }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }; };
    var handleUpdateSO = function (formikValues) { return __awaiter(void 0, void 0, void 0, function () {
        var err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, onExecuteMutation({
                            formikValues: formikValues,
                            serviceOrderId: soId,
                            prevFormValues: formikValues,
                            currentUser: currentUser,
                            showLoader: false
                        })];
                case 1:
                    _a.sent();
                    helpers_1.notification.addNotification({
                        title: "Serviceorder bijwerken",
                        message: "Serviceorder met id " + soId + " is succesvol bijgewerkt",
                        type: "info"
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.error(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleOpenMomentHistory = function () {
        history.push(helpers_1.urls.check(url + helpers_1.urls.MOMENT_HISTORY));
    };
    var initUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var user, promoted, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, AccessControl_1.getCurrentUser()];
                case 1:
                    user = _a.sent();
                    setCurrentUser(user);
                    promoted = get_1.default(user, "soDetailsPromotedFields");
                    console.log(promoted, user);
                    if (promoted) {
                        setPromotedAccFields(promoted);
                    }
                    lockEntity(id);
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.error(err_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(formik_1.Formik, { initialValues: {}, onSubmit: function () { return null; }, enableReinitialize: true }, function (formikBag) {
        var handleQueryComplete = function (data) { return __awaiter(void 0, void 0, void 0, function () {
            var serviceOrder, addressCode, address, _a, customer, reporter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setIsLoading(true);
                        serviceOrder = get_1.default(data, "serviceOrder", {});
                        addressCode = get_1.default(serviceOrder, "serviceLocationCode");
                        if (!!!addressCode) return [3 /*break*/, 2];
                        return [4 /*yield*/, onGetSOAddress(addressCode)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = {};
                        _b.label = 3;
                    case 3:
                        address = _a;
                        return [4 /*yield*/, onGetSOCustomer(serviceOrder)];
                    case 4:
                        customer = _b.sent();
                        reporter = get_1.default(serviceOrder, "reporter", {});
                        formikBag.setValues(__assign(__assign({}, serviceOrder), { customer: customer,
                            address: address, reporter: reporter ? reporter : {} }));
                        if (!(!!serviceOrder && isEmpty_1.default(currentUser))) return [3 /*break*/, 6];
                        return [4 /*yield*/, initUser(serviceOrder.id)];
                    case 5:
                        _b.sent();
                        if (!soCode) {
                            setSoCode(serviceOrder.code);
                        }
                        _b.label = 6;
                    case 6:
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        var handleError = function (err) {
            console.log(err);
        };
        return (React.createElement(react_components_1.Query, { query: queries_2.FETCH_SERVICE_ORDER, variables: { where: { id: soId } }, onCompleted: handleQueryComplete, fetchPolicy: "cache-and-network", onError: handleError }, function () { return (React.createElement(React.Fragment, null,
            React.createElement(Styles.CustomModal, { headerProps: {
                    title: "Serviceorder",
                    description: soId,
                    onClose: handleClose,
                    closeIcon: ArrowBack_1.default
                }, containerRef: containerRef, noPadding: true },
                (isLoading || isSOLoading) && (React.createElement(styles_1.LoaderWrapper, null,
                    React.createElement(Loader_1.default, null))),
                React.createElement(components_1.Nav, { activeLinks: activeLinks, navItems: constants_1.NAV_ITEMS, onClick: handleTabSelected }),
                React.createElement(Grid_1.default, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" },
                    React.createElement(Accordions.GeneralInfo, { refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected, formikBag: formikBag, apolloClient: client, setIsLoading: setIsLoading, currentUser: currentUser, url: url, onUpdateSO: handleUpdateSO, onOpenMomentHistory: handleOpenMomentHistory, promotedFields: promotedAccFields.promotedAlgemene }),
                    React.createElement(Accordions.WorkOrders, { refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected, routeProps: { history: history, location: location, match: match }, soCode: soCode, soDescription: get_1.default(formikBag, "values.description"), onOpenMomentHistory: handleOpenMomentHistory, currentUser: currentUser, promotedFields: promotedAccFields.promotedWorkOrder }),
                    React.createElement(Accordions.Documents, { refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected, match: match, promotedFields: promotedAccFields.promotedDocumenten }),
                    React.createElement(Accordions.Review, { refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected, promotedFields: promotedAccFields.promotedBeoordelen }))),
            React.createElement(styles_2.ModalBox, { component: components_1.SearchModal, path: helpers_1.urls.check(url + helpers_1.urls.SEARCH_CLIENT), parentPath: url, outDelay: 300, onBackdropClick: function () { return history.goBack(); }, props: {
                    onSelect: handleSelectCustomer(formikBag),
                    onClose: history.goBack,
                    query: queries_1.FETCH_CUSTOMERS,
                    where: !isEmpty_1.default(get_1.default(formikBag, "values.address.city"))
                        ? {
                            city: get_1.default(formikBag, "values.address.city")
                        }
                        : {}
                } }),
            React.createElement(styles_2.ModalBox, { path: helpers_1.urls.check(url + helpers_1.urls.MOMENT_HISTORY), parentPath: url, component: components_1.MomentHistory, variant: "wide", props: {
                    onClose: history.goBack,
                    soCode: get_1.default(formikBag, "values.code")
                } }))); }));
    }));
};
exports.default = recompose_1.compose(components_1.withSOActions(), components_1.withLockEntities({ entity: "serviceOrder" }))(Index);
//# sourceMappingURL=index.js.map