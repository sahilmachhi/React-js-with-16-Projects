// import { AddTodo } from "../../AppwriteTodoData/AddTodo";
import { useDispatch } from "react-redux";
import { showTodo } from "../../Store/Slice";
function AddTodoForm() {
  const dispatch = useDispatch();
  function submitData() {
    // AddTodo("anything");
    dispatch(showTodo());
    console.log("submit data done");
  }
  return (
    <>
      <button onClick={submitData}>submit data</button>
    </>
  );
}

export default AddTodoForm;
