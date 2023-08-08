import {
  contactFormReducer,
  initialState,
  resetContactForm,
  setContactForm,
} from "../contactForm";

test("should return the initial state", () => {
  expect(contactFormReducer(initialState, resetContactForm())).toEqual(
    initialState
  );
});

test("should handle a contact form update", () => {
  const previousState = initialState;
  const data = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };

  expect(contactFormReducer(previousState, setContactForm(data))).toEqual(data);
});
