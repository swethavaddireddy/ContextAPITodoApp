export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload),
                completedTodos: state.completedTodos.filter(todo => todo.id !== action.payload)
            }

        case 'COMPLETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload.id),
                completedTodos: [...state.completedTodos, action.payload]
            }
        default:
            return state;
    }
}