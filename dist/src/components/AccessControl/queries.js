"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_boost_1 = require("apollo-boost");
exports.CURRENT_USER_QUERY = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    currentUser {\n      id\n      roles {\n        role {\n          name\n        }\n      }\n      soDetailsPromotedFields\n      companyEmployee {\n        id\n        code\n        countryRegionCode\n        firstName\n        lastName\n        company {\n          id\n          code\n          phone\n          email\n          name\n          customer\n          address\n        }\n      }\n    }\n  }\n"], ["\n  {\n    currentUser {\n      id\n      roles {\n        role {\n          name\n        }\n      }\n      soDetailsPromotedFields\n      companyEmployee {\n        id\n        code\n        countryRegionCode\n        firstName\n        lastName\n        company {\n          id\n          code\n          phone\n          email\n          name\n          customer\n          address\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=queries.js.map