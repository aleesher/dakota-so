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
exports.GET_CUSTOMER_CODE = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getClientData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      contactPersonCode\n      contactPersonCodes\n      customerCode\n    }\n  }\n"], ["\n  query getClientData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      contactPersonCode\n      contactPersonCodes\n      customerCode\n    }\n  }\n"])));
exports.GET_CUSTOMER_DATA = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query fetchCustomer($where: CompanyWhereUniqueInput!) {\n    company(where: $where) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n  }\n"], ["\n  query fetchCustomer($where: CompanyWhereUniqueInput!) {\n    company(where: $where) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n  }\n"])));
exports.GET_CONTACT_PERSONS = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query fetchContactPersons($where: CompanyEmployeeWhereInput!) {\n    companyEmployees(where: $where) {\n      code\n      firstName\n      lastName\n      email\n      phone\n    }\n  }\n"], ["\n  query fetchContactPersons($where: CompanyEmployeeWhereInput!) {\n    companyEmployees(where: $where) {\n      code\n      firstName\n      lastName\n      email\n      phone\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=queries.js.map