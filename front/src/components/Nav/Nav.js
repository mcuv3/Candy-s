import React from "react";
import classes from "./Nav.css";
import Logo from "./Logo/logo";
import NavigationItem from "./NavItems/NavItem";

const Nav = (props) => {
  return (
    <div className={classes.Nav}>
      <Logo />
      <div className="">
        <NavigationItem path="/dulces">Dulces</NavigationItem>
        <NavigationItem path="/agregar-dulce">Agregar Dulce</NavigationItem>
      </div>
    </div>
  );
};

export default Nav;
