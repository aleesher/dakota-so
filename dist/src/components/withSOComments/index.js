"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var difference_1 = __importDefault(require("lodash/difference"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var apollo_1 = __importDefault(require("../../../dev/apollo"));
var models_1 = require("./models");
var helpers_1 = require("./helpers");
var queries_1 = require("./queries");
var helpers_2 = require("../../pages/serviceOrder/helpers");
function withSOComments() {
    return function (WrappedComponent) {
        var WrappedClass = /** @class */ (function (_super) {
            __extends(WrappedClass, _super);
            function WrappedClass() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    isLoading: false,
                    comments: []
                };
                _this.setIsLoading = function (isLoading) {
                    _this.setState({ isLoading: isLoading });
                };
                _this.handleGetComments = function (comments) {
                    _this.setState({ comments: comments });
                };
                _this.handleFetchComments = function (soId) { return __awaiter(_this, void 0, void 0, function () {
                    var result, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, apollo_1.default.query({
                                        query: queries_1.FETCH_SO_COMMENTS,
                                        variables: { where: { serviceOrder: { id: soId } } }
                                    })];
                            case 1:
                                result = _a.sent();
                                this.setState({
                                    comments: get_1.default(result, "data.serviceOrderComments")
                                });
                                return [3 /*break*/, 3];
                            case 2:
                                err_1 = _a.sent();
                                console.error(err_1.message);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                _this.handleAddComments = function (soCode, authorCode) { return __awaiter(_this, void 0, void 0, function () {
                    var comments_1, newComments_1, result, createdComments_1, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                this.setIsLoading(true);
                                comments_1 = this.state.comments;
                                newComments_1 = comments_1.filter(function (c) { return c.isTemporary; });
                                if (!!isEmpty_1.default(newComments_1)) return [3 /*break*/, 2];
                                return [4 /*yield*/, Promise.all(__spreadArrays(newComments_1.map(function (comment) {
                                        return apollo_1.default.mutate(helpers_1.getSOCommentCreationMutation(queries_1.CREATE_SO_COMMENT, __assign(__assign({}, comment), { soCode: soCode,
                                            authorCode: authorCode })));
                                    })))];
                            case 1:
                                result = _a.sent();
                                createdComments_1 = result.map(function (r) {
                                    return get_1.default(r, "data.createServiceOrderComment");
                                });
                                this.setState(function () { return ({
                                    comments: __spreadArrays(difference_1.default(comments_1, newComments_1), createdComments_1),
                                    isLoading: false
                                }); });
                                return [3 /*break*/, 3];
                            case 2:
                                this.setIsLoading(false);
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_2 = _a.sent();
                                this.setIsLoading(false);
                                console.warn("err", err_2);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); };
                _this.handleAddComment = function (comment, currentUser, formikValues) { return __awaiter(_this, void 0, void 0, function () {
                    var newComment_1, soCode, soId, authorCode, result, err_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                this.setIsLoading(true);
                                newComment_1 = comment;
                                soCode = get_1.default(formikValues, "code");
                                soId = get_1.default(formikValues, "soId");
                                authorCode = get_1.default(currentUser, "companyEmployee.code", "");
                                if (!(!!soCode || !!soId)) return [3 /*break*/, 2];
                                return [4 /*yield*/, apollo_1.default.mutate(helpers_1.getSOCommentCreationMutation(queries_1.CREATE_SO_COMMENT, __assign(__assign({}, comment), { soCode: soCode,
                                        soId: soId,
                                        authorCode: authorCode })))];
                            case 1:
                                result = _a.sent();
                                newComment_1 = __assign(__assign({}, get_1.default(result, "data.createServiceOrderComment")), { isTemporary: false });
                                _a.label = 2;
                            case 2:
                                this.setState(function (_a) {
                                    var comments = _a.comments;
                                    return ({
                                        comments: __spreadArrays(comments, [newComment_1]),
                                        isLoading: false
                                    });
                                });
                                return [3 /*break*/, 4];
                            case 3:
                                err_3 = _a.sent();
                                this.setIsLoading(false);
                                console.warn("err", err_3);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                _this.handleDeleteComment = function (id) { return __awaiter(_this, void 0, void 0, function () {
                    var comments, comment, err_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                this.setIsLoading(true);
                                comments = this.state.comments;
                                comment = comments.find(function (c) { return c.id === id; });
                                if (!!comment.isTemporary) return [3 /*break*/, 2];
                                return [4 /*yield*/, apollo_1.default.mutate({
                                        mutation: queries_1.DELETE_SO_COMMENT,
                                        variables: { where: { id: id } }
                                    })];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                this.setState({
                                    isLoading: false,
                                    comments: comments.filter(function (c) { return c.id !== id; })
                                });
                                return [3 /*break*/, 4];
                            case 3:
                                err_4 = _a.sent();
                                this.setIsLoading(false);
                                console.warn("err", err_4);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                _this.handleEditComment = function (comment, currentUser) { return __awaiter(_this, void 0, void 0, function () {
                    var id_1, text_1, isTemporary, newDate_1, authorCode, result, updatedComment_1, err_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                this.setIsLoading(true);
                                id_1 = comment.id, text_1 = comment.text, isTemporary = comment.isTemporary;
                                newDate_1 = helpers_2.generateCurrentDate();
                                if (isTemporary) {
                                    this.setState(function (_a) {
                                        var comments = _a.comments;
                                        return ({
                                            comments: comments.map(function (c) {
                                                return c.id === id_1 ? __assign(__assign({}, c), { text: text_1, date: newDate_1 }) : c;
                                            }),
                                            isLoading: false
                                        });
                                    });
                                    return [2 /*return*/];
                                }
                                authorCode = get_1.default(currentUser, "companyEmployee.code", "");
                                return [4 /*yield*/, apollo_1.default.mutate(helpers_1.getSOCommentEditMutation(queries_1.UPDATE_SO_COMMENT, {
                                        authorCode: authorCode,
                                        id: id_1,
                                        text: text_1,
                                        date: newDate_1
                                    }))];
                            case 1:
                                result = _a.sent();
                                updatedComment_1 = __assign(__assign({}, get_1.default(result, "data.updateServiceOrderComment")), { isTemporary: false });
                                this.setState(function (_a) {
                                    var comments = _a.comments;
                                    return ({
                                        comments: comments.map(function (c) { return (c.id === id_1 ? updatedComment_1 : c); }),
                                        isLoading: false
                                    });
                                });
                                return [3 /*break*/, 3];
                            case 2:
                                err_5 = _a.sent();
                                this.setIsLoading(false);
                                console.warn("err", err_5);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return _this;
            }
            WrappedClass.prototype.render = function () {
                var _a = this.state, _b = _a.comments, comments = _b === void 0 ? [] : _b, isLoading = _a.isLoading;
                var problemComments = comments.filter(function (c) { return c.orderCommentType === models_1.CommentCardTypes.Problem_Text; });
                var internalComments = difference_1.default(comments, problemComments);
                var props = __assign(__assign({}, this.props), { isLoading: isLoading,
                    problemComments: problemComments,
                    internalComments: internalComments, onDeleteComment: this.handleDeleteComment, onAddComment: this.handleAddComment, onAddComments: this.handleAddComments, onFetchComments: this.handleFetchComments, onEditComment: this.handleEditComment });
                return react_1.default.createElement(WrappedComponent, __assign({}, props));
            };
            return WrappedClass;
        }(react_1.default.PureComponent));
        return WrappedClass;
    };
}
exports.default = withSOComments;
//# sourceMappingURL=index.js.map