import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let formControl;
  switch (props.type) {
    case "input":
      formControl = (
        <input
          className={classes.Input}
          value={props.value}
          onChange={props.change}
          {...props.config}
        />
      );
      break;
    case "textarea":
      formControl = (
        <textarea
          className={[classes.Input, classes.textarea].join(" ")}
          value={props.value}
          onChange={props.change}
          {...props.config}
        />
      );
      break;
    case "select":
      formControl = (
        <select
          value={props.value}
          onChange={props.change}
          className={classes.Input}
        >
          {props.config.options.map((option) => {
            return (
              <option value={option.value} key={option.value}>
                {option.value}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      formControl = (
        <input
          className={classes.Input}
          value={props.value}
          onChange={props.change}
          {...props.config}
        />
      );
      break;
  }

  return formControl;
};

export default input;
