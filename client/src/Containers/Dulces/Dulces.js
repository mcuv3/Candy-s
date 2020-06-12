import React, { useEffect, useState } from "react";
import axios from "../../axios-dulce";
import Dulce from "../../components/Dulce/Dulce";
import classes from "./Dulces.css";
import LoadingBar from "../../components/UI/LoadingBar/LoadingBar";

const Dulces = (props) => {
  const [dulces, setDulces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("dulces")
      .then((res) => {
        setLoading(false);
        setDulces(res.data.dulces);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.err);
      });
  }, []);

  if (error) {
    return <h1 style={{ textAlign: "center" }}>{error}</h1>;
  }

  return (
    <>
      {loading && <LoadingBar />}
      <div className={classes.Dulces}>
        {dulces.map((dulce) => {
          if (props.admin) return <Dulce key={dulce._id} dulce={dulce} admin />;
          else if (dulce.disponible)
            return <Dulce key={dulce._id} dulce={dulce} />;
        })}
      </div>
    </>
  );
};

export default Dulces;
