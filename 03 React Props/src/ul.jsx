import React from "react";
let numbers = [1, 5, 4, 56, 345, 24, "Dilipkumar"];
function Ul(props) {
  // when you cl props without passing value it return empty object to console.log
  console.log("props:" ,props);
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
