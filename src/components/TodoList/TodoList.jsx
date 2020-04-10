import React from 'react';

const TodoList = (props) => (
  props.todos.map((itme) =>
    <ul>
      <li>each list element</li>
    </ul>
  )
)

export default TodoList