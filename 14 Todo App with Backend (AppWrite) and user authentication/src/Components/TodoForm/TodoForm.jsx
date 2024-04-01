import Button from "../Button/Button";
import InputBox from "../Input/Input";
import { AddTodo } from "../../AppwriteTodoData/AddTodo";
import { useRef } from "react";

function TodoForm() {
  const inputVal = useRef(null);
  function handleSubmit() {
    AddTodo(inputVal.current.value);
    inputVal.current.value = "";
    inputVal.current.focus();
  }
  return (
    <>
      <form action="todoAdd" className="overflow-hidden rounded-2xl w-min flex">
        <InputBox ref={inputVal} />
        <Button btnText="Submit" btnFunc={handleSubmit} />
      </form>
    </>
  );
}

export default TodoForm;
