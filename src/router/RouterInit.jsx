import { createBrowserRouter } from "react-router-dom";
import { About, Contact, GetInvolved, Home, Research } from "../pages";
import Layout from "./Layout";

const RouterInit = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "research",
        element: <Research />,
      },
      {
        path: "get-involved",
        element: <GetInvolved />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default RouterInit;
