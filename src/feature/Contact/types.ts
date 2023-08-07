import { IContact } from "../../types";

export type GridItemsProps = {
  data: IContact[];
  setShowModal: (value: boolean) => void;
  dispatchDataForm: (value: any) => void;
};

export type FormProps = {
  setShowModal: (value: boolean) => void;
  dataForm: IContact;
  dispatchDataForm: (value: any) => void;
};
