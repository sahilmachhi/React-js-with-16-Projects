import React from "react";
import { useState } from "react";
function ColorContainer({ onColorChange }) {
  let [childColor, setChildColor] = useState("white");

  const handleColorChange = (color) => {
    setChildColor(color);
    onColorChange(color);
  };
  return (
    <>
      <div className="fixed bottom-8 w-[25rem] mx-auto left-0 right-0 flex justify-center items-center list-none gap-4 bg-slate-100 rounded-lg px-5 py-1">
        <li
          className="bg-red-500 rounded-md p-2"
          onClick={() => handleColorChange("red")}
        >
          red
        </li>
        <li
          className="bg-black rounded-md p-2"
          onClick={() => handleColorChange("black")}
        >
          black
        </li>
        <li
          className="bg-green-500 rounded-md p-2"
          onClick={() => handleColorChange("green")}
        >
          green
        </li>
        <li
          className="bg-yellow-500 rounded-md p-2"
          onClick={() => handleColorChange("yellow")}
        >
          Yellow
        </li>
        <li
          className="bg-pink-500 rounded-md p-2"
          onClick={() => handleColorChange("pink")}
        >
          pink
        </li>
        <li
          className="bg-blue-500 rounded-md p-2"
          onClick={() => handleColorChange("blue")}
        >
          blue
        </li>
      </div>
    </>
  );
}

export default ColorContainer;
