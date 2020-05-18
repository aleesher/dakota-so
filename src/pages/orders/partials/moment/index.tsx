import * as React from "react";
import Grid from "@material-ui/core/Grid";
import _get from "lodash/get";
import _reduce from "lodash/reduce";
import _isEmpty from "lodash/isEmpty";
import { useApolloClient } from "@apollo/react-hooks";

import SortableTable, {
  IMeta,
  createActionMenuColumn
} from "dakota-portal/dist/components/SortableTable";
import { SlideModal, Loader } from "dakota-portal/dist/components";

import { COLUMNS, FORM_VALUES, NUMBER_FIELDS } from "./constants";
import { PER_PAGE } from "../../constants";
import {
  FETCH_MOMENTS,
  CREATE_MOMENT,
  UPDATE_MOMENT,
  DELETE_MOMENT
} from "./queries";
import tableHelper from "../../../../helpers/tableHelper";
import { ConfirmModal } from "../../../../components";
import { urls } from "../../../../helpers";

import {
  FormCard,
  CardTitle,
  TransparentButton,
  LoaderWrapper
} from "../../../serviceOrder/styles";
import { ModalBox } from "../../../../components/SearchModal/styles";

const Moment = ({ history, match }) => {
  const client = useApolloClient();
  const [meta, setMeta] = React.useState<IMeta>({
    activePage: 0,
    totalItems: 0,
    perPage: PER_PAGE
  });
  const [showForm, toggleForm] = React.useState<boolean>(false);
  const [formValues, setFormValues] = React.useState<object>(FORM_VALUES);
  const [moments, setMoments] = React.useState<object[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [momentId, setMomentId] = React.useState<string>();
  const { url } = match;

  React.useEffect(() => {
    handleFetchMoments();
  }, []);

  const formatValues = values =>
    _reduce(
      values,
      (acc, val, key) => ({
        ...acc,
        [key]: NUMBER_FIELDS.includes(key) ? parseInt(val, 10) : val
      }),
      {}
    );

  const handleSubmit = async values => {
    if (!values) {
      toggleForm(false);
      setFormValues(FORM_VALUES);
      return;
    }
    try {
      setIsLoading(true);
      const data = formatValues(values);

      if (data.id) {
        await handleUpdateMoment(data);
      } else {
        await handleCreateMoment(data);
      }

      toggleForm(false);
      setFormValues(FORM_VALUES);
      handleFetchMoments();
    } catch (err) {
      toggleForm(false);
      setIsLoading(false);
      console.error(err.message);
    }
  };

  const handleCreateMoment = async values => {
    try {
      await client.mutate({
        mutation: CREATE_MOMENT,
        variables: { data: values }
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleUpdateMoment = async values => {
    try {
      const { id, ...data } = values;
      await client.mutate({
        mutation: UPDATE_MOMENT,
        variables: { data, where: { id } }
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleFetchMoments = (newMeta: IMeta = {}) => {
    const currentMeta = !_isEmpty(newMeta) ? newMeta : meta;

    const variables = {
      skip: currentMeta.activePage * currentMeta.perPage,
      perPage: currentMeta.perPage,
      orderBy:
        currentMeta.orderByKey && currentMeta.orderByType
          ? `${currentMeta.orderByKey}_${currentMeta.orderByType.toUpperCase()}`
          : "id_DESC"
    };

    client
      .query({
        query: FETCH_MOMENTS,
        variables
      })
      .then(res => {
        const moments = _get(res, "data.moments", []);
        setMeta({
          ...currentMeta,
          totalItems: _get(res, "data.momentsConnection.aggregate.count", 0)
        });
        setMoments(moments);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err.message);
      });
  };

  const handleDeleteMoment = async () => {
    try {
      setIsLoading(true);
      await client.mutate({
        mutation: DELETE_MOMENT,
        variables: { where: { id: momentId } }
      });
      handleToggleModal();
      handleFetchMoments();
    } catch (err) {
      setIsLoading(false);
      console.error(err.message);
    }
  };

  const handleClickCheckbox = async values => {
    try {
      setIsLoading(true);
      await handleUpdateMoment(values);
      handleFetchMoments();
    } catch (err) {
      setIsLoading(false);
      console.error(err.message);
    }
  };

  const handleToggleModal = (id: string = "") => {
    if (!id) {
      setMomentId("");
      history.goBack();
    } else {
      setMomentId(id);
      history.push(urls.check(url + urls.CONFIRM_MODAL));
    }
  };

  return (
    <SlideModal
      headerProps={{
        onClose: history.goBack,
        title: "Nieuwe logmomenten aanmaken"
      }}
    >
      <FormCard>
        <Grid container xs={12}>
          <Grid xs={6} item>
            <CardTitle hasborder="false">Logmomenten</CardTitle>
          </Grid>
          <Grid xs={6} item container justify="flex-end" alignItems="center">
            <TransparentButton
              height="56px"
              onClick={() => toggleForm(!showForm)}
            >
              Toevoegen logmomenten
            </TransparentButton>
          </Grid>
        </Grid>
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        <SortableTable
          columns={[
            createActionMenuColumn(
              tableHelper.createActionMenuItems({
                onClickEdit: moment => {
                  toggleForm(true);
                  setFormValues(moment);
                },
                onClickBlock: () => null,
                onClickDelete: ({ id }) => handleToggleModal(id)
              }),
              moments.length
            ),
            ...COLUMNS(handleClickCheckbox)
          ]}
          dataSource={moments}
          onRowClick={() => null}
          meta={meta}
          onQueryChange={handleFetchMoments}
          onSubmitForm={showForm ? handleSubmit : null}
          onValueChange={() => null}
          selectedRows={[]}
          disabledRows={[]}
          formValues={formValues}
          isNotConfigurable
        />
        <ModalBox
          component={ConfirmModal}
          path={urls.check(url + urls.CONFIRM_MODAL)}
          parentPath={url}
          outDelay={300}
          onBackdropClick={() => handleToggleModal()}
          props={{
            onConfirm: () => handleDeleteMoment(),
            onCancel: () => handleToggleModal(),
            onClose: () => handleToggleModal(),
            text: "Wilt u het logmoment echt verwijderen?"
          }}
          width="auto"
        />
      </FormCard>
    </SlideModal>
  );
};

export default Moment;
