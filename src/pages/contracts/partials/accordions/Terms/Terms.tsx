import React from "react";
import { Query } from "@apollo/react-components";
import { useMutation } from "@apollo/react-hooks";

import _get from "lodash/get";

import { AccordionLink } from "dakota-portal/dist/components";

import { SubcomplexMenu } from "./../../../../../components";
import { AccordionContainer } from "./../../../styles";
import TermItem, { ITerm as ITermItem } from "./TermItem";
import AddTerm from "./AddTerm";
import ErrorMessage from "./ErrorMessage";
import {
  Container,
  Labels,
  Label,
  ContentItem,
  TitleWrapper,
  Title,
  TermsContainer
} from "./styles";
import {
  GET_TERMS_DATA,
  UPDATE_TERMS_DATA,
  CREATE_TERM,
  DELETE_TERM
} from "./queries";

interface IProps {
  isLocked: boolean;
  code: string;
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
}

const INITIAL_TERM_ITEM = {
  description: "",
  invoiceDirectly: false,
  invoiceFrom: new Date(),
  invoicePeriod: "Afterwards",
  nextInvoicingDate: new Date(),
  progressPercent: 0
};

const Terms = ({ isLocked, code, refs, activeLinks, onClick }: IProps) => {
  const [updateTerms] = useMutation(UPDATE_TERMS_DATA);
  const [createTerm] = useMutation(CREATE_TERM);
  const [deleteTerm] = useMutation(DELETE_TERM);

  const [terms, setTerms] = React.useState<ITermItem[]>([]);

  const handleAddClick = async () => {
    const { data } = await createTerm({
      variables: {
        data: {
          serviceContractCode: code,
          ...INITIAL_TERM_ITEM
        }
      }
    });
    const newTerm = _get(data, "createServiceContractTerm", {});

    setTerms([...terms, newTerm]);
  };

  const handleDeleteTerm = async id => {
    const { data } = await deleteTerm({
      variables: { where: { id } }
    });

    const deletedTermId = _get(data, "deleteServiceContractTerm.id", {});
    setTerms(terms.filter(({ id }) => id !== deletedTermId));
  };

  return (
    <AccordionLink
      ref={refs.terms}
      label="Termijnen"
      link="terms"
      isActive={activeLinks.includes("terms")}
      onClick={() => onClick("terms")}
    >
      <AccordionContainer>
        <TermsContainer>
          <Query
            query={GET_TERMS_DATA}
            variables={{ where: { serviceContractCode: code } }}
            fetchPolicy="cache-and-network"
            onCompleted={data => {
              const terms = _get(data, "serviceContractTerms", []);
              setTerms(terms);
            }}
          >
            {({ loading, error = null }) => {
              if (loading) {
                return <span>Loading...</span>;
              }

              if (error) {
                return <span>{JSON.stringify(error, null, 2)}</span>;
              }

              const sectionLabels = [
                "Factureren vanaf",
                "Volgende factureringsdatum",
                "Voorgangspercentage",
                "Omschrijving",
                "Facturereingsperiode",
                "Factuurvoorstel"
              ];

              return (
                <>
                  {isLocked && (
                    <ErrorMessage text="Servicecontract wordt momenteel bewerkt en kan niet door u worden bewerk" />
                  )}
                  <Container>
                    <Labels style={!terms.length ? { width: 0 } : undefined}>
                      {!!terms.length
                        ? sectionLabels.map(label => (
                            <Label key={label}>{label}</Label>
                          ))
                        : Array(sectionLabels.length)
                            .fill("")
                            .map((_, i) => <Label key={i} />)}
                    </Labels>
                    {terms.map((term, i) => (
                      <ContentItem key={term.id}>
                        <TitleWrapper>
                          <Title>Termijn {i + 1}</Title>
                          <SubcomplexMenu
                            position={{
                              top: "4px",
                              right: "10px"
                            }}
                            actions={[
                              {
                                label: "Delete",
                                onClick: () => handleDeleteTerm(term.id)
                              }
                            ]}
                          />
                        </TitleWrapper>
                        <TermItem
                          term={term}
                          onChange={(field, value) =>
                            updateTerms({
                              variables: {
                                where: { id: term.id },
                                data: { [field]: value }
                              },
                              refetchQueries: [
                                {
                                  query: GET_TERMS_DATA,
                                  variables: {
                                    where: {
                                      serviceContractCode: code
                                    }
                                  }
                                }
                              ]
                            })
                          }
                        />
                      </ContentItem>
                    ))}
                    {!isLocked && terms.length < 3 && (
                      <ContentItem>
                        <AddTerm onClick={handleAddClick} />
                      </ContentItem>
                    )}
                  </Container>
                </>
              );
            }}
          </Query>
        </TermsContainer>
      </AccordionContainer>
    </AccordionLink>
  );
};

export default Terms;
