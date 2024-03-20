import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

export const TodoContext = createContext();


const TodoContextProvider = ({ children }) => {
    const initialState = {
        todoList: [],
        completedTodos: []
    };

    const [state, dispatch] = useReducer(todoReducer, initialState)

    return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
}

export default TodoContextProvider;

export const TodoState = () => {
    return useContext(TodoContext);
}