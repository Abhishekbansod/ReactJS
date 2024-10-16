//createSlice and nanoid both are provided by redux 
//nanoid generates random id's
import { createSlice, nanoid } from "@reduxjs/toolkit";

//initialState can be array/object
//initialState will be having todos/n numbers of todos 
const initialState = {
    todos: [
        {id: 1, text: "Learn redux-toolkit"},
        {id: 2, text: "Learn Full stack web dvelopment"}
    ]
}

//kind of reducer
//slice takes three inputs -> name, intialState, reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //it takes two thing as input/arguments
        addTodo: (state, action) => {
            const todo = {
                //nanodid() used to generate random id value 
                //provided by redux
                id: nanoid(),
                text: action.payload
            }
            //how to update the state
            //once todo is added state needs to be updated
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //state returns the current values/todos list
            //action retuns the data 
            //filter always returns the true values
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload ? action.payload.text : action.payload)
        // }
    }
})

//beloe two steps are mandatory to export the reducers and slice
//exporting the created reducers individually
export const {addTodo, removeTodo} = todoSlice.actions

//exporting the slice as well so that we can access it inside the created store
export default todoSlice.reducer




