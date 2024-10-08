import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./Slice"

export const store = configureStore({
    reducer: {
        todos: todoSlice,
    },
})