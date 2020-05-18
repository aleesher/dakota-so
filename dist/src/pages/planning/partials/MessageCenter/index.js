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
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var mock_1 = require("../../mock");
var settings_1 = require("../../provider/settings");
var PinIcon_1 = __importDefault(require("../icons/PinIcon"));
var styles_1 = require("./styles");
var MessageCenter = function () {
    var _a = settings_1.useSettingsState(), uiPreferences = _a.uiPreferences, messageCenter = _a.messageCenter;
    var pinMessages = settings_1.useSettingsDispatch().pinMessages;
    var getColor = react_1.useCallback(function (type) {
        return type === "Warning"
            ? uiPreferences.messageCenter.warningColor
            : uiPreferences.messageCenter.deadlineExpiredColor;
    }, [
        uiPreferences.messageCenter.warningColor,
        uiPreferences.messageCenter.deadlineExpiredColor
    ]);
    return (react_1.default.createElement(styles_1.MessageCenterWrapper, null,
        react_1.default.createElement(styles_1.MessageCenterTitle, null, "Messages"),
        react_1.default.createElement(styles_1.PinButton, { onClick: pinMessages },
            react_1.default.createElement(PinIcon_1.default, { color: messageCenter.isPinned ? Colors_1.default.columbiaBlue : "white" })),
        mock_1.MESSAGES.map(function (message) { return (react_1.default.createElement(styles_1.Message, { key: message.id },
            react_1.default.createElement(styles_1.MessageType, { color: getColor(message.type) }),
            react_1.default.createElement(styles_1.MessageText, null, message.text),
            react_1.default.createElement(styles_1.HideMessageButton, null, "markeren als gelezen"))); })));
};
exports.default = MessageCenter;
//# sourceMappingURL=index.js.map