import { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Inputbox() {
  const [inputText, setInputText] = useState("");
  const input = useRef(null);
  function handleClick() {
    console.log(input.current.value);
    setInputText(input.current.value);
  }
  return (
    <>
      <Input ref={input} />
      <Button click={handleClick} />
      <h1>{inputText}</h1>
    </>
  );
}

export default Inputbox;
