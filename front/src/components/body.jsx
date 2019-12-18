import React, { useContext } from "react";
import StateContext from "../context";

const Body = props => {
  return <div className="container bg-light">{props.children}</div>;
};

export default Body;
