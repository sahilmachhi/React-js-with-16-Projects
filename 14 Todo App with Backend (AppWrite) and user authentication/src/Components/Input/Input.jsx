import { forwardRef } from "react";

const InputBox = forwardRef((props, ref) => {
  return (
    <>
      <input type="text" className="px-4 py-2 bg-red-200" ref={ref} />
    </>
  );
});

InputBox.displayName = "InputBox";

export default InputBox;
