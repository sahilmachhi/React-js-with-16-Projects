import React from "react";

function Child(props) {
  return (
    <div>
      <h1>
        hello im {props.name} and i clicked {props.clicks} times
      </h1>
    </div>
  );
}

export default Child;
