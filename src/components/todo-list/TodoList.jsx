import React from 'react';

import Header from '../header/Header';
import TodoItem from '../todo-item/TodoItem';

import './TodoList.css';

                // ES6 Destructuring now we can access todos prop with
                // just todos rather than props.todos
const TodoList = ({ todos }) => (
    <section>
        <Header />
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Description</th>
                        <th>Completed</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                   {todos.map(todo => (
                       <TodoItem
                          todo={todo}
                       />
                   ))}
                </tbody>
            </table>
        </div>
    </section>
);

export default TodoList;
