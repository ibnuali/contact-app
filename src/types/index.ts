export type AlertColorProps = "success" | "failure";

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface IContactData {
  message?: string;
  data: IContact[];
}

export interface Snackbar {
  open: boolean;
  alertColor: AlertColorProps;
  message: string;
}