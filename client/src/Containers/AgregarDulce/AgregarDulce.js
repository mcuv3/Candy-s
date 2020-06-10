import React, { useState } from "react";
import classes from "./AgregarDulce.css";
import Input from "../../components/UI/Input/input";
import Boton from "../../components/UI/Boton/Boton";
import axios from "../../axios-dulce";
import Message from "../../components/UI/Message/Message";

const AgregarDulce = (props) => {
  const [form, setForm] = useState({
    Nombre: {
      elemento: "input",

      config: {
        placeholder: "Nombre del Dulce",
        required: true,
        type: "text",
      },
      value: "",
      error: null,
    },
    Descripcion: {
      elemento: "textarea",

      config: {
        placeholder: "Descripción ....",
        required: true,
        type: "text",
      },
      value: "",
      error: null,
    },
    Seccion: {
      elemento: "select",
      config: {
        options: [
          { value: "Gomitas" },
          { value: "Chocolates" },
          { value: "Confitados" },
          { value: "Paletas" },
        ],
      },
      value: "Gomitas",
      error: null,
    },
    Precio: {
      elemento: "input",
      config: {
        placeholder: "Precio por kg (MXN)",
        required: true,
        type: "number",
      },
      value: "",
      error: null,
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

    axios
      .post("/agregar-dulce", dulce)
      .then((res) => {
        console.log(res.data);
        props.history.push("/dulces");
      })
      .catch((err) => {
        const newForm = {
          Nombre: {
            ...form.Nombre,
            error: null,
          },
          Descripcion: {
            ...form.Descripcion,
            error: null,
          },
          Seccion: {
            ...form.Seccion,
            error: null,
          },
          Precio: {
            ...form.Precio,
            error: null,
          },
        };
        err.response.data.errors.map((error) => {
          return (newForm[error.param].error = error.msg);
        });
        setForm(newForm);
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
            <React.Fragment key={formControl.key}>
              <Input
                type={formControl.values.elemento}
                value={formControl.values.value}
                change={(e) => change(e, formControl.key)}
                config={formControl.values.config}
              />
              {formControl.values.error && (
                <Message type="error">{formControl.values.error}</Message>
              )}
            </React.Fragment>
          );
        })}
        <div className={classes.Boton}>
          <Boton type="submit">Agregar Dulce</Boton>
        </div>
      </form>
    </div>
  );
};

export default AgregarDulce;
