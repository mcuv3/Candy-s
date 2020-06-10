import React from "react";
import classes from "./Boton.css";

const Boton = (props) => {
  return (
    <button className={classes.Boton} type={props.type} onClick={props.click}>
      {props.children}
    </button>
  );
};

export default Boton;
