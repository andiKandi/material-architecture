import { Homepage } from "./Homepage/Homepage";
import { Contact } from "./Contact/Contact";

export interface Route {
  path: string;
  name: string;
  component?: JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "homepage",
    component: <Homepage />,
  },
  {
    path: "/contact",
    name: "contact",
    component: <Contact />,
  },
];
