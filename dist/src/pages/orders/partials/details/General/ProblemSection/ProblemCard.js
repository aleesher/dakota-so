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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var uniqueId_1 = __importDefault(require("lodash/uniqueId"));
var components_1 = require("../../../../../../components");
var helpers_1 = require("../../../../../serviceOrder/helpers");
var styles_1 = require("../../styles");
var styles_2 = require("../../../../../serviceOrder/styles");
var ProblemCommentCard = function (_a) {
    var comments = _a.comments, title = _a.title, onAddComment = _a.onAddComment, user = _a.user, type = _a.type, values = _a.values, onDeleteComment = _a.onDeleteComment, onEditComment = _a.onEditComment;
    var _b = React.useState(false), showForm = _b[0], setShowForm = _b[1];
    var _c = React.useState(), selectedComment = _c[0], setSelectedComment = _c[1];
    var editor = React.useRef(null);
    React.useEffect(function () {
        if (selectedComment) {
            var text = selectedComment.text;
            var rteEditor = editor.current;
            rteEditor.setValue(text);
        }
    }, [selectedComment]);
    var handleAddComment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var rteEditor, firstName, lastName, newComment, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    rteEditor = editor.current;
                    if (!(selectedComment && !!selectedComment.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, onEditComment(__assign(__assign({}, selectedComment), { text: rteEditor.getValue() }), user)];
                case 1:
                    _a.sent();
                    setSelectedComment(null);
                    setShowForm(false);
                    return [2 /*return*/];
                case 2:
                    if (!(comments.length < 10 && rteEditor.hasValue())) return [3 /*break*/, 4];
                    firstName = get_1.default(user, "companyEmployee.firstName");
                    lastName = get_1.default(user, "companyEmployee.lastName");
                    newComment = {
                        text: rteEditor.getValue(),
                        author: firstName + " " + lastName,
                        date: helpers_1.generateCurrentDate(),
                        orderCommentType: type,
                        id: uniqueId_1.default(type),
                        isTemporary: !get_1.default(values, "soId")
                    };
                    return [4 /*yield*/, onAddComment(newComment, user, values)];
                case 3:
                    _a.sent();
                    setShowForm(false);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error(err_1.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleSelectComment = function (comment) {
        setShowForm(true);
        setSelectedComment(comment);
    };
    return (React.createElement(styles_1.ProblemParent, null,
        React.createElement(styles_1.ProblemWrapper, null,
            React.createElement(styles_1.ProblemTitle, null,
                title,
                React.createElement(styles_2.AddIcon, { type: showForm ? "opened" : "closed", onClick: function () { return setShowForm(!showForm); } })),
            showForm && (React.createElement(styles_2.CardForm, { xs: 12 },
                React.createElement(components_1.TextEditor, { ref: editor }),
                React.createElement(styles_2.ButtonWrapper, { marginTop: 20 },
                    React.createElement(styles_2.TransparentButton, { onClick: function () { return setShowForm(false); } }, "Annuleren"),
                    React.createElement(styles_2.FilledButton, { onClick: handleAddComment }, "Toevoegen")))),
            comments.map(function (_a) {
                var id = _a.id, author = _a.author, date = _a.date, text = _a.text, rest = __rest(_a, ["id", "author", "date", "text"]);
                return (React.createElement(styles_1.ProblemCard, null,
                    React.createElement(styles_1.ProblemHead, null,
                        React.createElement(styles_1.ProblemText, null,
                            get_1.default(author, "firstName")
                                ? get_1.default(author, "firstName") + " " + get_1.default(author, "lastName")
                                : author,
                            ", ",
                            date,
                            " uur")),
                    React.createElement(styles_1.ProblemContent, null,
                        React.createElement(styles_1.ProblemText, { dangerouslySetInnerHTML: { __html: text } })),
                    React.createElement(styles_1.ProblemDelete, { onClick: function () { return onDeleteComment(id); } },
                        React.createElement(styles_1.ProblemIcon, null)),
                    React.createElement(styles_1.ProblemEdit, { onClick: function () {
                            return handleSelectComment(__assign({ id: id, author: author, date: date, text: text }, rest));
                        } },
                        React.createElement(styles_1.ProblemEditIcon, null))));
            }))));
};
exports.default = ProblemCommentCard;
//# sourceMappingURL=ProblemCard.js.map