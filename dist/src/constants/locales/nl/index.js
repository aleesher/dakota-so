"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialInspections_1 = __importDefault(require("./initialInspections"));
var serviceOrder_1 = __importDefault(require("./serviceOrder"));
var serviceContracts_1 = __importDefault(require("./serviceContracts"));
var workOrder_1 = __importDefault(require("./workOrder"));
var common_1 = __importDefault(require("./common"));
exports.default = {
    InitialInspections: initialInspections_1.default,
    ServiceOrder: serviceOrder_1.default,
    ServiceContract: serviceContracts_1.default,
    Common: common_1.default,
    ServiceContracts: serviceContracts_1.default,
    WorkOrder: workOrder_1.default
};
//# sourceMappingURL=index.js.map