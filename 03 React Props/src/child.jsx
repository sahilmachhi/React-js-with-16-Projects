import React from "react";
import Ul from "./ul";
function Child(props) {
  return (
    <div>
      <h1>
        hello im {props.name} and i clicked {props.clicks} times
      </h1>
      <Ul></Ul>
    </div>
  );
}

export default Child;
