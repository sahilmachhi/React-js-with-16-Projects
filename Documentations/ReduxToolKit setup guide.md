few things to understand before setting up things

store => store is basically a global state it stores data its like database for frontend

step 1 => create a js file which which can setup as store first import `configureStore` from `reduxtoolkit` export configureStore by holding in variable

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({});
```
