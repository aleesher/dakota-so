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
var moment_1 = __importDefault(require("moment"));
var ActionMenu_1 = __importDefault(require("dakota-portal/dist/components/ActionMenu"));
var modal_1 = __importDefault(require("./modal"));
var icons = __importStar(require("./icons"));
var Styles = __importStar(require("./styles"));
var mock_1 = require("./modal/mock");
var DocumentCard = function (_a) {
    var fileName = _a.fileName, creationDate = _a.creationDate, updationDate = _a.updationDate, titleName = _a.titleName, titleLabel = _a.titleLabel, format = _a.format, actions = _a.actions, link = _a.link, match = _a.match;
    var Icon = icons[format];
    return (React.createElement(React.Fragment, null,
        React.createElement(Styles.DocumentContent, null,
            React.createElement(Styles.modalWrapper, { to: link },
                React.createElement(Styles.DocumentLeft, null,
                    React.createElement(Styles.DocumentImg, null,
                        React.createElement(Icon, null)),
                    React.createElement(Styles.DocumentDetails, null,
                        React.createElement("p", { className: "filename" }, fileName),
                        React.createElement("p", { className: "filecreated" },
                            "Creation date: ",
                            moment_1.default(creationDate).format("DD-MM-YYYY")),
                        React.createElement("p", { className: "fileupdated" },
                            "Updated: ",
                            moment_1.default(updationDate).format("DD-MM-YYYY")),
                        React.createElement("p", { className: "filetime" }, "Updated Time: 12:00")))),
            React.createElement(Styles.DocumentRight, null,
                React.createElement(Styles.modalWrapper, { to: link },
                    React.createElement("p", { className: "titleName" }, titleName),
                    React.createElement("p", { className: "titleLabel" }, titleLabel)),
                React.createElement(Styles.DocumentFormWrapper, null,
                    React.createElement(Styles.FormSelect, { classNamePrefix: "type-select", options: mock_1.DOC_CATEGORY_OPTIONS, value: { value: "Met factuur mee", label: "Met factuur mee" } })),
                React.createElement(Styles.MenuCard, null,
                    React.createElement(ActionMenu_1.default, { alwaysVisible: true, alignMenu: "left", items: actions })))),
        React.createElement(Styles.ModalBox, { component: function () { return (React.createElement(modal_1.default, { fileName: fileName, creationDate: creationDate, updationDate: updationDate, format: format })); }, path: link, parentPath: match.url, variant: "wide", outDelay: 300 })));
};
exports.default = DocumentCard;
//# sourceMappingURL=DocumentCard.js.map