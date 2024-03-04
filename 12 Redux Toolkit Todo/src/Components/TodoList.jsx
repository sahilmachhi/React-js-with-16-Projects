import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todo/todo";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>todos</div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex gap-3 items-center justify-center text-left"
        >
          {todo.text}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-600 rounded-xl px-8 py-2"
          >
            x
          </button>
        </li>
      ))}
    </>
  );
}

export default TodoList;
