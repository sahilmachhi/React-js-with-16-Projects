import React from "react";
let numbers = [1, 5, 4, 56, 345, 24, "sahil"];
function Ul() {
  return (
    <div>
      <h1>Array Display Example</h1>
      <ul>
        {numbers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ul;
