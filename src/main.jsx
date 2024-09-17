import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainContainer from "./components/MainContainer.jsx";
import CreateContainer from "./components/CreateContainer.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainContainer />,
      },
      {
        path: "createItem",
        element: <CreateContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
