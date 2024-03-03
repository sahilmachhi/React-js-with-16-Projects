import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Login/Login";
import Data from "./Data/Data";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Data />
    </UserContextProvider>
  );
}

export default App;
