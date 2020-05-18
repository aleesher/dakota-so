"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Reply_1 = __importDefault(require("@material-ui/icons/Reply"));
var DeleteRounded_1 = __importDefault(require("@material-ui/icons/DeleteRounded"));
var GetAppRounded_1 = __importDefault(require("@material-ui/icons/GetAppRounded"));
exports.ACTIONS = [
    {
        title: "Document delen",
        icon: react_1.default.createElement(Reply_1.default, { className: "replyIcon" }),
        onClick: function () { return console.log("clicked View"); }
    },
    {
        title: "Document verwijderen",
        icon: react_1.default.createElement(DeleteRounded_1.default, { className: "replyIcon" }),
        onClick: function () { return console.log("clicked Edit"); }
    },
    {
        title: "Document downloaden",
        icon: react_1.default.createElement(GetAppRounded_1.default, { className: "replyIcon" }),
        onClick: function () { return console.log("clicked Delete"); }
    }
];
//# sourceMappingURL=constants.js.map