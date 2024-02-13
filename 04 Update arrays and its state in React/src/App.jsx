import { useState } from "react";
import StateUpdate from "./StateUpdate";

function App() {
  return (
    <>
      <StateUpdate></StateUpdate>
      <input type="text" />
      <button>add</button>
      <button>remove</button>
    </>
  );
}

export default App;
