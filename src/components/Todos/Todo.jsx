import React from 'react';
import './Todo.css'

const Todo = (props) => (
  <div>
    <h2 className="description">{props.listItem.description} </h2>
  </div>
);

export default Todo;