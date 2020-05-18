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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_rte_1 = __importDefault(require("react-rte"));
var constants_1 = require("./constants");
var styles_1 = require("./styles");
var TextEditor = /** @class */ (function (_super) {
    __extends(TextEditor, _super);
    function TextEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: react_rte_1.default.createEmptyValue()
        };
        _this.onChange = function (value) {
            var onChange = _this.props.onChange;
            _this.setState({ value: value });
            if (onChange) {
                onChange(value.toString("html"));
            }
        };
        _this.hasValue = function () {
            var value = _this.state.value;
            return value
                .getEditorState()
                .getCurrentContent()
                .hasText();
        };
        _this.getValue = function () {
            var value = _this.state.value;
            return value.toString("html");
        };
        _this.setValue = function (value) {
            _this.setState({
                value: react_rte_1.default.createValueFromString(value, "html")
            });
        };
        return _this;
    }
    TextEditor.prototype.render = function () {
        return (react_1.default.createElement(styles_1.TextEditorWrapper, null,
            react_1.default.createElement(react_rte_1.default, { value: this.state.value, onChange: this.onChange, toolbarConfig: constants_1.TOOLBAR_CONFIG, editorClassName: "rte-editor", className: "rte-container-announcement" })));
    };
    return TextEditor;
}(react_1.default.Component));
exports.default = TextEditor;
//# sourceMappingURL=index.js.map