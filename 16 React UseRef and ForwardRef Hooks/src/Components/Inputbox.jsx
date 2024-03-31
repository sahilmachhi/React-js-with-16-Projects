import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";

function Inputbox() {
  const input = useRef(null);
  function handleClick() {
    console.log(input.current.value);
  }
  return (
    <>
      <Input ref={input} />
      <Button click={handleClick} />
    </>
  );
}

export default Inputbox;
