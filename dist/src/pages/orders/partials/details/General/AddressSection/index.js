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
var partials_1 = require("../../../../../serviceOrder/partials");
var queries_1 = require("../../../../../../components/withSOActions/queries");
var helpers_1 = require("../../../../../serviceOrder/helpers");
var constants_1 = require("../../../../../serviceOrder/constants");
var debounceHook_1 = __importDefault(require("../../../../../../helpers/debounceHook"));
var helpers_2 = require("../../../../../../helpers");
var styles_1 = require("../../styles");
exports.AddressSection = function (_a) {
    var apolloClient = _a.apolloClient, setIsLoading = _a.setIsLoading, formikBag = _a.formikBag, onUpdateSO = _a.onUpdateSO;
    var _b = React.useState([]), bagNumbers = _b[0], setBagNumbers = _b[1];
    var _c = React.useState(""), search = _c[0], setSearch = _c[1];
    var debounceSearch = debounceHook_1.default(search, 800);
    var values = formikBag.values;
    React.useEffect(function () {
        if (debounceSearch) {
            handleSearchAddress(debounceSearch)
                .then(function (res) {
                var bagNumbers = get_1.default(res, "data.bagNumbers") || [];
                setBagNumbers(bagNumbers);
                setIsLoading(false);
            })
                .catch(function (err) {
                setIsLoading(false);
                console.error(err.message);
            });
        }
        else {
            setBagNumbers([]);
        }
    }, [debounceSearch]);
    var handleSearchAddress = function (addressSearch) {
        setIsLoading(true);
        return apolloClient.query({
            query: queries_1.SEARCH_BAG_NUMBER,
            variables: {
                where: {
                    AND: helpers_1.parseSearchValue(addressSearch, constants_1.BAG_FIELDS)
                }
            }
        });
    };
    var handleSelectAddress = function (_a) {
        var address = _a.address;
        return __awaiter(void 0, void 0, void 0, function () {
            var newValues;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newValues = __assign(__assign({}, values), { address: address });
                        setSearch("");
                        formikBag.setValues(newValues);
                        return [4 /*yield*/, onUpdateSO(newValues)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return (React.createElement(styles_1.AddressCard, null,
        React.createElement(styles_1.AddressHeader, null,
            React.createElement(styles_1.AddressTitle, null, "Adresgegevens"),
            React.createElement(styles_1.AddresAction, null, "Verberg")),
        React.createElement(Grid_1.default, { container: true },
            React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.AddressContent, null,
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Zoeken"),
                        React.createElement(styles_1.FormInput, { onChange: function (e) { return setSearch(e.target.value); }, placeholder: "Zoeken adres" })),
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Postcode"),
                        React.createElement(styles_1.FormInput, { value: get_1.default(values, "address.postalCode"), placeholder: "1019 DD", disabled: true })),
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Huisnummer"),
                        React.createElement(styles_1.FormGroup, null,
                            React.createElement(styles_1.FormSmallWrapper, null,
                                React.createElement(styles_1.FormSmallInput, { value: get_1.default(values, "address.houseNumber"), placeholder: "36", disabled: true })),
                            React.createElement(styles_1.FormWrapperSelect, null,
                                React.createElement(styles_1.FormSmallLabel, null, "Letter"),
                                React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: helpers_2.generateHouseLetters(), value: {
                                        value: get_1.default(values, "address.houseLetter"),
                                        label: get_1.default(values, "address.houseLetter")
                                    }, isDisabled: true })),
                            React.createElement(styles_1.FormSmallWrapper, null,
                                React.createElement(styles_1.FormSmallLabel, null, "Toev."),
                                React.createElement(styles_1.FormSmallInput, { value: get_1.default(values, "address.houseNumberAddition"), disabled: true })))),
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Straatnaam"),
                        React.createElement(styles_1.FormInput, { value: get_1.default(values, "address.street"), placeholder: "Veemarkt", disabled: true })),
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Plaats"),
                        React.createElement(styles_1.FormInput, { value: get_1.default(values, "address.city"), placeholder: "Amsterdam", disabled: true })))),
            !!bagNumbers.length && (React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.SearchResultWrapper, null,
                    React.createElement(partials_1.SearchResults, { onSelectResult: handleSelectAddress, results: bagNumbers, values: values })))))));
};
//# sourceMappingURL=index.js.map