import { createSlice } from "@reduxjs/toolkit";
import { ShowTodo } from "../AppwriteTodoData/ShowTodo"
const initialState = {
    todoData: [],
    isLoading: true,
    isError: false,
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        showTodo: () => {
            const response = ShowTodo()
            console.log("console logged from slice:", response)

        },
        deleteTodo: () => { },
        addTodo: () => { },
        todoComplete: () => { }
    },
    extraReducers: (builder) => {
        builder.addCase(ShowTodo.fullfilled, (state, action) => {
            state.isLoading = false;
            state.todoData = action.payload;
        })
        builder.addCase(ShowTodo.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(ShowTodo.rejected, (state, action) => {
            console.log("error", action.payload)
            state.isError = true;
        })
    }
})

export default todoSlice.reducer
export const { showTodo, deleteTodo, addTodo, todoComplete } = todoSlice.actions