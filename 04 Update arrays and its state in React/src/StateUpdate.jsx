import { useState } from "react";
let newName = "dilipkumar";
let array = ["sahil", "rahil", "shailee"];
function StateUpdate() {
  let [state, setState] = useState(array);
  function remove() {
    state = array.pop();
    setState(state);
  }
  function add() {
    state = array.push(newName);
    setState(state);
  }
  return (
    <>
      <div>
        {array.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </div>
      <input type="text" />
      <button onClick={remove}>delete</button>
      <button onClick={add}>add</button>
    </>
  );
}

export default StateUpdate;
