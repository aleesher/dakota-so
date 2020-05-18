"use strict";
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
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var components_1 = require("../../../../../../components");
var models_1 = require("../../../../../../components/withSOComments/models");
var styles_1 = require("../../styles");
var ProblemCard_1 = __importDefault(require("./ProblemCard"));
var ProblemSection = function (_a) {
    var onFetchComments = _a.onFetchComments, onAddComment = _a.onAddComment, onEditComment = _a.onEditComment, onDeleteComment = _a.onDeleteComment, _b = _a.problemComments, problemComments = _b === void 0 ? [] : _b, _c = _a.internalComments, internalComments = _c === void 0 ? [] : _c, user = _a.user, formikBag = _a.formikBag;
    React.useEffect(function () {
        onFetchComments(get_1.default(formikBag, "values.id"));
    }, []);
    return (React.createElement(styles_1.AddressCard, null,
        React.createElement(styles_1.AddressHeader, null,
            React.createElement(styles_1.AddressTitle, null, "Probleem omschrijving"),
            React.createElement(styles_1.AddresAction, null, "Verberg")),
        React.createElement(Grid_1.default, { container: true },
            React.createElement(Grid_1.default, { item: true, xs: 12 },
                React.createElement(ProblemCard_1.default, { title: "Omschrijving melder", comments: problemComments, onAddComment: onAddComment, user: user, type: models_1.CommentCardTypes.Problem_Text, values: get_1.default(formikBag, "values", {}), onDeleteComment: onDeleteComment, onEditComment: onEditComment }),
                React.createElement(ProblemCard_1.default, { title: "Interne tekst", comments: internalComments, onAddComment: onAddComment, user: user, type: models_1.CommentCardTypes.Internal_Text, values: get_1.default(formikBag, "values", {}), onDeleteComment: onDeleteComment, onEditComment: onEditComment })))));
};
exports.default = components_1.withSOComments()(ProblemSection);
//# sourceMappingURL=index.js.map