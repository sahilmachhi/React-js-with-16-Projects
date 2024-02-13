import { useState } from "react";

let array = ["sahil", "rahil", "shailee"];
function StateUpdate() {
  const [state, setState] = useState();
  function remove() {
    array.pop();
    console.log(array);
    state(setState - array.pop);
  }
  return (
    <>
      <div>
        {array.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </div>
      <button onClick={remove}>delete</button>
    </>
  );
}

export default StateUpdate;
