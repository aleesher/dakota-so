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
exports.FETCH_CONTRACTS_STATUSES = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getServiceContracts($where: ServiceContractWhereInput!) {\n    serviceContracts(where: $where, orderBy: orderDate_DESC) {\n      orderDate\n      status\n    }\n  }\n"], ["\n  query getServiceContracts($where: ServiceContractWhereInput!) {\n    serviceContracts(where: $where, orderBy: orderDate_DESC) {\n      orderDate\n      status\n    }\n  }\n"])));
exports.FETCH_APPOINTMENTS_STATUSES = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query getServiceAppointments($where: ServiceAppointmentWhereInput!) {\n    serviceAppointments(where: $where, orderBy: orderDate_DESC) {\n      orderDate\n      status\n    }\n  }\n"], ["\n  query getServiceAppointments($where: ServiceAppointmentWhereInput!) {\n    serviceAppointments(where: $where, orderBy: orderDate_DESC) {\n      orderDate\n      status\n    }\n  }\n"])));
exports.FETCH_CONTRACTS = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query serviceContracts {\n    serviceContracts {\n      id\n    }\n  }\n"], ["\n  query serviceContracts {\n    serviceContracts {\n      id\n    }\n  }\n"])));
exports.FETCH_SAVED_FILTER_GROUPS = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query savedFilters {\n    currentUser {\n      savedSCFilterGroups\n    }\n  }\n"], ["\n  query savedFilters {\n    currentUser {\n      savedSCFilterGroups\n    }\n  }\n"])));
exports.SAVE_FILTER_GROUPS = graphql_tag_1.default(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  mutation saveFilterGroups($filterGroups: Json) {\n    saveSCFilterGroups(filterGroups: $filterGroups)\n  }\n"], ["\n  mutation saveFilterGroups($filterGroups: Json) {\n    saveSCFilterGroups(filterGroups: $filterGroups)\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=queries.js.map