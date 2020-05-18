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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var omit_1 = __importDefault(require("lodash/omit"));
exports.getSOCommentCreationMutation = function (mutation, comment) { return ({
    mutation: mutation,
    variables: {
        data: __assign(__assign({}, omit_1.default(comment, ["author", "id", "soCode", "isTemporary", "soId"])), { serviceOrder: {
                connect: comment.soCode
                    ? { code: comment.soCode }
                    : { id: comment.soId }
            } })
    }
}); };
exports.getSOCommentEditMutation = function (mutation, _a) {
    var id = _a.id, authorCode = _a.authorCode, text = _a.text, date = _a.date;
    return ({
        mutation: mutation,
        variables: {
            data: {
                authorCode: authorCode,
                text: text,
                date: date
            },
            where: {
                id: id
            }
        }
    });
};
//# sourceMappingURL=helpers.js.map