import { Alert } from "flowbite-react";
import { BsCheck, BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { clearSnackbar } from "../../../reducers/snackbar";

const Snackbar = () => {
  const dispatch = useDispatch();
  const { open, message, alertColor } = useSelector(
    (state: RootState) => state.snackbarReducer
  );
  const duration = 5000;

  setTimeout(() => {
    dispatch(clearSnackbar());
  }, duration);

  return (
    <div className="fixed top-20 right-0 mb-4 mr-4 z-[9999]">
      {open && (
        <Alert
          color={alertColor}
          icon={alertColor === "success" ? BsCheck : BsX}
        >
          <p className="text-sm">{message}</p>
        </Alert>
      )}
    </div>
  );
};

export default Snackbar;
