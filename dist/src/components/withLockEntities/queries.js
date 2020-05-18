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
exports.ON_LOCK_SUB = function (entityName) { return graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    subscription onLockSub {\n        ", "_LOCK {\n          key \n          data {\n              serviceContractsIds\n              serviceOrdersIds\n              workOrdersIds\n          }\n        }\n    }\n"], ["\n    subscription onLockSub {\n        ", "_LOCK {\n          key \n          data {\n              serviceContractsIds\n              serviceOrdersIds\n              workOrdersIds\n          }\n        }\n    }\n"])), entityName); };
exports.ON_UNLOCK_SUB = function (entityName) { return graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    subscription onUnlockSub {\n      ", "_UNLOCK {\n          key \n          data {\n              serviceContractsIds\n              serviceOrdersIds\n              workOrdersIds\n          }\n        }\n    }\n"], ["\n    subscription onUnlockSub {\n      ", "_UNLOCK {\n          key \n          data {\n              serviceContractsIds\n              serviceOrdersIds\n              workOrdersIds\n          }\n        }\n    }\n"])), entityName); };
exports.ON_LOCK_EXPORT_SUB = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  subscription onLockExportSub {\n    workOrder_LOCK_EXPORT {\n      key\n      data {\n        workOrdersIds\n        exportBlockedWOIds\n      }\n    }\n  }\n"], ["\n  subscription onLockExportSub {\n    workOrder_LOCK_EXPORT {\n      key\n      data {\n        workOrdersIds\n        exportBlockedWOIds\n      }\n    }\n  }\n"])));
exports.ON_UNLOCK_EXPORT_SUB = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  subscription onUnlockExportSub {\n    workOrder_UNLOCK_EXPORT {\n      key\n      data {\n        workOrdersIds\n        exportBlockedWOIds\n      }\n    }\n  }\n"], ["\n  subscription onUnlockExportSub {\n    workOrder_UNLOCK_EXPORT {\n      key\n      data {\n        workOrdersIds\n        exportBlockedWOIds\n      }\n    }\n  }\n"])));
exports.ON_LOCK_MUTATION = graphql_tag_1.default(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  mutation lockEntity(\n    $data: LockedEntityInput!\n    $where: LockedEntityWhereInput!\n  ) {\n    lockEntityRecord(data: $data, where: $where) {\n      id\n      isLocked\n      lockedBy\n    }\n  }\n"], ["\n  mutation lockEntity(\n    $data: LockedEntityInput!\n    $where: LockedEntityWhereInput!\n  ) {\n    lockEntityRecord(data: $data, where: $where) {\n      id\n      isLocked\n      lockedBy\n    }\n  }\n"])));
exports.ON_UNLOCK_MUTATION = graphql_tag_1.default(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  mutation unlockEntity(\n    $data: LockedEntityInput!\n    $where: LockedEntityWhereInput!\n  ) {\n    unlockEntityRecord(data: $data, where: $where) {\n      id\n      isLocked\n      lockedBy\n    }\n  }\n"], ["\n  mutation unlockEntity(\n    $data: LockedEntityInput!\n    $where: LockedEntityWhereInput!\n  ) {\n    unlockEntityRecord(data: $data, where: $where) {\n      id\n      isLocked\n      lockedBy\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=queries.js.map