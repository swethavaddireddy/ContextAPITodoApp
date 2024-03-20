import React, { useState } from 'react';
import './TodoList.css';
import TodoDetails from '../TodoDetails/TodoDetails';
import { TodoState } from '../Context/Context';

const TodoList = () => {

    const [checked, setChecked] = useState(false);
    const { state: { todoList, completedTodos }, dispatch } = TodoState();

    return (<>
        <div className='btn_container'>
            <button className='todo' onClick={() => setChecked(false)}>To Do</button>
            <button className='completed' onClick={() => setChecked(true)}>Completed</button>
        </div>

        {!checked ?
            (
                <div className='list_container'>
                    {todoList.map(todo => (
                        <TodoDetails todo={todo} />
                    ))}
                </div>
            ) : (
                <div className='list_container'>
                    {completedTodos.map((todo) => (
                        <TodoDetails todo={todo} />
                    ))}
                </div>
            )
        }

    </>

    )
}

export default TodoList
