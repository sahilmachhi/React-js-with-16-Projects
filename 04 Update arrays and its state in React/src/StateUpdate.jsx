import { useState } from "react";
// let newName = "dilipkumar";

let array = ["sahil", "rahil", "shailee"];

function StateUpdate(){
  let [name, setName] = useState(array)

  function add() {
    let nameId = document.getElementById("nameId").value;
console.log(nameId);
nameId = "";

// console.log(nameId);
// name = name + nameId;
// setName(name)
  }

  function remove() {

  }
  return (
    <>
      <div>
        {array.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </div>
      <input type="text" id="nameId"/>
      <button onClick={remove}>delete</button>
      <button onClick={add}>add</button>
    </>
  );
}



export default StateUpdate;
