import * as React from "react";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { useApolloClient } from "@apollo/react-hooks";
import { Query } from "@apollo/react-components";
import { Formik } from "formik";
import { compose } from "recompose";

import Grid from "@material-ui/core/Grid";
import MuiArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "dakota-portal/dist/components/Loader";

import {
  Nav,
  withLockEntities,
  SearchModal,
  withSOActions,
  MomentHistory
} from "../../../../components";
import * as Accordions from "./Accordions";

import { NAV_ITEMS } from "../../constants";
import { getCurrentUser } from "../../../../components/AccessControl";
import { urls, notification } from "../../../../helpers";
import { FETCH_CUSTOMERS } from "../../../../components/withSOActions/queries";
import { FETCH_SERVICE_ORDER, FETCH_SO_PROMOTED_FIELDS } from "../../queries";

import * as Styles from "../styles";
import { LoaderWrapper } from "../../../serviceOrder/styles";
import { ModalBox } from "../../../../components/SearchModal/styles";

const HEAD_HEIGHT = 130;
const ACCORDION_ANIMATION_TIME = 750;

const Index = ({
  history,
  location,
  match,
  onLockEntity,
  userId: lockedBy,
  onExecuteMutation,
  onGetSOCustomer,
  onGetSOAddress,
  isSOLoading
}) => {
  const client = useApolloClient();
  const containerRef = React.useRef(null);
  const [accordionRefs] = React.useState(
    NAV_ITEMS.reduce(
      (acc, { link }) => ({ ...acc, [link]: React.useRef(null) }),
      {}
    )
  );
  const [activeLinks, setActiveLinks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<object>({});
  const [promotedAccFields, setPromotedAccFields] = React.useState({
    promotedAlgemene: [],
    promotedWorkOrder: [],
    promotedDocumenten: [],
    promotedBeoordelen: []
  });
  const [soCode, setSoCode] = React.useState<string>("");

  const {
    url,
    params: { id: soId }
  } = match;

  React.useEffect(() => {
    window.addEventListener("beforeunload", ev => {
      ev.preventDefault();
      ev.returnValue = "";
      unlockEntity();
    });

    return function cleanup() {
      unlockEntity();
      window.removeEventListener("beforeunload", null);
    };
  }, []);

  const scrollToTab = link => {
    setTimeout(() => {
      const container = containerRef.current;

      container.style.scrollBehavior = "smooth";
      container.scrollTo(
        0,
        accordionRefs[link].current.offsetTop - HEAD_HEIGHT
      );
      container.style.scrollBehavior = "initial";
    }, ACCORDION_ANIMATION_TIME);
  };

  const handleTabSelected = link => {
    const updatedLinks = activeLinks.includes(link)
      ? activeLinks
      : [...activeLinks, link];

    setActiveLinks(updatedLinks);
    scrollToTab(link);
  };

  const handleAccordionSelected = link => {
    const isRemoved = activeLinks.includes(link);
    const updatedLinks = isRemoved
      ? activeLinks.filter(l => l !== link)
      : [...activeLinks, link];

    if (!isRemoved) {
      scrollToTab(link);
    }

    setActiveLinks(updatedLinks);
  };

  const unlockEntity = async () => {
    try {
      await onLockEntity("UNLOCK", {
        data: { lockedBy, entityName: "serviceOrder" },
        where: { id: soId }
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  const lockEntity = async (id: string = "") => {
    try {
      await onLockEntity("LOCK", {
        data: { lockedBy, entityName: "serviceOrder" },
        where: { id: !!id ? id : soId }
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClose = async () => {
    await unlockEntity();
    history.goBack();
  };

  const handleSelectCustomer = formikBag => async (customer: object) => {
    history.goBack();
    formikBag.handleChange({ target: { name: "customer", value: customer } });
    await handleUpdateSO({ ...formikBag.values, customer });
  };

  const handleUpdateSO = async formikValues => {
    try {
      await onExecuteMutation({
        formikValues,
        serviceOrderId: soId,
        prevFormValues: formikValues,
        currentUser
      });

      notification.addNotification({
        title: "Serviceorder bijwerken",
        message: `Serviceorder met id ${soId} is succesvol bijgewerkt`
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenMomentHistory = () => {
    history.push(urls.check(url + urls.MOMENT_HISTORY));
  };

  const initUser = async id => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
      const promoted = _get(user, "soDetailsPromotedFields");
      console.log(promoted, user);
      if (promoted) {
        setPromotedAccFields(promoted);
      }
      lockEntity(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Formik initialValues={{}} onSubmit={() => null} enableReinitialize>
      {formikBag => {
        const handleQueryComplete = async data => {
          setIsLoading(true);
          const serviceOrder = _get(data, "serviceOrder", {});
          const addressCode = _get(serviceOrder, "serviceLocationCode");
          const address = !!addressCode
            ? await onGetSOAddress(addressCode)
            : {};
          const customer = await onGetSOCustomer(serviceOrder);
          const reporter = _get(serviceOrder, "reporter", {});

          formikBag.setValues({
            ...serviceOrder,
            customer,
            address,
            reporter: reporter ? reporter : {}
          });

          if (!!serviceOrder && _isEmpty(currentUser)) {
            await initUser(serviceOrder.id);
            if (!soCode) {
              setSoCode(serviceOrder.code);
            }
          }

          setIsLoading(false);
        };

        const handleError = err => {
          console.log(err);
        };

        return (
          <Query
            query={FETCH_SERVICE_ORDER}
            variables={{ where: { id: soId } }}
            onCompleted={handleQueryComplete}
            fetchPolicy="cache-and-network"
            onError={handleError}
          >
            {() => (
              <>
                <Styles.CustomModal
                  headerProps={{
                    title: `Serviceorder`,
                    description: soId,
                    onClose: handleClose,
                    closeIcon: MuiArrowBackIcon
                  }}
                  containerRef={containerRef}
                  noPadding
                >
                  {(isLoading || isSOLoading) && (
                    <LoaderWrapper>
                      <Loader />
                    </LoaderWrapper>
                  )}
                  <Nav
                    activeLinks={activeLinks}
                    navItems={NAV_ITEMS}
                    onClick={handleTabSelected}
                  />

                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Accordions.GeneralInfo
                      refs={accordionRefs}
                      activeLinks={activeLinks}
                      onClick={handleAccordionSelected}
                      formikBag={formikBag}
                      apolloClient={client}
                      setIsLoading={setIsLoading}
                      currentUser={currentUser}
                      url={url}
                      onUpdateSO={handleUpdateSO}
                      onOpenMomentHistory={handleOpenMomentHistory}
                      promotedFields={promotedAccFields.promotedAlgemene}
                    />
                    <Accordions.WorkOrders
                      refs={accordionRefs}
                      activeLinks={activeLinks}
                      onClick={handleAccordionSelected}
                      routeProps={{ history, location, match }}
                      soCode={soCode}
                      soDescription={_get(formikBag, "values.description")}
                      onOpenMomentHistory={handleOpenMomentHistory}
                      currentUser={currentUser}
                      promotedFields={promotedAccFields.promotedWorkOrder}
                    />
                    <Accordions.Documents
                      refs={accordionRefs}
                      activeLinks={activeLinks}
                      onClick={handleAccordionSelected}
                      match={match}
                      promotedFields={promotedAccFields.promotedDocumenten}
                    />
                    <Accordions.Review
                      refs={accordionRefs}
                      activeLinks={activeLinks}
                      onClick={handleAccordionSelected}
                      promotedFields={promotedAccFields.promotedBeoordelen}
                    />
                  </Grid>
                </Styles.CustomModal>
                <ModalBox
                  component={SearchModal}
                  path={urls.check(url + urls.SEARCH_CLIENT)}
                  parentPath={url}
                  outDelay={300}
                  onBackdropClick={() => history.goBack()}
                  props={{
                    onSelect: handleSelectCustomer(formikBag),
                    onClose: history.goBack,
                    query: FETCH_CUSTOMERS,
                    where: !_isEmpty(_get(formikBag, "values.address.city"))
                      ? {
                          city: _get(formikBag, "values.address.city")
                        }
                      : {}
                  }}
                />

                <ModalBox
                  path={urls.check(url + urls.MOMENT_HISTORY)}
                  parentPath={url}
                  component={MomentHistory}
                  variant="wide"
                  props={{
                    onClose: history.goBack,
                    soCode: _get(formikBag, "values.code")
                  }}
                />
              </>
            )}
          </Query>
        );
      }}
    </Formik>
  );
};

export default compose(
  withSOActions(),
  withLockEntities({ entity: "serviceOrder" })
)(Index);
