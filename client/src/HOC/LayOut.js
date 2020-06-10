import React from "react";
import Nav from "../components/Nav/Nav";
import classes from "./LayOut.css";

const LayOut = (props) => {
  return (
    <div className={classes.LayOut}>
      <Nav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default LayOut;
