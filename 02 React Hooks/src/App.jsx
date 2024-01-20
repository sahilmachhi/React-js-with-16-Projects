import { useState } from "react"

function App() {
let [click , setClick] = useState(0);

function increment_click() {
  setClick(click + 1);

  if (click === 5) {
    setClick(click)
    alert("max 5 Clicked");
  }
}
function decrement_click() {
  setClick(click - 1);

  if (click === 0) {
    setClick(click)
    alert("min 0 clicks are allowed");
  }
}
  return (
    <>
    <h1>0 to 5 clicker</h1>
    <button onClick={increment_click}>increment</button>
    <button onClick={decrement_click}>decrement</button>
    <p>{ click }</p>
    </>
  )
}

export default App
