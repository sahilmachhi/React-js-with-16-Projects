import { MdDelete } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";

import { ID } from "appwrite";

const todos = [
  {
    id: 1,
    title: "todo1",
    todoDone: true,
    isLoding: "done",
  },
  {
    id: 2,
    title: "todo1",
    todoDone: false,
    isLoding: "loading",
  },
  {
    id: 3,
    title: "todo1",
    todoDone: true,
    isLoding: "notDone",
  },
  {
    id: 4,
    title: "todo1",
    todoDone: false,
    isLoding: "loading",
  },
  {
    id: 5,
    title: "todo1",
    todoDone: true,
    isLoding: "notDone",
  },
];
function Todo() {
  let content;
  switch (todos.isLoding) {
    case "done":
      return (content = "<p>not done</p>");
      break;
    case "loading":
      return (content = "<p>not done</p>");
      break;
    case "notDone":
      return (content = "<p>not done</p>");
      break;
    default:
      break;
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="bg-red-500 w-9/12 mx-auto px-2 py-4" key={todo.id}>
            <div className="flex items-center justify-between">
              {todo.todoDone ? <IoIosCheckbox /> : <RiCheckboxBlankLine />}
              <h1 className="text-3xl font-mono text-white">{todo.title}</h1>
              <MdDelete className="size-9" />
              {content}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
