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
Object.defineProperty(exports, "__esModule", { value: true });
var react_notifications_component_1 = require("react-notifications-component");
var constants_1 = require("./constants");
exports.default = {
    addNotification: function (config) {
        var notification = __assign(__assign({}, constants_1.DEFAULT_NOTIFICATION), config);
        if (notification.message) {
            react_notifications_component_1.store.addNotification(notification);
        }
    }
};
//# sourceMappingURL=index.js.map