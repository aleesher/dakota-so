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
exports.FETCH_SAVED_FILTER_GROUPS = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query savedFilters {\n    currentUser {\n      id\n      savedFilterGroups\n    }\n  }\n"], ["\n  query savedFilters {\n    currentUser {\n      id\n      savedFilterGroups\n    }\n  }\n"])));
exports.SAVE_FILTER_GROUPS = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation saveFilterGroups($filterGroups: Json) {\n    saveFilterGroups(filterGroups: $filterGroups)\n  }\n"], ["\n  mutation saveFilterGroups($filterGroups: Json) {\n    saveFilterGroups(filterGroups: $filterGroups)\n  }\n"])));
exports.FETCH_SERVICE_ORDERS_BY_CUSTOMERS = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query amountOfServiceOrdersByCustomers(\n    $where: ServiceOrderWhereInput\n    $limit: Int\n  ) {\n    amountOfServiceOrdersByCustomers(where: $where, limit: $limit)\n  }\n"], ["\n  query amountOfServiceOrdersByCustomers(\n    $where: ServiceOrderWhereInput\n    $limit: Int\n  ) {\n    amountOfServiceOrdersByCustomers(where: $where, limit: $limit)\n  }\n"])));
exports.FETCH_SERVICE_ORDERS_BY_EMPLOYEES = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query amountOfServiceOrdersByEmployees(\n    $where: ServiceOrderWhereInput\n    $limit: Int\n  ) {\n    amountOfServiceOrdersByEmployees(where: $where, limit: $limit)\n  }\n"], ["\n  query amountOfServiceOrdersByEmployees(\n    $where: ServiceOrderWhereInput\n    $limit: Int\n  ) {\n    amountOfServiceOrdersByEmployees(where: $where, limit: $limit)\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=queries.js.map