"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_1 = __importDefault(require("dakota-portal/dist/apollo"));
var API_GATEWAY_URL = process.env.API_GATEWAY_URL ||
    "https://dakota2-api-dev.secondcompany.nl/graphql";
var apolloClient = apollo_1.default(API_GATEWAY_URL, true, true);
exports.default = apolloClient;
//# sourceMappingURL=apollo.js.map