import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { routes } from "./routes";

export const Router = () => {
  const routeComponents = routes.map(({ path, name, component }, key) => {
    return <Route path={path} key={key} element={component} />;
  });

  return (
    <BrowserRouter>
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  );
};
