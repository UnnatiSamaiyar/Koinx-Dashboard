import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Koinx from "pages/Koinx";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "koinx",
      element: <Koinx />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
