"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("dakota-portal/dist/components");
var styled_1 = require("../styled");
var PrivacyStatement = function (_a) {
    var history = _a.history;
    return (react_1.default.createElement(components_1.SlideModal, { headerProps: {
            onClose: history.goBack,
            title: "Privacy statement"
        } },
        react_1.default.createElement(styled_1.B, null, "Verantwoordelijke"),
        react_1.default.createElement(styled_1.P, null, "De verantwoordelijke voor het verzamelen van persoonsgegevens via de website www.dakota.nl is Consolidated Nederland bv, gevestigd aan de Stephensonweg 2, 4207 HB in Gorinchem, geregistreerd bij de Kamer van Koophandel onder nummer 23040986."),
        react_1.default.createElement(styled_1.P, null, "Voor vragen omtrent de bescherming van persoonsgegevens kunt u contact met ons opnemen:"),
        react_1.default.createElement(styled_1.UL, null,
            react_1.default.createElement("li", null,
                "per email: ",
                react_1.default.createElement("a", { href: "mailto:account@dakota.nl" }, "account@dakota.nl")),
            react_1.default.createElement("li", null, "per telefoon: 0183 643 629"),
            react_1.default.createElement("li", null, "per brief: Consolidated Nederland bv, Postbus 850, 4200 AW Gorinchem")),
        react_1.default.createElement(styled_1.B, null, "Persoonsgegevens"),
        react_1.default.createElement(styled_1.P, null, "Bij elk bezoek aan onze website herkent onze webserver uw domeinnaam, IP adres, e-mailadres en wachtwoord."),
        react_1.default.createElement(styled_1.P, null, "Bij een bezoek aan onze website bewaren wij:"),
        react_1.default.createElement(styled_1.UL, null,
            react_1.default.createElement("li", null, "uw e-mailadres en IP adres;"),
            react_1.default.createElement("li", null, "alle informatie die u vrijwillig heeft verstrekt, zoals bijvoorbeeld 'uw portefeuille', 'flagged', emailvoorkeuren, opdrachten, afwijzingen en notities.")),
        react_1.default.createElement(styled_1.B, null, "Cookies"),
        react_1.default.createElement(styled_1.P, null, "De website www.dakota.nl gebruikt cookies om uw bezoek aan de website bij te houden. Een cookie is een klein bestand dat verstuurd wordt door een internetserver en dat zich op de vaste schijf van uw computer installeert. Dit bestand houdt de sporen bij van de bezochte internetsite en bevat een aantal gegevens over dit bezoek. De cookies worden slechts gebruikt om het navigeren op de website voor de bezoekers te vergemakkelijken en te optimaliseren."),
        react_1.default.createElement(styled_1.B, null, "Doelomschrijving"),
        react_1.default.createElement(styled_1.P, null, "De door Consolidated verzamelde persoonsgegevens worden slechts gebruikt om in te loggen op de portal Dakota."),
        react_1.default.createElement(styled_1.P, null, "De informatie wordt alleen intern gebruikt en wordt niet doorgegeven aan andere organisaties voor commerci\u00EBle doeleinden, tenzij de betrokkene hiervoor uitdrukkelijk toestemming heeft verleend. Alle door Consolidated verzamelde persoonsgegevens zullen vertrouwelijk worden behandeld."),
        react_1.default.createElement(styled_1.B, null, "Beveiligingsmaatregelen"),
        react_1.default.createElement(styled_1.P, null, "Consolidated heeft de nodige veiligheidsmaatregelen ingevoerd om het verlies, het onrechtmatig gebruik of de wijziging van informatie in Dakota te voorkomen."),
        react_1.default.createElement(styled_1.B, null, "Wijzigingen"),
        react_1.default.createElement(styled_1.P, null, "Consolidated kan de persoonsgegevens gebruiken voor nieuwe doeleinden die nog niet voorzien zijn in haar huidige privacybeleid. In dat geval zal Consolidated hiervan een melding maken op de website www.dakota.nl en u op de hoogte stellen van de wijzigingen aan ons privacybeleid ten aanzien van de bescherming van de persoonsgegevens en om u de kans te bieden uw deelname te weigeren."),
        react_1.default.createElement(styled_1.B, null, "Inzagerecht"),
        react_1.default.createElement(styled_1.P, null, "Op verzoek verleent Consolidated aan de betrokkene toegang tot alle persoonsgegevens die van deze betrokkene worden bijgehouden. Als u toegang wenst tot deze informatie, kunt u contact met ons opnemen op het hierboven vermelde (e-mail)adres. Op verzoek biedt Consolidated de betrokkene de mogelijkheid om eventuele onjuiste gegevens aan te passen.")));
};
exports.default = PrivacyStatement;
//# sourceMappingURL=PrivacyStatement.js.map