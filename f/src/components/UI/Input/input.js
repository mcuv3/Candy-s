import React from "react";
import classes from "./Input.css";

const input = (props) => {
  return (
    <input
      className={classes.Input}
      value={props.value}
      onChange={props.change}
      {...props.config}
    />
  );
};

export default input;
