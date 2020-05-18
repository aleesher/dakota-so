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
var get_1 = __importDefault(require("lodash/get"));
var omit_1 = __importDefault(require("lodash/omit"));
var reduce_1 = __importDefault(require("lodash/reduce"));
var queries_1 = require("./queries");
var constants_1 = require("./constants");
exports.generateWorkorderNumber = function (onChange) {
    var digitLen = 100000000;
    var uniqueId = (Math.floor(Math.random() * digitLen) + digitLen)
        .toString()
        .substring(1);
    var result = "WO" + uniqueId;
    if (onChange) {
        return onChange(result);
    }
    return result;
};
exports.convertFieldsToNumber = function (data) {
    return reduce_1.default(data, function (acc, val, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = constants_1.NUMBER_FIELDS.includes(key) ? parseInt(val, 10) : val, _a)));
    }, {});
};
exports.generateUpdateMutation = function (wo, data) { return ({
    mutation: queries_1.UPDATE_WORK_ORDER,
    variables: {
        data: data,
        where: { id: get_1.default(wo, "id") }
    }
}); };
exports.getDefaultFormValues = function (wos) {
    var description = get_1.default(wos, "[0].serviceOrder.description") || " ";
    return __assign(__assign({}, omit_1.default(constants_1.FORM_VALUES, constants_1.BOOLEAN_FIELDS)), { code: exports.generateWorkorderNumber(), "serviceOrder.description": description, "moment.code": constants_1.DEFAULT_LOG_MOMENT_CODE, "moment.status": constants_1.DEFAULT_LOG_MOMENT_STATUS });
};
//# sourceMappingURL=helpers.js.map