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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_hooks_1 = require("@apollo/react-hooks");
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var components_1 = require("dakota-portal/dist/components");
var helpers_1 = require("./../../../helpers");
var components_2 = require("../../../components");
var constants_1 = require("./../constants");
var Accordions = __importStar(require("./accordions"));
var queries_1 = require("./../queries");
var HEAD_HEIGHT = 130;
var ACCORDION_ANIMATION_TIME = 750;
var ContractDetails = function (_a) {
    var match = _a.match, history = _a.history, onLockEntity = _a.onLockEntity, lockedBy = _a.userId;
    var scId = get_1.default(match, "params.scId", "");
    var _b = react_1.default.useState({}), contractData = _b[0], setContractData = _b[1];
    var _c = react_1.default.useState(""), scCode = _c[0], setScCode = _c[1];
    var _d = react_1.default.useState(false), scIsLocked = _d[0], setScIsLocked = _d[1];
    var dublicate = react_hooks_1.useMutation(queries_1.DUBLICATE_CONTRACT)[0];
    var containerRef = react_1.default.useRef(null);
    var accordionRefs = react_1.default.useState(constants_1.NAV_ITEMS.reduce(function (acc, _a) {
        var _b;
        var link = _a.link;
        return (__assign(__assign({}, acc), (_b = {}, _b[link] = react_1.default.useRef(null), _b)));
    }, {}))[0];
    var alertContext = react_1.default.useContext(components_1.AlertContext);
    react_hooks_1.useQuery(queries_1.GET_CONTACT_DATA, {
        variables: { where: { id: scId } },
        onCompleted: function (data) {
            var _a = get_1.default(data, "serviceContract", {}), _b = _a.code, code = _b === void 0 ? "" : _b, _c = _a.scLockedBy, scLockedBy = _c === void 0 ? "" : _c, _d = _a.isLocked, isLocked = _d === void 0 ? false : _d, contractData = __rest(_a, ["code", "scLockedBy", "isLocked"]);
            setScCode(code);
            setContractData(contractData);
            if (isLocked) {
                if (scLockedBy !== lockedBy) {
                    alertContext.askBlock(function () { return null; }, {
                        title: "Servicecontract is vergrendeld",
                        subtitle: "Servicecontract wordt momenteel bewerkt en kan niet door u worden bewerkt",
                        acceptText: "Ok",
                        rejectText: " "
                    });
                    setScIsLocked(true);
                }
            }
            else {
                lockEntity();
            }
        }
    });
    react_1.default.useEffect(function () {
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
    var _e = react_1.default.useState([constants_1.NAV_ITEMS[0].link]), activeLinks = _e[0], setActiveLinks = _e[1];
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
                    if (!scId) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onLockEntity("UNLOCK", {
                            data: { lockedBy: lockedBy, entityName: "serviceContract" },
                            where: { id: scId }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log("err", err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var lockEntity = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!scId) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onLockEntity("LOCK", {
                            data: { lockedBy: lockedBy, entityName: "serviceContract" },
                            where: { id: scId }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.log("err", err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleClose = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, unlockEntity()];
                case 1:
                    _a.sent();
                    history.push(helpers_1.urls.SC_LIST);
                    return [2 /*return*/];
            }
        });
    }); };
    var dublicateContract = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, dublicatedServiceContract, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, dublicate({
                            variables: {
                                data: __assign(__assign({}, contractData), { id: undefined, description: "", customerCode: "", code: helpers_1.generateCode() })
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    dublicatedServiceContract = data.createServiceContract;
                    window.open(match.url + "/service-contract/" + get_1.default(dublicatedServiceContract, "id"), "_blank");
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.log("Err: ", JSON.stringify(err_3, null, 2));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(components_1.SlideModal, { headerProps: {
            title: "Service Contract",
            description: "" + scCode + (scIsLocked ? " (Locked)" : ""),
            onClose: handleClose,
            component: react_1.default.createElement(components_1.Button, { onClick: dublicateContract }, "Duplicaat")
        }, containerRef: containerRef, noPadding: true },
        react_1.default.createElement(components_2.Nav, { activeLinks: activeLinks, navItems: constants_1.NAV_ITEMS, onClick: handleTabSelected }),
        react_1.default.createElement(Grid_1.default, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start" }, scCode ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Accordions.Termins, { isLocked: scIsLocked, code: scCode, refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected }),
            react_1.default.createElement(Accordions.Client, { history: history, match: match, isLocked: scIsLocked, code: scCode, refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected }),
            react_1.default.createElement(Accordions.Data, { isLocked: scIsLocked, code: scCode, refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected }),
            react_1.default.createElement(Accordions.Appointments, { isLocked: scIsLocked, match: match, history: history, refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected }),
            react_1.default.createElement(Accordions.Billing, { isLocked: scIsLocked, code: scCode, refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected }),
            react_1.default.createElement(Accordions.Terms, { isLocked: scIsLocked, code: scCode, refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected }),
            react_1.default.createElement(Accordions.Document, { isLocked: scIsLocked, match: match, refs: accordionRefs, activeLinks: activeLinks, onClick: handleAccordionSelected }))) : (react_1.default.createElement(components_1.Loader, null)))));
};
exports.default = components_2.withLockEntities({ entity: "serviceContract" })(ContractDetails);
//# sourceMappingURL=contractDetails.js.map