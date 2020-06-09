import React from "react";
import classes from "./Dulce.css";
import Imagen from "../UI/Imagen/Imagen";
import Boton from "../UI/Boton/Boton";

const Dulce = (props) => {
  return (
    <div className={classes.Dulce}>
      <div className={classes.Image}>
        <Imagen url={props.dulce.imageURL} alt="Imagen Chida" />
      </div>

      <div className={classes.Info}>
        <h1>{props.dulce.Nombre}</h1>
        <p className={classes.InfoTexto}>
          Descripción: {props.dulce.Descripcion}
        </p>
        <p className={classes.InfoTexto}>Sección: {props.dulce.Seccion}</p>
        <h4>
          {" "}
          <strong>${props.dulce.Precio}(MXN) </strong> el KG
        </h4>
      </div>
      <div className={classes.Boton}>
        <Boton>Agregar</Boton>
      </div>
    </div>
  );
};

export default Dulce;
