import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import _get from "lodash/get";

import Grid from "@material-ui/core/Grid";

import {
  SlideModal,
  AlertContext,
  Loader,
  Button
} from "dakota-portal/dist/components";

import { generateCode, urls } from "./../../../helpers";
import { Nav, withLockEntities } from "../../../components";
import { NAV_ITEMS } from "./../constants";
import * as Accordions from "./accordions";
import { GET_CONTACT_DATA, DUBLICATE_CONTRACT } from "./../queries";

const HEAD_HEIGHT = 130;
const ACCORDION_ANIMATION_TIME = 750;

const ContractDetails = ({
  match,
  history,
  onLockEntity,
  userId: lockedBy
}) => {
  const scId = _get(match, "params.scId", "");
  const [contractData, setContractData] = React.useState({});
  const [scCode, setScCode] = React.useState("");
  const [scIsLocked, setScIsLocked] = React.useState(false);
  const [dublicate] = useMutation(DUBLICATE_CONTRACT);
  const containerRef = React.useRef(null);
  const [accordionRefs] = React.useState(
    NAV_ITEMS.reduce(
      (acc, { link }) => ({ ...acc, [link]: React.useRef(null) }),
      {}
    )
  );
  const alertContext = React.useContext(AlertContext);

  useQuery(GET_CONTACT_DATA, {
    variables: { where: { id: scId } },
    onCompleted: data => {
      const {
        code = "",
        scLockedBy = "",
        isLocked = false,
        ...contractData
      } = _get(data, "serviceContract", {});

      setScCode(code);
      setContractData(contractData);

      if (isLocked) {
        if (scLockedBy !== lockedBy) {
          alertContext.askBlock(() => null, {
            title: "Servicecontract is vergrendeld",
            subtitle:
              "Servicecontract wordt momenteel bewerkt en kan niet door u worden bewerkt",
            acceptText: "Ok",
            rejectText: " "
          });

          setScIsLocked(true);
        }
      } else {
        lockEntity();
      }
    }
  });

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

  const [activeLinks, setActiveLinks] = React.useState([NAV_ITEMS[0].link]);

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
    if (!scId) {
      return;
    }

    try {
      await onLockEntity("UNLOCK", {
        data: { lockedBy, entityName: "serviceContract" },
        where: { id: scId }
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  const lockEntity = async () => {
    if (!scId) {
      return;
    }
    try {
      await onLockEntity("LOCK", {
        data: { lockedBy, entityName: "serviceContract" },
        where: { id: scId }
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleClose = async () => {
    await unlockEntity();
    history.push(urls.SC_LIST);
  };

  const dublicateContract = async () => {
    try {
      const { data } = await dublicate({
        variables: {
          data: {
            ...contractData,
            id: undefined,
            description: "",
            customerCode: "",
            code: generateCode()
          }
        }
      });

      const { createServiceContract: dublicatedServiceContract } = data;

      window.open(
        `${match.url}/service-contract/${_get(
          dublicatedServiceContract,
          "id"
        )}`,
        "_blank"
      );
    } catch (err) {
      console.log("Err: ", JSON.stringify(err, null, 2));
    }
  };

  return (
    <SlideModal
      headerProps={{
        title: `Service Contract`,
        description: `${scCode}${scIsLocked ? " (Locked)" : ""}`,
        onClose: handleClose,
        component: <Button onClick={dublicateContract}>Duplicaat</Button>
      }}
      containerRef={containerRef}
      noPadding
    >
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
        {scCode ? (
          <>
            <Accordions.Termins
              isLocked={scIsLocked}
              code={scCode}
              refs={accordionRefs}
              activeLinks={activeLinks}
              onClick={handleAccordionSelected}
            />

            <Accordions.Client
              history={history}
              match={match}
              isLocked={scIsLocked}
              code={scCode}
              refs={accordionRefs}
              activeLinks={activeLinks}
              onClick={handleAccordionSelected}
            />

            <Accordions.Data
              isLocked={scIsLocked}
              code={scCode}
              refs={accordionRefs}
              activeLinks={activeLinks}
              onClick={handleAccordionSelected}
            />

            <Accordions.Appointments
              isLocked={scIsLocked}
              match={match}
              history={history}
              refs={accordionRefs}
              activeLinks={activeLinks}
              onClick={handleAccordionSelected}
            />

            <Accordions.Billing
              isLocked={scIsLocked}
              code={scCode}
              refs={accordionRefs}
              activeLinks={activeLinks}
              onClick={handleAccordionSelected}
            />

            <Accordions.Terms
              isLocked={scIsLocked}
              code={scCode}
              refs={accordionRefs}
              activeLinks={activeLinks}
              onClick={handleAccordionSelected}
            />
            <Accordions.Document
              isLocked={scIsLocked}
              match={match}
              refs={accordionRefs}
              activeLinks={activeLinks}
              onClick={handleAccordionSelected}
            />
          </>
        ) : (
          <Loader />
        )}
      </Grid>
    </SlideModal>
  );
};

export default withLockEntities({ entity: "serviceContract" })(ContractDetails);
