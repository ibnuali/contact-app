import reducer, { initialState, setSnackbar, clearSnackbar } from "../snackbar";
import { Snackbar } from "../../types";

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should handle a Snackbar being updated', () => {
  const previousState: Snackbar= initialState;
  const data: Snackbar = {
      open: true,
      alertColor: "success",
      message: 'error happeend',
  };
  expect(reducer(previousState, setSnackbar(data))).toEqual(data);
})

test('should handle a Snackbar being cleared', () => {
  expect(reducer(undefined, clearSnackbar())).toEqual(initialState);
})
