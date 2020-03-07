import React from 'react';

//ES6 Destructuring
const TodoItem = ({ todo, handleComplete }) => (
    <tr className="tr-item">
        <td>{todo.id}</td>
        <td>{todo.description}</td>
        <td onClick={() => handleComplete(todo.id - 1)}>{todo.completed ? 'YES' : 'NO'}</td>
    </tr>
);

export default TodoItem;
