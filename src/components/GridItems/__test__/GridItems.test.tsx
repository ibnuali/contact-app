import GridItems from "..";
import { renderWithProviders } from "../../../helper/testUtils";
import { IContact } from "../../../types";
import { fireEvent, screen } from "@testing-library/react";

describe("<GridItems />", () => {
  const mockData: IContact[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      age: 25,
      photo: "N/A",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Doe",
      age: 25,
      photo: "N/A",
    },
  ];

  const girdItemProps = {
    data: mockData,
    setShowModal: jest.fn(),
    dispatchDataForm: jest.fn(),
    setModalName: jest.fn(),
  };
  test("should GridItems render correctly", () => {
    renderWithProviders(<GridItems {...girdItemProps} />);

    expect(document.querySelectorAll(".grid__content").length).toBe(1);
    expect(document.querySelectorAll(".grid__action").length).toBe(2);
  });

  test("should GridItems render correctly with empty data", () => {
    renderWithProviders(<GridItems {...girdItemProps} data={[]} />);

    expect(document.querySelectorAll(".grid__content").length).toBe(1);
    expect(document.querySelectorAll(".grid__action").length).toBe(0);
  });

  test('should open modal confirmation when click "Delete" button', async () => {
    renderWithProviders(<GridItems {...girdItemProps} />);

    const deleteButton = screen.getAllByTestId("delete-button");
    fireEvent.click(deleteButton[0]);

    expect(girdItemProps.setShowModal).toBeCalledTimes(1);
    expect(girdItemProps.setModalName).toBeCalledTimes(1);
  });
});
