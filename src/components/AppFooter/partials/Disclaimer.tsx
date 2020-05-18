import React from "react";

import { SlideModal } from "dakota-portal/dist/components";

import { P } from "../styled";

interface DisclaimerProps {
  history: any;
}

const Disclaimer = ({ history }: DisclaimerProps) => {
  return (
    <SlideModal
      headerProps={{
        onClose: history.goBack,
        title: "Disclaimer"
      }}
    >
      <P>
        Alle intellectuele eigendomsrechten op de portal www.dakota.nl, of
        onderdelen ervan, onder welke onderdelen onder meer dienen te worden
        verstaan de portal Dakota, het beeldmerk, de afbeeldingen, de teksten,
        de publicaties, het ontwerp en de functionaliteit van de portal
        www.dakota.nl behoren (uitsluitend) toe aan Consolidated Nederland en/of
        haar licentiegever.
      </P>
      <P>
        Het is de bezoeker van deze website uitdrukkelijk niet toegestaan om
        onderdelen van de website te kopiëren, van enige aanduiding omtrent
        rechthebbenden te ontdoen of anderszins te gebruiken, al dan niet
        commercieel, zonder voorafgaande schriftelijke toestemming van
        Consolidated Nederland.
      </P>
      <P>
        Consolidated Nederland en haar serviceafdeling Consolidated | Dakwacht
        besteden veel zorg aan de inhoud van de website www.dakota.nl. De
        informatie die via de website wordt verstrekt, is afkomstig van diverse
        interne en externe bronnen. Deze informatie is met de grootst mogelijke
        zorg verzameld, samengesteld en gekoppeld, maar kan gebaseerd zijn op
        schattingen of aannames. Consolidated Nederland kan noch de juistheid,
        noch de volledigheid, of de geschiktheid van informatie voor welk
        gebruik dan ook garanderen. Informatie wordt zonder welke garantie dan
        ook verschaft.
      </P>
      <P>
        De gebruiker wordt ervoor gewaarschuwd dat de verstrekte informatie
        periodiek, zonder aankondiging, kan worden gewijzigd.
      </P>
      <P>
        Consolidated Nederland is niet verantwoordelijk voor om het even welk
        initiatief dat de gebruiker op basis van de verstrekte informatie
        neemt.  Consolidated Nederland kan in geen enkel geval aansprakelijk
        worden gesteld voor eventuele directe, indirecte, incidentele schade of
        om het even welke andere schade die het gevolg zou zijn of zou
        voortvloeien uit of verband zou houden met het gebruik van de website
        www.dakota.nl van Consolidated Nederland of de onmogelijkheid deze te
        gebruiken.
      </P>
      <P>
        Consolidated Nederland kan niet aansprakelijk worden gesteld voor
        eventuele storingen, fouten of onderbrekingen in de elektronische
        publicatie van de website en verwante informatiediensten.
      </P>
      <P>
        Indien de gebruiker denkt dat informatie op deze website onjuist of
        onvolledig is, dan verzoeken we de gebruiker vriendelijk dit aan het
        Dakota team (helpdesk@dakota.nl) te melden.
      </P>
    </SlideModal>
  );
};

export default Disclaimer;
