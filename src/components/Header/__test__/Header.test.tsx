import { screen } from "@testing-library/react";
import Header from "..";
import { renderWithProviders } from "../../../helper/testUtils";

describe("<Header />", () => {
  const propsHeader = {
    setShowModal: jest.fn(),
    setModalName: jest.fn(),
    dispatchDataForm: jest.fn(),
  };
  test("should Header render correctly", () => {
    renderWithProviders(<Header {...propsHeader} />);
    expect(document.querySelectorAll(".header").length).toBe(1);
  });

  test("should open modal when click create button", () => {
    renderWithProviders(<Header {...propsHeader} />);
    const createButton = screen.getByTestId("create-button");

    createButton.click();

    expect(propsHeader.setShowModal).toBeCalledTimes(1);
  })
});
