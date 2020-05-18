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
exports.GET_TERMS_DATA = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getTermsData($where: ServiceContractTermWhereInput!) {\n    serviceContractTerms(where: $where) {\n      id\n      invoiceFrom\n      nextInvoicingDate\n      progressPercent\n      description\n      invoicePeriod\n      invoiceDirectly\n    }\n  }\n"], ["\n  query getTermsData($where: ServiceContractTermWhereInput!) {\n    serviceContractTerms(where: $where) {\n      id\n      invoiceFrom\n      nextInvoicingDate\n      progressPercent\n      description\n      invoicePeriod\n      invoiceDirectly\n    }\n  }\n"])));
exports.UPDATE_TERMS_DATA = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation updateTermsData(\n    $where: ServiceContractTermWhereUniqueInput!\n    $data: ServiceContractTermUpdateInput!\n  ) {\n    updateServiceContractTerm(where: $where, data: $data) {\n      id\n    }\n  }\n"], ["\n  mutation updateTermsData(\n    $where: ServiceContractTermWhereUniqueInput!\n    $data: ServiceContractTermUpdateInput!\n  ) {\n    updateServiceContractTerm(where: $where, data: $data) {\n      id\n    }\n  }\n"])));
exports.CREATE_TERM = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation createTerm($data: ServiceContractTermCreateInput!) {\n    createServiceContractTerm(data: $data) {\n      id\n      invoiceFrom\n      nextInvoicingDate\n      progressPercent\n      description\n      invoicePeriod\n      invoiceDirectly\n    }\n  }\n"], ["\n  mutation createTerm($data: ServiceContractTermCreateInput!) {\n    createServiceContractTerm(data: $data) {\n      id\n      invoiceFrom\n      nextInvoicingDate\n      progressPercent\n      description\n      invoicePeriod\n      invoiceDirectly\n    }\n  }\n"])));
exports.DELETE_TERM = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  mutation deleteTerm($where: ServiceContractTermWhereUniqueInput!) {\n    deleteServiceContractTerm(where: $where) {\n      id\n    }\n  }\n"], ["\n  mutation deleteTerm($where: ServiceContractTermWhereUniqueInput!) {\n    deleteServiceContractTerm(where: $where) {\n      id\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=queries.js.map