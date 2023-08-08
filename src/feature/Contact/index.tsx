import { useState, useReducer, useEffect } from "react";
import Header from "../../components/Header";
import GridItems from "../../components/GridItems";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../api/contactSlice";
import { Loading } from "../../components/common/Loading";
import Modal from "../../components/common/Modal";
import { contactFormReducer, initialState } from "../../reducers/contactForm";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../reducers/snackbar";

function Contact() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState("");

  const [deleteContact, { isLoading: isDeleting, isSuccess, isError }] =
    useDeleteContactMutation();
  const { data: contacts, isLoading } = useGetContactsQuery({});
  const [dataForm, dispatchDataForm] = useReducer(
    contactFormReducer,
    initialState
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setSnackbar({
          open: true,
          alertColor: "success",
          message: "Contact deleted successfully",
        })
      );
    } else if (isError) {
      dispatch(
        setSnackbar({
          open: true,
          alertColor: "failure",
          message: "Failed to delete contact",
        })
      );
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div className="container py-20 px-10">
        <Header
          setShowModal={setShowModal}
          setModalName={setModalName}
          dispatchDataForm={dispatchDataForm}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <GridItems
            data={contacts?.data || []}
            dispatchDataForm={dispatchDataForm}
            setShowModal={setShowModal}
            setModalName={setModalName}
          />
        )}
      </div>

      <Modal
        title={`${dataForm.id ? "Edit" : "Create"} Contact`}
        show={showModal}
        confirmation={modalName === "delete"}
        submitDelete={() => deleteContact(dataForm.id)}
        onClose={() => setShowModal(false)}
        isLoading={isDeleting}
      >
        {showModal && modalName !== "delete" && (
          <Form
            setShowModal={setShowModal}
            dataForm={dataForm}
            dispatchDataForm={dispatchDataForm}
          />
        )}
      </Modal>
    </>
  );
}

export default Contact;
