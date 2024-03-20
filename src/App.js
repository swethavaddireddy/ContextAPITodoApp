import TodoForm from "./components/NewTodo/TodoForm";
import './App.css';
import TodoList from "./components/TodoList/TodoList";


function App() {

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
