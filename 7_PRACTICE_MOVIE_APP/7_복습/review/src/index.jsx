import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import router from "./Router";
import { RouterProvider } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
