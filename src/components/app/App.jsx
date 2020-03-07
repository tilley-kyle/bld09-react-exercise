import React from 'react';

import TodoList from '../todo-list/TodoList';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, description: 'Stop students from using var.', completed: false },
        { id: 2, description: 'Fix asynchronous swim.', completed: false },
        { id: 3, description: 'Use only arrow functions.', completed: true },
        { id: 4, description: 'Create a React exercise.', completed: true }
      ]
    }
  }

  render() {
    // ES6 destructuring
    const { todos } = this.state;

    return (
      <div className="app">
        <TodoList
          todos={todos}
        />
      </div>
    );
  }
}
export default App;
