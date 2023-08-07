import React from "react";
import Header from "../../components/Header";
import GridItems from "../../components/GridItems";
import { useGetContactsQuery } from "../../api/contactSlice";
import { Loading } from "../../components/common/Loading";

function Contact() {
  const { data: contacts, isLoading } = useGetContactsQuery({});

  return (
    <>
          <div className="container py-20 px-10">

      <Header />
      {isLoading ? (
          <Loading />
        ) : (
          <GridItems
            data={contacts?.data || []}
          />
        )}
        </div>
    </>
  );
}

export default Contact;
