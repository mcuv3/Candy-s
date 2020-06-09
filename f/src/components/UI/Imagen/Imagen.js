import React from "react";
import classes from "./Imagen.css";

const Imagen = (props) => {
  return <img className={classes.Imagen} src={props.url} alt={props.alt} />;
};

export default Imagen;
