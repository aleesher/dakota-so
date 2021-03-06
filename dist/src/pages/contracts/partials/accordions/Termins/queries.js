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
exports.GET_TERMINS_DATA = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getTerminsData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      code\n      description\n      roofCity\n      roofAddress\n      workingHours\n      contactName\n      phoneNo\n      email\n      status\n      yourReference\n      outsourced\n      contactPersonCode\n      lastExecutedBy\n    }\n  }\n"], ["\n  query getTerminsData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      code\n      description\n      roofCity\n      roofAddress\n      workingHours\n      contactName\n      phoneNo\n      email\n      status\n      yourReference\n      outsourced\n      contactPersonCode\n      lastExecutedBy\n    }\n  }\n"])));
exports.UPDATE_TERMINS_DATA = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation updateTerminsData(\n    $where: ServiceContractWhereUniqueInput!\n    $data: ServiceContractUpdateInput!\n  ) {\n    updateServiceContract(where: $where, data: $data) {\n      id\n    }\n  }\n"], ["\n  mutation updateTerminsData(\n    $where: ServiceContractWhereUniqueInput!\n    $data: ServiceContractUpdateInput!\n  ) {\n    updateServiceContract(where: $where, data: $data) {\n      id\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=queries.js.map