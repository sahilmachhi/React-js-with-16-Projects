import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    todoTitle: null,
    todoDes: null,
    todoComplete: false
},]

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

    }
})

export default todoSlice.reducer