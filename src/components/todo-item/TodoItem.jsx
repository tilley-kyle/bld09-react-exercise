import React from 'react';

//ES6 Destructuring
const TodoItem = ({ todo }) => (
    <tr>
        <td>{todo.id}</td>
        <td>{todo.description}</td>
        <td>{todo.completed ? 'YES' : 'NO'}</td>
    </tr>
);

export default TodoItem;
