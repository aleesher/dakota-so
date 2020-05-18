import React from "react";
import { withRouter } from "react-router-dom";

import { ModalRoute } from "dakota-portal/dist/components";

import TermsOfUse from "./partials/TermsOfUse";
import PrivacyStatement from "./partials/PrivacyStatement";
import Disclaimer from "./partials/Disclaimer";
import { version } from "../../../package.json";
import { Footer, FooterLink } from "./styled";
import { urls } from "../../helpers";

interface IProps {
  match: any;
  history: any;
  location: any;
}

class AppFooter extends React.Component<IProps> {
  shouldComponentUpdate(nextProps) {
    return nextProps.location.pathname !== this.props.location.pathname;
  }

  render() {
    const { url } = this.props.match;

    return (
      <Footer>
        <FooterLink as="span">Dakota versie {version}</FooterLink>|
        <FooterLink as="span">Kvk: 23040986</FooterLink>|
        <FooterLink to={urls.check(url + urls.TERMS_OF_USE)}>
          Gebruiksvoorwaarden
        </FooterLink>
        |
        <FooterLink to={urls.check(url + urls.PRIVACY_STATEMENT)}>
          Privacy statement
        </FooterLink>
        |
        <FooterLink to={urls.check(url + urls.DISCLAIMER)}>
          Disclaimer
        </FooterLink>
        <ModalRoute
          component={TermsOfUse}
          path={urls.check(url + urls.TERMS_OF_USE)}
          parentPath={url}
          variant="wide"
        />
        <ModalRoute
          component={PrivacyStatement}
          path={urls.check(url + urls.PRIVACY_STATEMENT)}
          parentPath={url}
          variant="wide"
        />
        <ModalRoute
          component={Disclaimer}
          path={urls.check(url + urls.DISCLAIMER)}
          parentPath={url}
          variant="wide"
        />
      </Footer>
    );
  }
}

export default withRouter(AppFooter);
