import ConfigureStore from "@reduxjs/toolkit"
import todoSlice from "./Slice"

export const store = ConfigureStore({
    reducer: {
        todos: todoSlice,
    },
})