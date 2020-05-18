import React from "react";

import { SlideModal } from "dakota-portal/dist/components";

import { B, P, UL } from "../styled";

interface PrivacyStatementProps {
  history: any;
}

const PrivacyStatement = ({ history }: PrivacyStatementProps) => {
  return (
    <SlideModal
      headerProps={{
        onClose: history.goBack,
        title: "Privacy statement"
      }}
    >
      <B>Verantwoordelijke</B>
      <P>
        De verantwoordelijke voor het verzamelen van persoonsgegevens via de
        website www.dakota.nl is Consolidated Nederland bv, gevestigd aan de
        Stephensonweg 2, 4207 HB in Gorinchem, geregistreerd bij de Kamer van
        Koophandel onder nummer 23040986.
      </P>
      <P>
        Voor vragen omtrent de bescherming van persoonsgegevens kunt u contact
        met ons opnemen:
      </P>
      <UL>
        <li>
          per email: <a href="mailto:account@dakota.nl">account@dakota.nl</a>
        </li>
        <li>per telefoon: 0183 643 629</li>
        <li>
          per brief: Consolidated Nederland bv, Postbus 850, 4200 AW Gorinchem
        </li>
      </UL>

      <B>Persoonsgegevens</B>
      <P>
        Bij elk bezoek aan onze website herkent onze webserver uw domeinnaam, IP
        adres, e-mailadres en wachtwoord.
      </P>
      <P>Bij een bezoek aan onze website bewaren wij:</P>
      <UL>
        <li>uw e-mailadres en IP adres;</li>
        <li>
          alle informatie die u vrijwillig heeft verstrekt, zoals bijvoorbeeld
          'uw portefeuille', 'flagged', emailvoorkeuren, opdrachten, afwijzingen
          en notities.
        </li>
      </UL>

      <B>Cookies</B>
      <P>
        De website www.dakota.nl gebruikt cookies om uw bezoek aan de website
        bij te houden. Een cookie is een klein bestand dat verstuurd wordt door
        een internetserver en dat zich op de vaste schijf van uw computer
        installeert. Dit bestand houdt de sporen bij van de bezochte
        internetsite en bevat een aantal gegevens over dit bezoek. De cookies
        worden slechts gebruikt om het navigeren op de website voor de bezoekers
        te vergemakkelijken en te optimaliseren.
      </P>

      <B>Doelomschrijving</B>
      <P>
        De door Consolidated verzamelde persoonsgegevens worden slechts gebruikt
        om in te loggen op de portal Dakota.
      </P>
      <P>
        De informatie wordt alleen intern gebruikt en wordt niet doorgegeven aan
        andere organisaties voor commerciële doeleinden, tenzij de betrokkene
        hiervoor uitdrukkelijk toestemming heeft verleend. Alle door
        Consolidated verzamelde persoonsgegevens zullen vertrouwelijk worden
        behandeld.
      </P>

      <B>Beveiligingsmaatregelen</B>
      <P>
        Consolidated heeft de nodige veiligheidsmaatregelen ingevoerd om het
        verlies, het onrechtmatig gebruik of de wijziging van informatie in
        Dakota te voorkomen.
      </P>

      <B>Wijzigingen</B>
      <P>
        Consolidated kan de persoonsgegevens gebruiken voor nieuwe doeleinden
        die nog niet voorzien zijn in haar huidige privacybeleid. In dat geval
        zal Consolidated hiervan een melding maken op de website www.dakota.nl
        en u op de hoogte stellen van de wijzigingen aan ons privacybeleid ten
        aanzien van de bescherming van de persoonsgegevens en om u de kans te
        bieden uw deelname te weigeren.
      </P>

      <B>Inzagerecht</B>
      <P>
        Op verzoek verleent Consolidated aan de betrokkene toegang tot alle
        persoonsgegevens die van deze betrokkene worden bijgehouden. Als u
        toegang wenst tot deze informatie, kunt u contact met ons opnemen op het
        hierboven vermelde (e-mail)adres. Op verzoek biedt Consolidated de
        betrokkene de mogelijkheid om eventuele onjuiste gegevens aan te passen.
      </P>
    </SlideModal>
  );
};

export default PrivacyStatement;
