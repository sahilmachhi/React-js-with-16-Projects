import { AddTodo } from "../../AppwriteTodoData/AddTodo";

function AddTodoForm() {
  function submitData() {
    AddTodo("anything");
    console.log("submit data done");
  }
  return (
    <>
      <button onClick={submitData}>submit data</button>
    </>
  );
}

export default AddTodoForm;
