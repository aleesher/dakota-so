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
exports.GET_BILLING_DATA = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getBillingData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      invoiceType\n      installmentType\n      serviceIndexMethod\n      installmentsBasedOnProgress\n      maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate\n      initialSalesAmount\n      totalCost\n      currencyCode\n      billToCustomerNoContr\n      billToNameContract\n      billToAddressContract\n      billToPostCodeContract\n      billToCityContract\n    }\n  }\n"], ["\n  query getBillingData($where: ServiceContractWhereUniqueInput!) {\n    serviceContract(where: $where) {\n      invoiceType\n      installmentType\n      serviceIndexMethod\n      installmentsBasedOnProgress\n      maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate\n      initialSalesAmount\n      totalCost\n      currencyCode\n      billToCustomerNoContr\n      billToNameContract\n      billToAddressContract\n      billToPostCodeContract\n      billToCityContract\n    }\n  }\n"])));
exports.UPDATE_BILLING_DATA = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation updateClientData(\n    $where: ServiceContractWhereUniqueInput!\n    $data: ServiceContractUpdateInput!\n  ) {\n    updateServiceContract(where: $where, data: $data) {\n      id\n    }\n  }\n"], ["\n  mutation updateClientData(\n    $where: ServiceContractWhereUniqueInput!\n    $data: ServiceContractUpdateInput!\n  ) {\n    updateServiceContract(where: $where, data: $data) {\n      id\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=queries.js.map