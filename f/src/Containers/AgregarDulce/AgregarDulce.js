import React, { useState } from "react";
import classes from "./AgregarDulce.css";
import Input from "../../components/UI/Input/input";
import Boton from "../../components/UI/Boton/Boton";
import axios from "../../axios-dulce";

const AgregarDulce = (props) => {
  const [form, setForm] = useState({
    Nombre: {
      tipo: "texto",
      config: {
        placeholder: "Nombre del Dulce",
        required: true,
      },
      value: "",
    },
    Descripcion: {
      tipo: "texto",
      config: {
        placeholder: "Descripcion",
        required: true,
      },
      value: "",
    },
    Seccion: {
      tipo: "texto",
      config: {
        placeholder: "Seccion",
        required: true,
      },
      value: "",
    },
    Precio: {
      tipo: "number",
      config: {
        placeholder: "Precio por kg (MXN)",
        required: true,
      },
      value: "",
    },
  });
  const change = (e, key) => {
    e.preventDefault();
    const newForm = { ...form };
    newForm[key].value = e.target.value;
    setForm(newForm);
  };
  const agregarDulce = (e) => {
    e.preventDefault();
    const dulce = {
      Nombre: form.Nombre.value,
      Descripcion: form.Descripcion.value,
      Seccion: form.Seccion.value,
      Precio: +form.Precio.value,
    };

    axios.post("/agregar-dulce", dulce).then((res) => {
      props.history.push("/dulces");
    });
  };

  const formValues = [];

  for (let key in form) {
    formValues.push({ key, values: { ...form[key] } });
  }

  return (
    <div className={classes.Formulario}>
      <form onSubmit={agregarDulce}>
        <h1>Agrega Un Dulce</h1>
        {formValues.map((formControl) => {
          return (
            <Input
              key={formControl.key}
              value={formControl.values.value}
              change={(e) => change(e, formControl.key)}
              config={formControl.values.config}
            />
          );
        })}
        <Boton type="submit">Agregar Dulce</Boton>
      </form>
    </div>
  );
};

export default AgregarDulce;
