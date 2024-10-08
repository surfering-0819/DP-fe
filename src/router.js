import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Portfolio from "./Pages/Portfolio";
import Recomand from "./Pages/Recomand";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "recomand",
        element: <Recomand></Recomand>,
      },
    ],
  },
]);

export default router;
