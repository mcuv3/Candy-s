import React from "react";
import classes from "./Boton.css";

const Boton = (props) => {
  return (
    <button className={classes.Boton} type={props.type}>
      {props.children}
    </button>
  );
};

export default Boton;
