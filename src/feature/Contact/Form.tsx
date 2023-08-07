import React from "react";
import { Label, TextInput, Button } from "flowbite-react";
import {
  useAddContactMutation,
  useUpdateContactMutation,
} from "../../api/contactSlice";
import { FormProps } from "./types";
import { setContactForm } from "../../reducers/contactForm";

function Form({ dataForm, setShowModal, dispatchDataForm }: FormProps) {
  const [
    addContact,
    { isLoading: isCreating, isSuccess: createSuccess, isError: createError },
  ] = useAddContactMutation();

  const [
    updateContract,
    { isLoading: isUpdating, isSuccess: updateSuccess, isError: updateError },
  ] = useUpdateContactMutation();

  const isEdit = !!dataForm.id;

  const handleSubmit = () => {
    if (isEdit) {
      updateContract(dataForm);
    } else {
      const paramsAdd = {
        firstName: dataForm.firstName,
        lastName: dataForm.lastName,
        age: dataForm.age,
        photo: dataForm.photo,
      };
      addContact(paramsAdd);
    }
  };

  return (
    <div className="space-y-6">
      <form
        autoComplete="off"
        className="flex max-w-md flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="first-name" value="First Name" />
          </div>
          <TextInput
            id="first-name"
            value={dataForm.firstName}
            placeholder="John"
            required
            onChange={(e) =>
              dispatchDataForm(
                setContactForm({ ...dataForm, firstName: e.target.value })
              )
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="last-name" value="Last Name" />
          </div>
          <TextInput
            id="last-name"
            placeholder="Doe"
            required
            onChange={(e) =>
              dispatchDataForm(
                setContactForm({ ...dataForm, lastName: e.target.value })
              )
            }
            value={dataForm.lastName}
          />
        </div>
        <div className="flex gap-4 justify-between">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="age" value="Age" />
            </div>
            <TextInput
              id="age"
              placeholder=""
              required
              type="number"
              value={dataForm.age}
              onChange={(e) => {
                const regexAge = /^[1-9][0-9]?$|^100$/;
                if (e.target.value === "" || regexAge.test(e.target.value)) {
                  dispatchDataForm(
                    setContactForm({ ...dataForm, age: e.target.value })
                  );
                }
              }}
              min={1}
              max={100}
            />
          </div>
          <div className="grow">
            <div className="mb-2 block">
              <Label htmlFor="photo-url" value="Url Photo" />
            </div>
            <TextInput
              required
              id="photo-url"
              placeholder="https://example.jpg"
              value={dataForm.photo}
              onChange={(e) =>
                dispatchDataForm(
                  setContactForm({ ...dataForm, photo: e.target.value })
                )
              }
            />
          </div>
        </div>

        <div className="w-full justify-end flex">
          <Button
            type="submit"
            color="gray"
            isProcessing={isCreating || isUpdating}
          >
            {isEdit ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
