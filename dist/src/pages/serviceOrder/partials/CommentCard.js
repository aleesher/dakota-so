"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var uniqueId_1 = __importDefault(require("lodash/uniqueId"));
var TextEditor_1 = __importDefault(require("../../../components/TextEditor"));
var helpers_1 = require("../helpers");
var styles_1 = require("../styles");
exports.default = (function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, type = _a.type, user = _a.user, values = _a.values, onDeleteComment = _a.onDeleteComment, onAddComment = _a.onAddComment, comments = _a.comments;
    var _c = react_1.default.useState(false), showForm = _c[0], setShowForm = _c[1];
    var _d = react_1.default.useState(-1), truncatedIdx = _d[0], setTruncatedIdx = _d[1];
    var editor = react_1.default.useRef(null);
    var handleDeleteComment = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            onDeleteComment(id);
            return [2 /*return*/];
        });
    }); };
    var handleAddComment = function () {
        var rteEditor = editor.current;
        if (comments.length < 10 && rteEditor.hasValue()) {
            var firstName = get_1.default(user, "companyEmployee.firstName");
            var lastName = get_1.default(user, "companyEmployee.lastName");
            var newComment = {
                text: rteEditor.getValue(),
                author: firstName + " " + lastName,
                date: helpers_1.generateCurrentDate(),
                orderCommentType: type,
                id: uniqueId_1.default(type),
                isTemporary: !get_1.default(values, "code")
            };
            onAddComment(newComment, user, values);
            setShowForm(false);
        }
    };
    var handleToggleTruncated = function (idx) {
        var i = idx === truncatedIdx ? -1 : idx;
        setTruncatedIdx(i);
    };
    return (react_1.default.createElement(styles_1.FormCard, null,
        react_1.default.createElement(styles_1.CardTitle, null,
            title,
            react_1.default.createElement(styles_1.AddIcon, { type: showForm ? "opened" : "closed", onClick: function () { return setShowForm(!showForm); } })),
        react_1.default.createElement(styles_1.CardContent, null,
            showForm && (react_1.default.createElement(styles_1.CardForm, { xs: 12 },
                react_1.default.createElement(TextEditor_1.default, { ref: editor }),
                react_1.default.createElement(styles_1.ButtonWrapper, { marginTop: 20 },
                    react_1.default.createElement(styles_1.TransparentButton, { onClick: function () { return setShowForm(false); } }, "Annuleren"),
                    react_1.default.createElement(styles_1.FilledButton, { onClick: handleAddComment }, "Toevoegen")))),
            comments.map(function (_a, i) {
                var text = _a.text, author = _a.author, date = _a.date, id = _a.id;
                return (react_1.default.createElement(styles_1.CommentWrapper, { key: "comment_" + title + "_" + i },
                    react_1.default.createElement(styles_1.CommentInfo, null,
                        get_1.default(author, "firstName")
                            ? get_1.default(author, "firstName") + " " + get_1.default(author, "lastName")
                            : author,
                        ", ",
                        date,
                        " uur"),
                    react_1.default.createElement(styles_1.CommentText, { onClick: function () { return handleToggleTruncated(i); }, dangerouslySetInnerHTML: { __html: text }, isTruncated: !(i === truncatedIdx) }),
                    react_1.default.createElement(styles_1.CommentRemoveIcon, { onClick: function () { return handleDeleteComment(id); } })));
            }))));
});
//# sourceMappingURL=CommentCard.js.map