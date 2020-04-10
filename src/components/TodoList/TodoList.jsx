import React from 'react';
import Todo from '../Todos/Todo.jsx';
import './TodoList.css'

const TodoList = (props) => (
  <ul className="list">
    {props.todos.map((item) =>
      <li key={item.id} className="list-elements"><Todo listItem={item} /></li>
  )}
  </ul>
)

export default TodoList