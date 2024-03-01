import ColorContainer from "./ColorContainer";
import { useEffect, useState } from "react";
function App() {
  let colors = "black";
  let [color, setColor] = useState("");
  let handleChildDataChange = (data) => {
    setColor(data);
  };
  const bodyColor = { backgroundColor: `${color}` };
  return (
    <>
      <div className="w-screen h-screen relative" style={bodyColor}>
        <ColorContainer onColorChange={handleChildDataChange}></ColorContainer>
      </div>
    </>
  );
}

export default App;
