import React, { useEffect, useState } from "react";
import axios from "../../axios-dulce";
import Dulce from "../../components/Dulce/Dulce";
import classes from "./Dulces.css";

const Dulces = (props) => {
  const [dulces, setDulces] = useState([]);

  useEffect(() => {
    axios.get("dulces").then((res) => {
      console.log(res);
      setDulces(res.data.dulces);
    });
  }, []);

  return (
    <div className={classes.Dulces}>
      {dulces.map((dulce) => {
        return <Dulce key={dulce._id} dulce={dulce} />;
      })}
    </div>
  );
};

export default Dulces;
