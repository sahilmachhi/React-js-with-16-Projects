import React from "react";
import Ul from "./ul";


function Child({name , clicks}) {

  return (
    <div>
      <h1>
        hello im {name || "name"} and i clicked {clicks} times
      </h1>
      <Ul newname = "Whonix"></Ul>
    </div>
  );
}

export default Child;
