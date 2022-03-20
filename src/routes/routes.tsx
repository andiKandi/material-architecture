import { Homepage } from "./Homepage/Homepage";
import { Contact } from "./Contact/Contact";
import { AboutUs } from "./AboutUs/AboutUs";
import { Portfolio } from "./Portfolio/Portfolio";

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
  {
    path: "/about-us",
    name: "about-us",
    component: <AboutUs />,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: <Portfolio />,
  },
];
