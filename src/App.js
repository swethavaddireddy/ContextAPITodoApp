import TodoForm from "./components/NewTodo/TodoForm";
import './App.css';
import TodoList from "./components/TodoList/TodoList";


function App() {


  // const deleteTodoHandler = (todoItem) => {
  //   todoItem.completed ? setCompletedTodos(completedTodos.filter((todo) => todo.id !== todoItem.id)) :
  //     setTodoList(todoList.filter(todo => todo.id !== todoItem.id))
  // }

  // const completedTodo = (completeTodo) => {
  //   setCompletedTodos([...completedTodos, completeTodo])
  //   setTodoList(todoList.filter(todo => todo.id !== completeTodo.id))
  // }

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
