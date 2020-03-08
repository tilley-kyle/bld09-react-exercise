import React from 'react';

import './TodoItem.css';

//ES6 Destructuring
const TodoItem = ({ todo, handleComplete, showModal, idx }) => (
    <tr className="tr-item">
        <td>{todo.id}</td>
        <td onClick={() => showModal(idx)}>{todo.description}</td>
        <td onClick={() => handleComplete(idx)}>{todo.completed ? 'YES' : 'NO'}</td>
    </tr>
);

export default TodoItem;
