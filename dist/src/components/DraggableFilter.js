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
var styled_components_1 = __importDefault(require("styled-components"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var react_router_dom_1 = require("react-router-dom");
var SideFilterPage_1 = require("dakota-portal/dist/components/SideFilter/SideFilterPage");
var FiltersActionsContext_1 = __importDefault(require("../helpers/filters/FiltersActionsContext"));
var DnD_1 = __importDefault(require("../helpers/DnD"));
var StatBox_1 = __importDefault(require("./StatBox"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var PlusOne_1 = __importDefault(require("@material-ui/icons/PlusOne"));
var KeyboardArrowRight_1 = __importDefault(require("@material-ui/icons/KeyboardArrowRight"));
var RoundIconWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: ", ";\n  cursor: pointer;\n  background-color: white;\n  width: 32px;\n  height: 32px;\n  border-radius: 18px;\n  border: 2px solid ", ";\n"], ["\n  position: absolute;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: ", ";\n  cursor: pointer;\n  background-color: white;\n  width: 32px;\n  height: 32px;\n  border-radius: 18px;\n  border: 2px solid ", ";\n"])), function (_a) {
    var color = _a.color;
    return color || "black";
}, function (_a) {
    var color = _a.color;
    return color || "black";
});
var DraggableFilter = function (_a) {
    var filter = _a.filter, index = _a.index, groupId = _a.groupId, history = _a.history, match = _a.match;
    var _b = react_1.useState(false), showButtons = _b[0], setShowButtons = _b[1];
    var setFilterExpanded = react_1.default.useContext(SideFilterPage_1.SideFilterContext).setFilterExpanded;
    var _c = react_1.useContext(FiltersActionsContext_1.default), actions = _c.actions, selectedFilter = _c.selectedFilter;
    var url = match.url;
    return (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { draggableId: filter.id, index: index }, function (provided, snapshot) { return (react_1.default.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: __assign({ position: "relative" }, DnD_1.default.getItemStyle(snapshot.isDragging, provided.draggableProps.style)), onDoubleClick: function () {
            actions.filter.select(filter.id, groupId);
            setFilterExpanded(true);
        }, onMouseEnter: function () { return setShowButtons(true); }, onMouseLeave: function () { return setShowButtons(false); } }),
        showButtons && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(RoundIconWrapper, { style: { top: 0, left: 0 }, color: filter.color, onClick: function () {
                    actions.filter.clone(filter.id, groupId);
                    setFilterExpanded(true);
                } },
                react_1.default.createElement(PlusOne_1.default, null)),
            react_1.default.createElement(RoundIconWrapper, { style: { top: 0, right: 0 }, color: filter.color, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (filter.id === selectedFilter.id) {
                                    setFilterExpanded(false);
                                }
                                return [4 /*yield*/, actions.filter.delete(filter.id, groupId)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); } },
                react_1.default.createElement(Delete_1.default, null)),
            react_1.default.createElement(RoundIconWrapper, { style: { top: 40, right: 0 }, color: filter.color, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (filter.id === selectedFilter.id) {
                                    setFilterExpanded(false);
                                }
                                return [4 /*yield*/, actions.filter.redirect(filter, history, url)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); } },
                react_1.default.createElement(KeyboardArrowRight_1.default, null)))),
        react_1.default.createElement(StatBox_1.default, { progress: filter.amount, title: filter.name, color: filter.color }))); }));
};
exports.default = react_router_dom_1.withRouter(DraggableFilter);
var templateObject_1;
//# sourceMappingURL=DraggableFilter.js.map