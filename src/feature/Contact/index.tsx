import { useState, useReducer, Suspense } from "react";
import Header from "../../components/Header";
import GridItems from "../../components/GridItems";
import { useGetContactsQuery } from "../../api/contactSlice";
import { Loading } from "../../components/common/Loading";
import Modal from "../../components/common/Modal";
import { contactFormReducer, initialState } from "../../reducers/contactForm";
import Form from "./Form";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const { data: contacts, isLoading } = useGetContactsQuery({});
  const [dataForm, dispatchDataForm] = useReducer(
    contactFormReducer,
    initialState
  );

  return (
    <>
      <div className="container py-20 px-10">
        <Header
          setShowModal={setShowModal}
          dispatchDataForm={dispatchDataForm}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <GridItems
            data={contacts?.data || []}
            dispatchDataForm={dispatchDataForm}
            setShowModal={setShowModal}
          />
        )}
      </div>

      <Modal
        title={`${dataForm.id ? "Edit" : "Create"} Contact`}
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        {showModal && (
          <Suspense fallback={<div>Loading...</div>}>
            <Form
              setShowModal={setShowModal}
              dataForm={dataForm}
              dispatchDataForm={dispatchDataForm}
            />
          </Suspense>
        )}
      </Modal>
    </>
  );
}

export default Contact;
