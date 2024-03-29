import { useState } from "react";
function InputBox() {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 bg-red-200"
      />
    </>
  );
}

export default InputBox;
