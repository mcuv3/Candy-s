import React, { useState } from "react";
import classes from "./Dulce.css";
import Imagen from "../UI/Imagen/Imagen";
import Boton from "../UI/Boton/Boton";
import axios from "../../axios-dulce";

const Dulce = (props) => {
  const [estadoDulce, setDulce] = useState(props.dulce.disponible);
  const [error, setError] = useState(false);

  const cambiarStatusDulce = () => {
    axios
      .post("cambiar-disponiblidad", { _id: props.dulce._id })
      .then((res) => {
        setDulce(!estadoDulce);
      })
      .catch((err) => {
        setError(err.response.data.err);
      });
  };

  return (
    <div className={classes.Dulce}>
      <div className={classes.Image}>
        <Imagen url={props.dulce.imageURL} alt="Imagen de Un Dulce" />
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
      {props.admin && (
        <div className={classes.Boton}>
          <Boton click={cambiarStatusDulce} estilo={estadoDulce}>
            {estadoDulce ? (error ? error : "Disponible") : "No Disponible"}
          </Boton>
        </div>
      )}
    </div>
  );
};

export default Dulce;
