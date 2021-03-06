import * as React from "react";

import CompanyLogo from "../../../src/assets/CompanyLogo.jpg";
import { Link } from "react-router-dom";
import "./Header.scss";

interface NavigationPaths {
  name: string;
  path: string;
}

const navPaths: NavigationPaths[] = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "über uns", path: "/about-us" },
  { name: "Kontakt", path: "/contact" },
];

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={CompanyLogo} alt={"Firmenlogo"} />
      </Link>
      <ul className="header__nav">
        {navPaths.map((navPath) => {
          return (
            <li key={navPath.name}>
              <Link className="nav__item" to={navPath.path}>
                {navPath.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
