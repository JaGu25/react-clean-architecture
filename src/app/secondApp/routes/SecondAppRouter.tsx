import React from "react";
import { Route, Routes } from "react-router-dom";
import { SecondAppProvider } from "../store/context";
import { routes } from "./routes";

const SecondAppRouter: React.FC = () => {
  return (
    <SecondAppProvider>
      {
        <>
          aca podrias poner el sidebard
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </>
      }
    </SecondAppProvider>
  );
};

export default SecondAppRouter;
