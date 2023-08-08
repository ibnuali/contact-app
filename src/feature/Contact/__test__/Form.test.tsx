import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../helper/testUtils";
import Form from "../Form";

describe("<Form />", () => {
  const propsForm = {
    setShowModal: jest.fn(),
    dispatchDataForm: jest.fn(),
    dataForm: {
      id: "",
      firstName: "",
      lastName: "",
      age: 0,
      photo: "",
    },
    modalName: "create",
  };
  test("should render Form correctly and render all input", () => {
    renderWithProviders(<Form {...propsForm} />);
    const form = screen.getByTestId("form");
    const firstName = screen.getByRole("textbox", { name: /First Name/i });
    const lastName = screen.getByRole("textbox", { name: /Last Name/i });
    const age = screen.getByRole("spinbutton", { name: /Age/i });
    const photo = screen.getByRole("textbox", { name: /Photo/i });
    expect(form).toBeInTheDocument();

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(photo).toBeInTheDocument();
  });
});
