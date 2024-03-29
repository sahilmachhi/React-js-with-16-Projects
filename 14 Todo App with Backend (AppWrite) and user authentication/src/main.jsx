import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./Components/Login/Login.jsx";
import SignInForm from "./Components/Signin/Signin.jsx";
import AddTodoForm from "./Components/AddTodo/AddTodo.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signin",
    element: <SignInForm />,
  },
  {
    path: "/submit",
    element: <AddTodoForm />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
