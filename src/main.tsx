import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setupStore } from "./store.ts";
import { Provider } from "react-redux";
import Snackbar from "./components/common/SnackBar";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Snackbar />
      <App />
    </Provider>
  </React.StrictMode>
);
