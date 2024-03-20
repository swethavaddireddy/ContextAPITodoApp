import React, { useState } from 'react';
import './TodoList.css';
import TodoDetails from '../TodoDetails/TodoDetails';

const TodoList = (props) => {

    const { todoList, completedTodos, deleteTodo, completedTodoHandler } = props;
    const [checked, setChecked] = useState(false);

    const deletedTodo = (todo) => {
        deleteTodo(todo)
    }
    const completedTodo = (todo) => {
        completedTodoHandler({ ...todo, completed: true });
        setChecked(true);
    }
    return (<>
        <div className='btn_container'>
            <button className='todo' onClick={() => setChecked(false)}>To Do</button>
            <button className='completed' onClick={() => setChecked(true)}>Completed</button>
        </div>
        {!checked ?
            (
                <div className='list_container'>
                    {todoList.map(todo => (
                        <TodoDetails todo={todo} deletedTodo={deletedTodo} completedTodo={completedTodo} />
                    ))}
                </div>
            ) : (
                <div className='list_container'>
                    {completedTodos.map((todo) => (
                        <TodoDetails todo={todo} deletedTodo={deletedTodo} completedTodo={completedTodo} />
                    ))}
                </div>
            )
        }

    </>

    )
}

export default TodoList
