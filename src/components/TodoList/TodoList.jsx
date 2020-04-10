import React from 'react';
import Todo from '../Todos/Todo.jsx';
import '../app/App.css'

const TodoList = (props) => (
  <ul className="list">
    {props.todos.map((item) =>
      <li key={item.id} className="list-elements"><Todo listItem={item} clicky={props.clicky}/></li>
  )}
  </ul>
)

export default TodoList