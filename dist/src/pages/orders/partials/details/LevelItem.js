"use strict";
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
var Remove_1 = __importDefault(require("@material-ui/icons/Remove"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var Collapse_1 = __importDefault(require("@material-ui/core/Collapse"));
var Styled = __importStar(require("../styles"));
var ExtendedCard_1 = require("../../../../components/ExtendedCard");
var ExpandedDetails_1 = __importDefault(require("../../../../components/ExpandedDetails"));
var LevelItem = function (_a) {
    var children = _a.children, title = _a.title, _b = _a.full, full = _b === void 0 ? false : _b, expanded = _a.expanded, onExpandTriggered = _a.onExpandTriggered, hasSwitch = _a.hasSwitch, linkId = _a.linkId, linkURL = _a.linkURL, editView = _a.editView, onEdit = _a.onEdit, triggerEdit = _a.triggerEdit, tb = _a.tb, count = _a.count;
    var _c = React.useState(true), activeTab = _c[0], switchTab = _c[1];
    return (React.createElement(Styled.LevelCard, { full: full },
        React.createElement(Styled.LevelHeader, null,
            React.createElement(Styled.RightItem, null,
                React.createElement(ExtendedCard_1.Title, { count: count }, title),
                linkId && React.createElement(Styled.ItemLink, { to: linkURL }, linkId),
                count && React.createElement(Styled.TitleCount, null, count)),
            React.createElement(Styled.RightItem, null,
                hasSwitch && expanded && (React.createElement(Styled.ViewSwitchContainer, null,
                    React.createElement(Styled.ViewSwitchButton, { active: activeTab, onClick: function () { return switchTab(false); } }, "Current"),
                    React.createElement(Styled.ViewSwitchButton, { active: !activeTab, onClick: function () { return switchTab(true); } }, "History"))),
                expanded && !onEdit && (React.createElement(React.Fragment, null,
                    React.createElement(Styled.CollapseLink, { onClick: function () { return onExpandTriggered(false); } },
                        React.createElement(Remove_1.default, null)),
                    !onEdit && React.createElement(Styled.EditIcon, { onClick: function () { return triggerEdit(true); } }))),
                !expanded && !onEdit && (React.createElement(Styled.CollapseLink, { onClick: function () { return onExpandTriggered(true); } },
                    React.createElement(Add_1.default, null))))),
        React.createElement(Collapse_1.default, { in: !onEdit && expanded },
            React.createElement(Styled.LevelData, { tb: tb }, children),
            React.createElement(ExpandedDetails_1.default, { moreText: "Alles zien", lessText: "Lat minder zien" })),
        React.createElement(Collapse_1.default, { in: onEdit },
            React.createElement(Styled.LevelData, { edit: true }, editView))));
};
exports.default = LevelItem;
//# sourceMappingURL=LevelItem.js.map