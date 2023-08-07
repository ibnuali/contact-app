import { createSlice } from "@reduxjs/toolkit";
import { Snackbar } from "../types";

export const initialState: Snackbar = {
  open: false,
  alertColor: "success",
  message: "",
};

const SnackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbar: (state, action: { type: string; payload: Snackbar }) => {
      const { open, message, alertColor } = action.payload;
      state.open = open;
      state.message = message;
      state.alertColor = alertColor;
    },
    clearSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { setSnackbar, clearSnackbar } = SnackbarSlice.actions;

export default SnackbarSlice.reducer;
