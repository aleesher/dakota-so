"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_components_1 = require("@apollo/react-components");
var queries_1 = require("./queries");
var roleAccess = function (_a) {
    var allowedRoles = _a.allowedRoles, renderByDefault = _a.renderByDefault, children = _a.children;
    return (react_1.default.createElement(react_components_1.Query, { query: queries_1.CURRENT_USER_QUERY, fetchPolicy: "no-cache" }, function (_a) {
        var data = _a.data;
        if (data && data.currentUser && data.currentUser.roles) {
            var roles = data.currentUser.roles;
            for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
                var userRole = roles_1[_i];
                if (userRole.role &&
                    userRole.role.name &&
                    allowedRoles.includes(userRole.role.name)) {
                    return children;
                }
            }
        }
        return renderByDefault || null;
    }));
};
exports.default = roleAccess;
//# sourceMappingURL=AccessControl.js.map