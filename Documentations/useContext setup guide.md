useContext setup guide

====> method 1

step 1 =>
first create any file with js file extention ex "context.js"
import useContext and createContext from react
ex.

`import { createContext, useContext } from "react";`

step 2 => Use `createContext` to define your context. This object will hold the data you want to share across components.
and hold this `createContext` file into any `variable` and `export` it.
ex.

```jsx
export const MyContext = createContext({
  name: "Sahil",
  addName: () => {},
  deleteName: () => {},
});
```

step 3 => Import `MyContext` in `App.jsx` and wrape up with `<MyContext.Provider>` div and write `value` which you want to pass to the child.
ex.

```jsx
import { MyContext } from "./ReduxToolkit/Context";

function App() {
  return (
    <MyContext.Provider value={{ name, addName, deleteName }}>
      // child components
    </MyContext.Provider>
  );
}

export default App;
```
