import React from "react";
import classes from "./Boton.css";

const Boton = (props) => {
  const estilo = props.estilo ? classes.Disponible : classes.NoDisponible;
  return (
    <button className={estilo} type={props.type} onClick={props.click}>
      {props.children}
    </button>
  );
};

export default Boton;
