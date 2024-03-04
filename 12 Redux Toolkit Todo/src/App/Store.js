import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "../Features/Todo/todo"

export const store = configureStore({
    reducer: todoReducer
})

