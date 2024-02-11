import React from "react";
import Child from "./child";
import { useState } from "react";

function Parent() {
  const [click, setCLick] = useState(0);
  function tap() {
    setCLick(click + 1);
    console.log("clicked");
  }
  return (
    <div>
      <Child name="sahil" clicks={click} />
      <button onClick={tap}>tap to count Click</button>
    </div>
  );
}

export default Parent;
