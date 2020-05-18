"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = __importDefault(require("react-dnd-html5-backend"));
var CustomDragLayer_1 = __importDefault(require("./CustomDragLayer"));
var PlanningPageContent_1 = __importDefault(require("./PlanningPageContent"));
var provider_1 = require("./provider");
var Planning = function () { return (react_1.default.createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.default },
    react_1.default.createElement(provider_1.PlanningContextProvider, null,
        react_1.default.createElement(CustomDragLayer_1.default, null),
        react_1.default.createElement(PlanningPageContent_1.default, null)))); };
exports.default = Planning;
//# sourceMappingURL=index.js.map