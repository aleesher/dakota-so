"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var constants_1 = require("../../pages/home/constants");
exports.FETCH_WORK_ORDERS = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query fetchWorkOrders(\n    $skip: Int = 0,\n    $perPage: Int = ", ",\n    $where: WorkOrderWhereInput,\n    $orderBy: WorkOrderOrderByInput\n  ) {\n    workOrders(\n      skip: $skip\n      first: $perPage\n      where: $where\n      orderBy: $orderBy\n    ) {\n      startTime\n      starDate\n      moment {\n        status\n        code\n      }\n      serviceOrder {\n        status\n      }\n      updateByUser {\n        id\n        roofingCompanyEmployee {\n\t\t\t\t\tfirstName\n          lastName\n        }\n      }\n    }\n    workOrdersConnection(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"], ["\n  query fetchWorkOrders(\n    $skip: Int = 0,\n    $perPage: Int = ", ",\n    $where: WorkOrderWhereInput,\n    $orderBy: WorkOrderOrderByInput\n  ) {\n    workOrders(\n      skip: $skip\n      first: $perPage\n      where: $where\n      orderBy: $orderBy\n    ) {\n      startTime\n      starDate\n      moment {\n        status\n        code\n      }\n      serviceOrder {\n        status\n      }\n      updateByUser {\n        id\n        roofingCompanyEmployee {\n\t\t\t\t\tfirstName\n          lastName\n        }\n      }\n    }\n    workOrdersConnection(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n"])), constants_1.PER_PAGE);
var templateObject_1;
//# sourceMappingURL=queries.js.map