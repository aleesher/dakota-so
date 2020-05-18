"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardItemTypes;
(function (CardItemTypes) {
    CardItemTypes["select"] = "select";
    CardItemTypes["input"] = "input";
    CardItemTypes["textarea"] = "textarea";
    CardItemTypes["text"] = "text";
    CardItemTypes["combinedInput"] = "combinedInput";
    CardItemTypes["date"] = "date";
    CardItemTypes["time"] = "time";
    CardItemTypes["phone"] = "phone";
    CardItemTypes["hour"] = "hour";
    CardItemTypes["price"] = "price";
    CardItemTypes["switch"] = "switch";
})(CardItemTypes = exports.CardItemTypes || (exports.CardItemTypes = {}));
var SOTypes;
(function (SOTypes) {
    SOTypes["LEAKAGE"] = "LEKKAGE";
    SOTypes["DIRECTION_JOB"] = "REGIEKLUS";
    SOTypes["CORRECTIVE_MAINTENANCE"] = "CORRECTIVE_ONDERHOUD";
    SOTypes["MAINTENANCE_AND_INSPECTION"] = "ONDERHOUD_EN_INSPECTIE";
    SOTypes["MAINTENANCE"] = "ONDERHOUD";
    SOTypes["INITIAL_INSPECTION"] = "NULMETING";
    SOTypes["INSPECTION"] = "INSPECTIE";
    SOTypes["PREDICTED_MAINTENANCE"] = "VOORSPELD_ONDERHOUD";
    SOTypes["ALL_PROTECTION_INSPECTION"] = "INSPECTIE_VALBEVEILIGING";
    SOTypes["MAINTENANCE_GREEN_ROOF"] = "ONDERHOUD_GROENDAK";
})(SOTypes = exports.SOTypes || (exports.SOTypes = {}));
var BronTypes;
(function (BronTypes) {
    BronTypes["CONTRACT"] = "CO";
    BronTypes["WARRANTY"] = "WA";
    BronTypes["REGIE"] = "RE";
    BronTypes["SERVICE"] = "SE";
})(BronTypes = exports.BronTypes || (exports.BronTypes = {}));
var CustomerTypes;
(function (CustomerTypes) {
    CustomerTypes["Consolidated"] = "CN";
})(CustomerTypes = exports.CustomerTypes || (exports.CustomerTypes = {}));
var InvoiceTypes;
(function (InvoiceTypes) {
    InvoiceTypes["Director"] = "Regie";
    InvoiceTypes["Contractor"] = "Aanneming";
})(InvoiceTypes = exports.InvoiceTypes || (exports.InvoiceTypes = {}));
//# sourceMappingURL=models.js.map