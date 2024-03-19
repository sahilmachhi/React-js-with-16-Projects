import Hero from "./Components/Hero/Hero";
import { AddTodo } from "./AppwriteTodoData/AddTodo";
import { signin } from "./AppwriteBackend/Login";
function App() {
  signin();
  AddTodo();

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
