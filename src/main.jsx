import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Account from "./Account.jsx";
import Home from "./Home.jsx";
import Lesson from "./Lesson.jsx";

import TanggungJawab from "./pages/quiz/TanggungJawab";
import KontrolEmosi from "./pages/quiz/KontrolEmosi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/lesson",
    element: <Lesson />,
  },
  // {
  //   path: "/lesson/quiz",
  //   element: <Quiz />,
  // },
  {
    path: "/quiz/tanggung_jawab",
    element: <TanggungJawab />,
  },
  {
    path: "/quiz/kontrol_emosi",
    element: <KontrolEmosi />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
