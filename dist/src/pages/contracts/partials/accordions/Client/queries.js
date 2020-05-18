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
exports.UPDATE_CLIENT_DATA = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation updateClientData(\n    $where: ServiceContractWhereUniqueInput!\n    $data: ServiceContractUpdateInput!\n  ) {\n    updateServiceContract(where: $where, data: $data) {\n      id\n    }\n  }\n"], ["\n  mutation updateClientData(\n    $where: ServiceContractWhereUniqueInput!\n    $data: ServiceContractUpdateInput!\n  ) {\n    updateServiceContract(where: $where, data: $data) {\n      id\n    }\n  }\n"])));
exports.GET_CLIENT_DATA = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query getClientData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      customerCode\n      name\n      name2\n      address\n      postcode\n      city\n    }\n  }\n"], ["\n  query getClientData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      customerCode\n      name\n      name2\n      address\n      postcode\n      city\n    }\n  }\n"])));
exports.FETCH_CUSTOMERS = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query fetchCustomers(\n    $where: CompanyWhereInput\n    $skip: Int = 0,\n    $perPage: Int = ", ",\n    $orderBy: CompanyOrderByInput\n  ) {\n    companies(\n      skip: $skip\n      first: $perPage\n      where: $where\n      orderBy: $orderBy\n    ) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n    companiesConnection(\n      where: $where\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"], ["\n  query fetchCustomers(\n    $where: CompanyWhereInput\n    $skip: Int = 0,\n    $perPage: Int = ", ",\n    $orderBy: CompanyOrderByInput\n  ) {\n    companies(\n      skip: $skip\n      first: $perPage\n      where: $where\n      orderBy: $orderBy\n    ) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n    companiesConnection(\n      where: $where\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"])), 7);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=queries.js.map