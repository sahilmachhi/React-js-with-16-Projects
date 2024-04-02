import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    todoID: null,
    todoTitle: null,
    todoComplete: false
},]

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        showTodo: () => { console.log("showTodo Triggered") },
        deleteTodo: () => { },
        addTodo: () => { },
        todoComplete: () => { }
    }
})

export default todoSlice.reducer
export const { showTodo, deleteTodo, addTodo, todoComplete } = todoSlice.actions