import React from 'react';

import TodoList from '../todo-list/TodoList';
import CreateTodo from '../create-todo/CreateTodo';

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
      ],
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    //Stops the page from refreshing on form submit
    e.preventDefault();

    //Destructuring
    const { todos, text } = this.state;

    const newTodo = {
      id: todos.length + 1,
      description: text,
      completed: false
    };

    this.setState((prevState) => {
      let updatedTodos = prevState.todos;
      updatedTodos.push(newTodo);

      return { todos: updatedTodos, text: '' };
    });
  }

  render() {
    //Destructuring
    const { todos, text } = this.state;

    return (
      <div className="app">
        <TodoList
          todos={todos}
        />
        <CreateTodo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          text={text}
        />
      </div>
    );
  }
}

export default App;
