import React from 'react';

import Header from '../header/Header';
import TodoItem from '../todo-item/TodoItem';

import './TodoList.css';

                // ES6 Destructuring now we can access todos prop with
                // just todos rather than props.todos
const TodoList = ({ todos, handleComplete }) => (
    <section>
        <Header />
        <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Description</th>
                        <th>Completed</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                   {todos.map(todo => (
                       <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleComplete={handleComplete}
                       />
                   ))}
                </tbody>
            </table>
        </div>
    </section>
);

export default TodoList;
