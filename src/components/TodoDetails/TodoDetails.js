import React from 'react'
import { Trash } from 'react-bootstrap-icons';
import { Check } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import './TodoDetails.css';

const TodoDetails = ({ todo, deletedTodo, completedTodo }) => {

    const deletedTodoHandler = (todo) => {
        deletedTodo(todo);
    }

    const completeTodoHandler = (todo) => {
        completedTodo(todo);
    }
    return (
        <div className='list_details' key={todo.id}>
            <div className='list_item'>
                <h3>{todo.name}</h3>
                <span key={todo.id}>{todo.description}</span>
            </div>
            <div className='list_btns'>
                <button onClick={() => deletedTodoHandler(todo)} className='trash'><Trash /></button>
                <button className='edit'><PencilSquare /></button>
                {!todo.completed ? <button onClick={() => completeTodoHandler(todo)} className='check'><Check /></button>
                    :
                    <button disabled onClick={() => completeTodoHandler(todo)} className='check'><Check /></button>
                }

            </div>
        </div>
    )
}

export default TodoDetails
