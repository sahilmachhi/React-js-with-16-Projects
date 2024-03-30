import { useRef, useEffect } from "react";

function Inputbox() {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={input} />
      <button>submit</button>
    </>
  );
}

export default Inputbox;
