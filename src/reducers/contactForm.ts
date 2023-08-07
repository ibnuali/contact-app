import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "../types";

export const initialState: IContact = {
  id: "",
  firstName: "",
  lastName: "",
  age: 1,
  photo: "",
};

export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setContactForm: (state, action) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.age = action.payload.age;
      state.photo = action.payload.photo;
    },
    resetContactForm: () => {
      return initialState;
    },
  },
});
export const contactFormReducer = contactFormSlice.reducer;
export const { setContactForm, resetContactForm } = contactFormSlice.actions;
