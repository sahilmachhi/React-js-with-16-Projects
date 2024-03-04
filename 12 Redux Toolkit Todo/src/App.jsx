import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

import { store } from "./App/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <h1>hello redux toolkit</h1>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;
