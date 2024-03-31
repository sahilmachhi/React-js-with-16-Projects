import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputbox from "./Components/Inputbox";

// what is useRef => you can directly manuplate the
function App() {
  return (
    <>
      <Inputbox />
    </>
  );
}

export default App;
