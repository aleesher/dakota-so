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
var pickBy_1 = __importDefault(require("lodash/pickBy"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var isObject_1 = __importDefault(require("lodash/isObject"));
var identity_1 = __importDefault(require("lodash/identity"));
var reduce_1 = __importDefault(require("lodash/reduce"));
var moment_1 = __importDefault(require("moment"));
var models_1 = require("./models");
var constants_1 = require("./constants");
exports.omitEmptyFields = function (value) { return pickBy_1.default(value, identity_1.default); };
exports.generateAddressQuery = function (formikValues) {
    if (formikValues === void 0) { formikValues = {}; }
    var address = get_1.default(formikValues, "address", {}) || {};
    return { where: exports.omitEmptyFields(address) };
};
exports.collectAddressCodes = function (addresses) {
    return addresses.map(function (address) { return get_1.default(address, "code"); });
};
exports.generateSOQuery = function (addresses, orderType) {
    if (addresses === void 0) { addresses = []; }
    var codes = exports.collectAddressCodes(addresses);
    return {
        where: {
            serviceLocationCode_in: codes,
            orderType: orderType,
            creationDate: moment_1.default()
        }
    };
};
exports.generateCreationMutation = function (mutation, data, field, connectedFields) {
    var variables = {};
    if (field) {
        variables = {
            data: exports.omitEmptyFields(get_1.default(data, field))
        };
    }
    if (!isEmpty_1.default(connectedFields)) {
        variables = {
            data: reduce_1.default(data, function (acc, val, key) {
                var _a, _b;
                return !val
                    ? acc
                    : !connectedFields.includes(key)
                        ? __assign(__assign({}, acc), (_a = {}, _a[key] = isObject_1.default(val)
                            ? get_1.default(val, "value")
                            : constants_1.NUMBER_FIELDS.includes(key)
                                ? parseInt(val, 10)
                                : val, _a)) : __assign(__assign({}, acc), (_b = {}, _b[key] = { connect: { code: val } }, _b));
            }, {})
        };
    }
    return {
        mutation: mutation,
        variables: variables,
        error: isEmpty_1.default(get_1.default(variables, "data"))
    };
};
exports.generateGlobalId = function (timestamp, formikValues) {
    var year = moment_1.default()
        .year()
        .toString()
        .substring(2, 4);
    var bronType = models_1.BronTypes[get_1.default(formikValues, "serviceType.value")] || models_1.BronTypes.REGIE;
    var customer = models_1.CustomerTypes[get_1.default(formikValues, "customer.company.name")] || "CN";
    return "D" + bronType + customer + year + timestamp;
};
//# sourceMappingURL=helpers.js.map