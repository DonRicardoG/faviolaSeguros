import React from "react";
import style from "./Error.module.css";

const Error = (props) => {
  console.log(props.children);
  return <div className={style.error}>{props.children}</div>;
};

export default Error;
