"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mock_1 = require("../../mock");
var settings_1 = require("../../provider/settings");
var MessageIcon_1 = __importDefault(require("../icons/MessageIcon"));
var styles_1 = require("./styles");
var ShowMessagesButton = function () {
    var showMessages = settings_1.useSettingsDispatch().showMessages;
    return (react_1.default.createElement(styles_1.ShowMessagesButtonWrapper, { onClick: showMessages },
        react_1.default.createElement(styles_1.AmountOfNewMessages, null, mock_1.MESSAGES.length),
        react_1.default.createElement(MessageIcon_1.default, null)));
};
exports.default = ShowMessagesButton;
//# sourceMappingURL=ShowMessagesButton.js.map