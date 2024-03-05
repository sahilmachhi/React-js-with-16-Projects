useContext setup guide

====> method 1

step 1 =>
first create any file with js file extention ex "context.js"
import useContext and createContext from react
ex.

`import { createContext } from "react";`

step 2 => Use `createContext` to define your context. This object will hold the data you want to share across components. This data can be anything methods,objects,strings number etc.
and hold this `createContext` file into any `variable` and `export` it.
ex.

```jsx
export const MyContext = createContext({
  names: [],
  addName: () => {},
  deleteName: () => {},
});
```

here we exported a Object which contains `name` key , `addName` and `deleteName` Methods

step 3 => Import `MyContext` in `App.jsx` and wrape up with `<MyContext.Provider>` div and write `value` which you want to pass to the child.
ex.

```jsx
import { MyContext } from "./Contexts/Context";

function App() {
  return (
    <MyContext.Provider value={{ names, addName, deleteName }}>
      // child components
    </MyContext.Provider>
  );
}

export default App;
```

=> step 4 define method what that method can do in App.jsx create function as same name as methods which we imported from `MyContext`

```jsx
import { MyContext } from "./Contexts/Context";
import NameList from "./Components/NameList.jsx";
import Input from "./Components/Input";
import { useState } from "react";

function App() {
  const [names, setNames] = useState([]);

  const addName = (newName) => {
    setNames((prevNames) => [...prevNames, newName]);
    console.log("nameUpdated");
  };

  const deleteName = (index) => {
    setNames((prevNames) => prevNames.filter((_, i) => i !== index));
  };
  return (
    <MyContext.Provider value={{ names, addName, deleteName }}>
      <Input />
      <NameList />
    </MyContext.Provider>
  );
}

export default App;
```

=>updating values to context

=> step 5 To update Names array's value using child `input.jsx` Components import `useContext` from `react` and `MyContext` which is made by you in `Context.js`

```jsx
import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Contexts/Context";

function Input() {
  return <div></div>;
}

export default Input;
```

=> step 6 call the functions inside child component and pass the arguments to App.jsx functions

```jsx
import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Contexts/Context";

function Input() {
  const { addName } = useContext(MyContext); // we imported Method from MyContext

  const [name, setName] = useState("");

  function updateName() {
    console.log("name updated");
    addName(name); // here we passed argument to App.jsx fucntion
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
      />
      <button onClick={updateName}>add Name</button>
    </div>
  );
}

export default Input;
```

reading values from context

=> step 7 To display Names array's value using child `nameList.jsx` Components import `useContext` from `react` and `MyContext` which is made by you in `Context.js`

```jsx
import { MyContext } from "../Contexts/Context";
import { useContext } from "react";

function NameList() {
  return <></>;
}

export default NameList;
```

=> step 8 import names and deleteName method using useContext and map the names array

```jsx
import { MyContext } from "../Contexts/Context";
import { useContext } from "react";

function Names() {
  const { deleteName, names } = useContext(MyContext);
  console.log(names);

  return (
    <>
      <div>names</div>
      <div>
        {names.map((name, index) => {
          return (
            <ul>
              <li key={index}>{name}</li>
              <button onClick={() => deleteName(index)}>delete</button>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Names;
```
