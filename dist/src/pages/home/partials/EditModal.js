"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Checkbox_1 = __importDefault(require("dakota-portal/dist/components/Checkbox"));
var SearchInput_1 = __importDefault(require("./SearchInput"));
var constants_1 = require("../constants");
var Styled = __importStar(require("../styles"));
var EditModal = function (_a) {
    var onChange = _a.onChange, checkedPropsState = _a.checkedPropsState, history = _a.history;
    var parsed = constants_1.parseURL(location.search.slice(1));
    var type = parsed.type;
    if (!type) {
        return null;
    }
    return (react_1.default.createElement(Styled.ModalWrapper, null,
        react_1.default.createElement(Styled.ModalHeader, null,
            react_1.default.createElement("div", null,
                " ",
                react_1.default.createElement(Styled.ModelHeadTagline, null, "Instellingen tabel"),
                react_1.default.createElement(Styled.ModelHeadTitle, null,
                    "Serviceorder per ",
                    parsed.type)),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Styled.CloseIcon, { onClick: history.goBack }))),
        react_1.default.createElement(Styled.ModalBody, { container: true, justify: "space-between", alignItems: "center" },
            react_1.default.createElement(Styled.BaseRow, { container: true, item: true, direction: "row", xs: 12, alignItems: "flex-start", justify: "flex-start" },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 3 },
                    react_1.default.createElement(Styled.ItemTitle, null, "Toon kolommen")),
                react_1.default.createElement(Styled.CheckBoxContainer, { container: true, item: true, xs: 9, alignItems: "flex-start", justify: "flex-start" },
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(Styled.StyledFormControlLabel, { name: "name", control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: checkedPropsState[type].name, onChange: function () {
                                    onChange("name", type);
                                } }), label: "Naam", classes: { label: "control-label" } })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(Styled.StyledFormControlLabel, { name: "Open", control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: checkedPropsState[type].Open, onChange: function () {
                                    onChange("Open", type);
                                } }), label: "Open", classes: { label: "control-label" } })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(Styled.StyledFormControlLabel, { name: "Process", control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: checkedPropsState[type].In_Process, onChange: function () { return onChange("In_Process", type); } }), label: "Werkwijze", classes: { label: "control-label" } })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(Styled.StyledFormControlLabel, { name: "Technical", control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: checkedPropsState[type].Technical_Finished, onChange: function () { return onChange("Technical_Finished", type); } }), label: "Technisch", classes: { label: "control-label" } })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(Styled.StyledFormControlLabel, { name: "administrative", control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: checkedPropsState[type].Administrative_Finished, onChange: function () { return onChange("Administrative_Finished", type); } }), label: "Administratief", classes: { label: "control-label" } })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(Styled.StyledFormControlLabel, { name: "finished", control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: checkedPropsState[type].Finished, onChange: function () { return onChange("Finished", type); } }), label: "Afgewerkt", classes: { label: "control-label" } })),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(Styled.StyledFormControlLabel, { name: "cancelled", control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: checkedPropsState[type].Cancelled, onChange: function () { return onChange("Cancelled", type); } }), label: "Geannuleerd", classes: { label: "control-label" } })))),
            react_1.default.createElement(Styled.BaseRow, { container: true, item: true, direction: "row", xs: 12 },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 3 },
                    react_1.default.createElement(Styled.ItemTitle, null, "Type")),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 9 },
                    react_1.default.createElement(Styled.StyledSelect, { options: [
                            { value: "klant", label: "Klant" },
                            { value: "medewerker", label: "Medewerker" }
                        ], classNamePrefix: "type-select", width: 150, height: 60 }))),
            react_1.default.createElement(Styled.BaseRow, { container: true, item: true, direction: "row", xs: 12 },
                react_1.default.createElement(Grid_1.default, { xs: 3, item: true },
                    react_1.default.createElement(Styled.ItemTitle, null, "Toon rijen")),
                react_1.default.createElement(Styled.RowItem, { xs: 9, container: true, item: true, alignItems: "flex-start", justify: "space-between" },
                    react_1.default.createElement(Styled.ARow, { container: true, item: true, direction: "row", xs: 12, justify: "space-between", alignItems: "center" },
                        react_1.default.createElement(Styled.CPName, { item: true, xs: 6 }, "Pro Delta Real Estate Service BV"),
                        react_1.default.createElement(Styled.CPAction, { item: true, xs: 2 }, "verbergen")),
                    react_1.default.createElement(Styled.ARow, { container: true, item: true, direction: "row", xs: 12, justify: "space-between", alignItems: "center" },
                        react_1.default.createElement(Styled.CPName, { item: true, xs: 6 }, "Pro Delta Real Estate Service BV"),
                        react_1.default.createElement(Styled.CPAction, { item: true, xs: 2 }, "verbergen")),
                    react_1.default.createElement(Styled.ARow, { container: true, item: true, direction: "row", xs: 12, justify: "space-between", alignItems: "center" },
                        react_1.default.createElement(Styled.CPName, { item: true, xs: 6 }, "Pro Delta Real Estate Service BV"),
                        react_1.default.createElement(Styled.CPAction, { item: true, xs: 2 }, "verbergen")),
                    react_1.default.createElement(Styled.ARow, { container: true, item: true, direction: "row", xs: 12, justify: "space-between", alignItems: "center" },
                        react_1.default.createElement(Styled.CPName, { item: true, xs: 6 }, "Pro Delta Real Estate Service BV"),
                        react_1.default.createElement(Styled.CPAction, { item: true, xs: 2 }, "verbergen")),
                    react_1.default.createElement(Styled.ARow, { container: true, item: true, direction: "row", xs: 12, justify: "space-between", alignItems: "center" },
                        react_1.default.createElement(Styled.CPName, { item: true, xs: 6 }, "Pro Delta Real Estate Service BV"),
                        react_1.default.createElement(Styled.CPAction, { item: true, xs: 2 }, "verbergen")),
                    react_1.default.createElement(Styled.ARow, { container: true, item: true, direction: "row", xs: 12, justify: "space-between", alignItems: "center" },
                        react_1.default.createElement(Styled.CPName, { item: true, xs: 6 }, "Pro Delta Real Estate Service BV"),
                        react_1.default.createElement(Styled.CPAction, { item: true, xs: 2 }, "verbergen")),
                    react_1.default.createElement(Styled.ARow, { container: true, item: true, direction: "row", xs: 12 },
                        react_1.default.createElement(SearchInput_1.default, { onSearch: function (value) { return console.log(value); }, placeholder: "Zoeken" }))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                    react_1.default.createElement(Styled.SaveButton, null, "Opslaan"))))));
};
exports.default = EditModal;
//# sourceMappingURL=EditModal.js.map