import React from "react";
import { NavLink, Link } from "react-router-dom";
import routes from "../routes.js";

const Navigation = () => {
  return (
    <header className="App-header">
      <Link to="/qwe">qwe</Link>
      <NavLink
        exact
        to={routes.home}
        className="Navigation-link"
        activeClassName="Navigation-link-active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.shows}
        className="Navigation-link"
        activeClassName="Navigation-link-active"
      >
        Shows
      </NavLink>
    </header>
  );
};

export default Navigation;
