import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navitem.css";

const NavItem = (props) => {
  return (
    <NavLink
      to={props.path}
      className={classes.link}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  );
};

export default NavItem;
