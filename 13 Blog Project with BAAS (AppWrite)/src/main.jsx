import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter router={router}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
