import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import Account from "./Account";
import Home from "./Home";

import Lesson from "./Lesson";

import TanggungJawab from "./pages/quiz/TanggungJawab";
import KontrolEmosi from "./pages/quiz/KontrolEmosi";
import Kejujuran from "./pages/quiz/Kejujuran";
import Disiplin from "./pages/quiz/Disiplin";

import Game from "./Game";

import Puzzle from "./pages/game/PairImage";
import PairImage from "./pages/game/PairImage";
import ShadowGame from "./pages/game/ShadowGame";

const router = createHashRouter([
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
  {
    path: "/quiz/tanggung_jawab",
    element: <TanggungJawab />,
  },
  {
    path: "/quiz/kontrol_emosi",
    element: <KontrolEmosi />,
  },
  {
    path: "/quiz/kejujuran",
    element: <Kejujuran />,
  },
  {
    path: "/quiz/disiplin",
    element: <Disiplin />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/game/pair_image",
    element: <PairImage />,
  },
  {
    path: "/game/shadow_game",
    element: <ShadowGame />,
  },
  {
    path: "/game/puzzle",
    element: <Puzzle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
