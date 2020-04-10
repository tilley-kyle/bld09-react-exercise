import React from 'react';
import '../app/App.css'

const Todo = (props) => (
  <div>
    <h2 className="description" onClick={() => props.clicky(props.listItem)}>{props.listItem.description} </h2>
  </div>
);

export default Todo;