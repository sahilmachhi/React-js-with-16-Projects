import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  let [Password, setPassword] = useState("");
  let [length, setLength] = useState(8);
  let [numcheck, setNumcheck] = useState(false);
  let [charcheck, setCharcheck] = useState(false);

  const GeneratePassword = useCallback(() => {
    // useCallback is a React hook that is used to memoize functions, especially in scenarios where you want to avoid unnecessary re-creation of functions during re-renders. It is particularly beneficial when passing functions as props to child components.

    Password = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_-+=<>?/";

    if (numcheck === true) {
      letters = letters + numbers;
    }
    if (charcheck === true) {
      letters = letters + symbols;
    }
    if (numcheck && charcheck === true) {
      letters = letters + symbols + numbers;
    }

    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      Password += letters.charAt(randomIndex);
    }
    setPassword(Password);
    // here"s dependency array which tells which on function should useCallback work
  }, [length, numcheck, charcheck]);

  useEffect(() => {
    // useEffect is a hook that allows functional components to perform side effects. Side effects are operations that happen outside the normal flow of a function, such as data fetching, subscriptions, or manually changing the DOM.

    GeneratePassword();
  }, [length, numcheck, charcheck]);

  console.log(Password);

  let passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    // in Next JS there's no window object because NextJS exicutes code in server and server don't have window object
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            ref={passwordRef}
            value={Password}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-950"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numcheck}
              onChange={() => {
                setNumcheck((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charcheck}
              onChange={() => {
                setCharcheck((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
