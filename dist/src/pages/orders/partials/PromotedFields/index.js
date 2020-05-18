"use strict";
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
var get_1 = __importDefault(require("lodash/get"));
var SlideModal_1 = __importDefault(require("dakota-portal/dist/components/SlideModal"));
var components_1 = require("dakota-portal/dist/components");
var Styled = __importStar(require("../styles"));
var Algemene_1 = __importDefault(require("./Algemene"));
var Workorder_1 = __importDefault(require("./Workorder"));
var Documenten_1 = __importDefault(require("./Documenten"));
var Beoordelen_1 = __importDefault(require("./Beoordelen"));
var styles_1 = require("../styles");
var Loader_1 = __importDefault(require("dakota-portal/dist/components/Loader"));
var react_hooks_1 = require("@apollo/react-hooks");
var queries_1 = require("../../queries");
exports.default = (function (_a) {
    var history = _a.history;
    var _b = react_1.useState([]), promotedAlgemene = _b[0], updatePromotedAlgemene = _b[1];
    var _c = react_1.useState([]), promotedWorkOrder = _c[0], updatePromotedWorkOrder = _c[1];
    var _d = react_1.useState([]), promotedDocumenten = _d[0], updatePromotedDocumenten = _d[1];
    var _e = react_1.useState([]), promotedBeoordelen = _e[0], updatePromotedBeoordelen = _e[1];
    var _f = react_1.useState(false), loading = _f[0], updateLoader = _f[1];
    var client = react_hooks_1.useApolloClient();
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateLoader(true);
                    return [4 /*yield*/, client.mutate({
                            mutation: queries_1.SAVE_SO_PROMOTED_FIELDS,
                            variables: {
                                promoted: {
                                    promotedAlgemene: promotedAlgemene,
                                    promotedWorkOrder: promotedWorkOrder,
                                    promotedDocumenten: promotedDocumenten,
                                    promotedBeoordelen: promotedBeoordelen
                                }
                            }
                        })];
                case 1:
                    _a.sent();
                    updateLoader(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        client
            .query({
            query: queries_1.FETCH_SO_PROMOTED_FIELDS
        })
            .then(function (_a) {
            var data = _a.data;
            var promoted = get_1.default(data, "currentUser.soDetailsPromotedFields");
            if (promoted) {
                updatePromotedAlgemene(get_1.default(promoted, "promotedAlgemene", []));
                updatePromotedWorkOrder(get_1.default(promoted, "promotedWorkOrder", []));
                updatePromotedDocumenten(get_1.default(promoted, "promotedDocumenten", []));
                updatePromotedBeoordelen(get_1.default(promoted, "promotedBeoordelen", []));
            }
        })
            .catch(function (e) {
            console.log(e);
        });
    }, []);
    return (react_1.default.createElement(SlideModal_1.default, { headerProps: {
            onClose: history.goBack,
            title: "Promoot velden",
            titleStyle: { color: components_1.Colors.fiord }
        }, noPadding: true },
        loading && (react_1.default.createElement(Styled.LoaderWrapper, null,
            react_1.default.createElement(Loader_1.default, null))),
        react_1.default.createElement(Styled.PromotedModalWrapper, null,
            react_1.default.createElement(Algemene_1.default, { promotedGroup: promotedAlgemene, updatePromotedGroup: updatePromotedAlgemene }),
            react_1.default.createElement(Workorder_1.default, { promotedGroup: promotedWorkOrder, updatePromotedGroup: updatePromotedWorkOrder }),
            react_1.default.createElement(Documenten_1.default, { promotedGroup: promotedDocumenten, updatePromotedGroup: updatePromotedDocumenten }),
            react_1.default.createElement(Beoordelen_1.default, { promotedGroup: promotedBeoordelen, updatePromotedGroup: updatePromotedBeoordelen }),
            react_1.default.createElement(styles_1.PromotedFieldModalSubmitButton, { isSecond: true, onClick: handleSave }, "Opslaan"))));
});
//# sourceMappingURL=index.js.map