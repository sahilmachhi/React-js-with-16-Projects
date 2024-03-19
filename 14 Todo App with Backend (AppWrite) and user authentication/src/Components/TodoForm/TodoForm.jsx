import Button from "../Button/Button";
import Input from "../Input/Input";

function TodoForm() {
  return (
    <>
      <form action="todoAdd" className="overflow-hidden rounded-2xl w-min flex">
        <Input />
        <Button btnText="Submit" />
      </form>
    </>
  );
}

export default TodoForm;
