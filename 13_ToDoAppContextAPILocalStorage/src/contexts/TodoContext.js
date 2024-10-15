import React, {createContext, useContext} from "react";

//creating a context with using createContext method
export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todoTask: "Prepare for an Interview",
            completed: false,
        }
    ],
    addTodo: (todoTask) => {},
    updateTodo: (id, todoTask) => {},
    deleteTodo: (id) => {},
    todoCheckedCompleted: (id) => {}
})


export const useTodo = () => {
    //while using useContext make sure it has passed some context
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider
