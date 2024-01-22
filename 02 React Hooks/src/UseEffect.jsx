import { useEffect, useState } from "react";

function UseEffect() {
  let [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1);
    console.log(count);
    return;
  }

  useEffect(() => {
    console.log("clicked");
  }, [count]);

  return (
    <>
      <button onClick={counter}>Click to update state</button>
    </>
  );
}

export default UseEffect;
