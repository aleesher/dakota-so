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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var reduce_1 = __importDefault(require("lodash/reduce"));
var isString_1 = __importDefault(require("lodash/isString"));
var toNumber_1 = __importDefault(require("lodash/toNumber"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var models_1 = require("./models");
var constants_1 = require("./constants");
exports.generateServicerOrderNo = function (data) { return null; };
exports.generateCurrentDate = function () {
    return moment_1.default().format("DD MMMM YYYY hh:mm:ss");
};
exports.formatLimitedText = function (value, maxLength) {
    return maxLength && isString_1.default(value) ? value.substring(0, maxLength) : value;
};
exports.getFormFields = function (fields, soType) {
    return fields
        .filter(function (f) {
        if (!f.isMajorField && (!f.soType || !f.soType.includes(soType))) {
            return false;
        }
        return true;
    })
        .map(function (f) {
        if (f.selectSoType && f.selectSoType.includes(soType)) {
            return __assign(__assign({}, f), { type: models_1.CardItemTypes.select });
        }
        return f;
    });
};
var isPostalCode = function (val) {
    var regex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
    return regex.test(val);
};
exports.parseSearchValue = function (val, fields) {
    if (!val) {
        return [];
    }
    var splitted = val.split(" ");
    var toIgnore = [];
    var result = [];
    var toIgnoreFields = [];
    splitted.map(function (str, i) {
        var isNumber = !isNaN(parseInt(str, 10));
        if (toIgnore.includes(str)) {
            return;
        }
        fields.map(function (field) {
            var _a;
            var val;
            if (isNumber && (field === "houseNumber" || field === "postalCode")) {
                if (field === "postalCode") {
                    if (isPostalCode(str + " " + splitted[i + 1])) {
                        toIgnore.push(splitted[i + 1]);
                        toIgnoreFields.push(field);
                        result = result.filter(function (val) { return Object.keys(val)[0] !== field + "_contains"; });
                        val = { postalCode_contains: str + " " + splitted[i + 1] };
                    }
                    else if (str.length >= 4) {
                        if (!toIgnoreFields.includes(field)) {
                            val = { postalCode_contains: str };
                        }
                    }
                }
                else if (str.length < 4) {
                    val = { houseNumber: toNumber_1.default(str) };
                }
            }
            else if (!isNumber &&
                field !== "houseNumber" &&
                field !== "postalCode") {
                if (!toIgnoreFields.includes(field)) {
                    val = (_a = {}, _a[field + "_contains"] = str, _a);
                }
            }
            if (val) {
                result.push(val);
            }
        });
    });
    var OR = [];
    result = reduce_1.default(result, function (acc, val, i) {
        var key = Object.keys(val)[0];
        if (key.includes("houseNumber") || key.includes("postalCode")) {
            return __spreadArrays(acc, [val]);
        }
        else {
            if (val) {
                OR.push(val);
            }
            return acc;
        }
    }, []);
    if (!isEmpty_1.default(OR)) {
        result = __spreadArrays(result, [{ OR: OR }]);
    }
    return result;
};
exports.getDefaultServiceType = function (orderType) {
    if ([
        models_1.SOTypes.LEAKAGE,
        models_1.SOTypes.DIRECTION_JOB,
        models_1.SOTypes.CORRECTIVE_MAINTENANCE
    ].includes(orderType)) {
        return constants_1.SERVICE_TYPES[0].value;
    }
    return constants_1.SERVICE_TYPES[1].value;
};
//# sourceMappingURL=helpers.js.map