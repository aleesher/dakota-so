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
var react_1 = __importStar(require("react"));
var react_pdf_1 = require("react-pdf");
var react_router_1 = require("react-router");
var Reply_1 = __importDefault(require("@material-ui/icons/Reply"));
var DeleteRounded_1 = __importDefault(require("@material-ui/icons/DeleteRounded"));
var GetAppRounded_1 = __importDefault(require("@material-ui/icons/GetAppRounded"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var mock_1 = require("./mock");
var styles_1 = require("./styles");
var Styles = __importStar(require("../styles"));
var icons = __importStar(require("../icons"));
var DocumentModal = function (_a) {
    var fileName = _a.fileName, creationDate = _a.creationDate, updationDate = _a.updationDate, format = _a.format, history = _a.history;
    var _b = react_1.useState(1), pageNumber = _b[0], setpageNumber = _b[1];
    var _c = react_1.useState(1), numPages = _c[0], setnumPages = _c[1];
    var Icon = icons[format];
    return (react_1.default.createElement(styles_1.Documentmodals, null,
        react_1.default.createElement(Styles.DocumentContent, null,
            react_1.default.createElement(Styles.DocumentLeft, null,
                react_1.default.createElement(Styles.DocumentImg, null,
                    react_1.default.createElement(Icon, null)),
                react_1.default.createElement(Styles.DocumentDetails, null,
                    react_1.default.createElement("p", { className: "filename" }, "Factuur regels"),
                    react_1.default.createElement("p", { className: "filecreated" }, "Creation date: 10-1-2020"),
                    react_1.default.createElement("p", { className: "fileupdated" }, "Updated: 11-1-2020"),
                    react_1.default.createElement("p", { className: "filecreated" }, "Updated Time: 12:00"))),
            react_1.default.createElement(Styles.DocumentRight, null,
                react_1.default.createElement(styles_1.ActionWrapper, null,
                    react_1.default.createElement(styles_1.ActionWrappers, null,
                        react_1.default.createElement(Reply_1.default, { className: "replyIcon" }),
                        react_1.default.createElement(styles_1.ActionMenu, null, "Delen")),
                    react_1.default.createElement(styles_1.ActionWrappers, null,
                        react_1.default.createElement(DeleteRounded_1.default, { className: "replyIcon" }),
                        react_1.default.createElement(styles_1.ActionMenu, null, "Verwijderen")),
                    react_1.default.createElement(styles_1.ActionWrappers, null,
                        react_1.default.createElement(GetAppRounded_1.default, { className: "replyIcon" }),
                        react_1.default.createElement(styles_1.ActionMenu, null, "Downloaden"))),
                react_1.default.createElement(Styles.DocumentFormWrapper, null,
                    react_1.default.createElement(styles_1.ActionLabel, null,
                        react_1.default.createElement("p", { className: "ActionTitle" }, "Actie"),
                        react_1.default.createElement(Styles.FormSelect, { classNamePrefix: "type-select", options: mock_1.DOC_CATEGORY_OPTIONS, value: { value: "Met factuur mee", label: "Met factuur mee" } }))),
                react_1.default.createElement(Styles.DocumentClose, null,
                    react_1.default.createElement(Close_1.default, { onClick: history.goBack })))),
        react_1.default.createElement(Styles.DocumentContainer, null,
            react_1.default.createElement(Styles.DocumentPreview, null,
                react_1.default.createElement(react_pdf_1.Document, { file: "https://res.cloudinary.com/sleemkeen/image/upload/v1582007970/pdf-test.pdf", onLoadSuccess: function () { return null; } },
                    react_1.default.createElement(react_pdf_1.Page, { pageNumber: pageNumber }))))));
};
exports.default = react_router_1.withRouter(DocumentModal);
//# sourceMappingURL=DocumentModal.js.map