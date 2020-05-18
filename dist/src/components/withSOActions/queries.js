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
exports.SEARCH_BAG_NUMBER = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query bagNumbers($where: BagNumberWhereInput) {\n    bagNumbers(where: $where) {\n      id\n      street\n      postalCode\n      houseNumber\n      houseLetter\n      houseNumberAddition\n      city\n    }\n  }\n"], ["\n  query bagNumbers($where: BagNumberWhereInput) {\n    bagNumbers(where: $where) {\n      id\n      street\n      postalCode\n      houseNumber\n      houseLetter\n      houseNumberAddition\n      city\n    }\n  }\n"])));
exports.SEARCH_ADDRESS = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query addresses($where: AddressWhereInput) {\n    addresses(where: $where, first: 1) {\n      id\n      code\n      street\n      postalCode\n      houseNumber\n      houseLetter\n      city\n      subComplex {\n        code\n        leakagesTrend\n        warrantyDocument\n        infoContactPerson {\n          id\n          code\n          phone\n          mobilePhone\n          email\n          city\n          subscription\n          firstContact {\n            id\n            firstName\n            lastName\n            code\n          }\n          company {\n            id\n            code\n          }\n        }\n        complex {\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query addresses($where: AddressWhereInput) {\n    addresses(where: $where, first: 1) {\n      id\n      code\n      street\n      postalCode\n      houseNumber\n      houseLetter\n      city\n      subComplex {\n        code\n        leakagesTrend\n        warrantyDocument\n        infoContactPerson {\n          id\n          code\n          phone\n          mobilePhone\n          email\n          city\n          subscription\n          firstContact {\n            id\n            firstName\n            lastName\n            code\n          }\n          company {\n            id\n            code\n          }\n        }\n        complex {\n          code\n        }\n      }\n    }\n  }\n"])));
exports.SEARCH_SERVICE_ORDER = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query serviceOrders($where: ServiceOrderWhereInput) {\n    serviceOrders(where: $where) {\n      id\n    }\n  }\n"], ["\n  query serviceOrders($where: ServiceOrderWhereInput) {\n    serviceOrders(where: $where) {\n      id\n    }\n  }\n"])));
exports.LEAKAGES_PER_THREE_MONTHS = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query leakagesPerThreeMonths($where: ServiceOrderWhereInput) {\n    leakagesPerThreeMonths(where: $where)\n  }\n"], ["\n  query leakagesPerThreeMonths($where: ServiceOrderWhereInput) {\n    leakagesPerThreeMonths(where: $where)\n  }\n"])));
exports.FETCH_CUSTOMERS = graphql_tag_1.default(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query fetchCustomers(\n    $where: CompanyWhereInput\n    $skip: Int = 0,\n    $perPage: Int = ", ",\n    $orderBy: CompanyOrderByInput\n  ) {\n    companies(\n      skip: $skip\n      first: $perPage\n      where: $where\n      orderBy: $orderBy\n    ) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n    companiesConnection(\n      where: $where\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"], ["\n  query fetchCustomers(\n    $where: CompanyWhereInput\n    $skip: Int = 0,\n    $perPage: Int = ", ",\n    $orderBy: CompanyOrderByInput\n  ) {\n    companies(\n      skip: $skip\n      first: $perPage\n      where: $where\n      orderBy: $orderBy\n    ) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n    companiesConnection(\n      where: $where\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"])), 7);
exports.FETCH_SO_CUSTOMER = graphql_tag_1.default(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  query fetchCustomer($where: CompanyWhereUniqueInput!) {\n    company(where: $where) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n  }\n"], ["\n  query fetchCustomer($where: CompanyWhereUniqueInput!) {\n    company(where: $where) {\n      id\n      code\n      phone\n      email\n      name\n      customer\n      address\n    }\n  }\n"])));
exports.CREATE_SERVICE_ORDER = graphql_tag_1.default(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  mutation createServiceOrder($data: ServiceOrderCreateInput!) {\n    createServiceOrder(data: $data) {\n      id\n      code\n      globalId\n      conceptId\n      createdAt\n    }\n  }\n"], ["\n  mutation createServiceOrder($data: ServiceOrderCreateInput!) {\n    createServiceOrder(data: $data) {\n      id\n      code\n      globalId\n      conceptId\n      createdAt\n    }\n  }\n"])));
exports.CREATE_ADDRESS = graphql_tag_1.default(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  mutation createAddress($data: AddressCreateInput!) {\n    createAddress(data: $data) {\n      code\n    }\n  }\n"], ["\n  mutation createAddress($data: AddressCreateInput!) {\n    createAddress(data: $data) {\n      code\n    }\n  }\n"])));
exports.CREATE_REPORTER = graphql_tag_1.default(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  mutation createReporter($data: ReporterCreateInput!) {\n    createReporter(data: $data) {\n      code\n    }\n  }\n"], ["\n  mutation createReporter($data: ReporterCreateInput!) {\n    createReporter(data: $data) {\n      code\n    }\n  }\n"])));
exports.UPDATE_SERVICE_ORDER = graphql_tag_1.default(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  mutation updateServiceOrder(\n    $data: ServiceOrderUpdateInput!\n    $where: ServiceOrderWhereUniqueInput!\n  ) {\n    updateServiceOrder(data: $data, where: $where) {\n      id\n      code\n      createdAt\n    }\n  }\n"], ["\n  mutation updateServiceOrder(\n    $data: ServiceOrderUpdateInput!\n    $where: ServiceOrderWhereUniqueInput!\n  ) {\n    updateServiceOrder(data: $data, where: $where) {\n      id\n      code\n      createdAt\n    }\n  }\n"])));
exports.UPDATE_REPORTER = graphql_tag_1.default(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  mutation updateReporter(\n    $data: ReporterUpdateInput!\n    $where: ReporterWhereUniqueInput!\n  ) {\n    updateReporter(data: $data, where: $where) {\n      id\n    }\n  }\n"], ["\n  mutation updateReporter(\n    $data: ReporterUpdateInput!\n    $where: ReporterWhereUniqueInput!\n  ) {\n    updateReporter(data: $data, where: $where) {\n      id\n    }\n  }\n"])));
exports.FETCH_ADDRESS = graphql_tag_1.default(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  query fetchAddress($where: AddressWhereUniqueInput!) {\n    address(where: $where) {\n      id\n      code\n      street\n      postalCode\n      houseNumber\n      houseLetter\n      city\n      subComplex {\n        code\n        leakagesTrend\n        warrantyDocument\n        infoContactPerson {\n          id\n          code\n          phone\n          mobilePhone\n          email\n          city\n          subscription\n          firstContact {\n            id\n            firstName\n            lastName\n            code\n          }\n          company {\n            id\n            code\n          }\n        }\n        complex {\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query fetchAddress($where: AddressWhereUniqueInput!) {\n    address(where: $where) {\n      id\n      code\n      street\n      postalCode\n      houseNumber\n      houseLetter\n      city\n      subComplex {\n        code\n        leakagesTrend\n        warrantyDocument\n        infoContactPerson {\n          id\n          code\n          phone\n          mobilePhone\n          email\n          city\n          subscription\n          firstContact {\n            id\n            firstName\n            lastName\n            code\n          }\n          company {\n            id\n            code\n          }\n        }\n        complex {\n          code\n        }\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=queries.js.map