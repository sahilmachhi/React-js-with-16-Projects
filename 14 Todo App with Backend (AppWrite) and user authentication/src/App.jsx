import Hero from "./Components/Hero/Hero";
import { SignIn } from "./AppwriteBackend/Signin";

function App() {
  SignIn("asdasd@gmail.com", "sdasdh@gmail.com", "sadfhgasjdhs");
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
