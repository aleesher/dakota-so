"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _get = require("lodash/get");
var _isEmpty = require("lodash/isEmpty");
var _fill = require("lodash/fill");
var _reduce = require("lodash/reduce");
var exportHelper = {
    onExportClick: function (query, page, variables, columns, client, totalItems) {
        if (totalItems === void 0) { totalItems = 0; }
        return function (callback, params) { return __awaiter(void 0, void 0, void 0, function () {
            var fileName, type, pageName, filters, searchText, exportData, toSkip_1, chunkNumber, chunks, queryData, allData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = params.fileName, type = params.type, pageName = params.pageName, filters = params.filters, searchText = params.searchText;
                        exportData = [];
                        if (!(totalItems > 10000)) return [3 /*break*/, 2];
                        toSkip_1 = 5000;
                        chunkNumber = Math.ceil(totalItems / toSkip_1);
                        chunks = _fill(new Array(chunkNumber), 0, 0, chunkNumber);
                        return [4 /*yield*/, Promise.all(chunks.map(function (_, i) {
                                return client.query({
                                    query: query,
                                    variables: __assign(__assign({}, variables), { perPage: toSkip_1, skip: toSkip_1 * i })
                                });
                            }))];
                    case 1:
                        queryData = _a.sent();
                        exportData = _reduce(queryData, function (acc, result) { return __spreadArrays(acc, _get(result, "data." + page, [])); }, []);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, client.query({
                            query: query,
                            variables: __assign(__assign({}, variables), { perPage: totalItems, skip: 0 })
                        })];
                    case 3:
                        allData = (_a.sent()).data;
                        exportData = _get(allData, page, []);
                        _a.label = 4;
                    case 4:
                        type === "excel"
                            ? callback(columns, exportData, fileName, filters, searchText)
                            : callback(columns, exportData, fileName, filters, searchText, pageName);
                        return [2 /*return*/];
                }
            });
        }); };
    },
    separateFilters: function (filters, searchText) {
        return _isEmpty(searchText) ? filters : filters.AND[0];
    }
};
exports.default = exportHelper;
//# sourceMappingURL=exportHelper.js.map