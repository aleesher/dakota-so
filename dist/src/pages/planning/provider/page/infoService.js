"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@apollo/react-hooks");
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var queries_1 = require("../../queries");
function extractFields(response) {
    var data = get_1.default(response, "data.__type.fields", []);
    var filtered = data.filter(function (d) {
        // remove relation fields
        if (d.type.kind === "OBJECT") {
            return false;
        }
        // remove boolean fields
        if (d.type.name === "Boolean") {
            return false;
        }
        // remove system fields
        if (["id", "isBlocked", "createdAt", "updatedAt"].includes(d.name)) {
            return false;
        }
        return true;
    });
    var fields = filtered.map(function (d) {
        var type = d.type.name || d.type.ofType.name;
        // todo: temp trick
        if (["startDate", "endDate"].includes(d.name)) {
            type = "Date";
        }
        else if (["startTime", "endTime"].includes(d.name)) {
            type = "Time";
        }
        return {
            key: d.name,
            type: type
        };
    });
    return fields;
}
var useInfoService = function () {
    var client = react_hooks_1.useApolloClient();
    return react_1.useMemo(function () {
        var fetchFields = function () {
            return client
                .query({
                query: queries_1.GET_WORK_ORDER_FIELDS
            })
                .then(extractFields);
        };
        return {
            fetchFields: fetchFields
        };
    }, []);
};
exports.default = useInfoService;
//# sourceMappingURL=infoService.js.map