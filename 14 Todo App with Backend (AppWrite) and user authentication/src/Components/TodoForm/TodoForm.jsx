import Button from "../Button/Button";
import InputBox from "../Input/Input";
import { AddTodo } from "../../AppwriteTodoData/AddTodo";
function TodoForm() {
  return (
    <>
      <form action="todoAdd" className="overflow-hidden rounded-2xl w-min flex">
        <InputBox />
        <Button btnText="Submit" />
      </form>
    </>
  );
}

export default TodoForm;
