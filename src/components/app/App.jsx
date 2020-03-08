import React from 'react';

import TodoList from '../todo-list/TodoList';
import CreateTodo from '../create-todo/CreateTodo';
import Modal from '../modal/Modal';

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
      text: '',
      description: '',
      idx: 0,
      show: false
    }
  }

  handleChange = (e) => {
    //Destructuring
    const { name, value } = e.target;

    this.setState({ [name]: value });
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

  handleComplete = (idx) => {
    this.setState((prevState) => {
      let updatedTodos = prevState.todos;
      updatedTodos[idx].completed = !updatedTodos[idx].completed;

      return { todos: updatedTodos };
    });
  }

  showModal = (idx) => {
    this.setState((prevState) => (
      {
        show: !prevState.show,
        idx,
        description: idx >= 0 ? prevState.todos[idx].description : ''
      }
    ));
  }

  hideModal = (idx) => {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos;
      updatedTodo[idx].description = prevState.description;

      return { todos: updatedTodo, show: !prevState.show };
    });
  }

  render() {
    //Destructuring
    const {
      todos,
      text,
      show,
      idx,
      description
    } = this.state;

    return (
      <div className="app">
        <div className={show ? 'dim' : null}>
          <TodoList
            todos={todos}
            handleComplete={this.handleComplete}
            showModal={this.showModal}
          />
          <CreateTodo
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            text={text}
          />
        </div>
        {show ? (
          <Modal
            description={description}
            handleChange={this.handleChange}
            idx={idx}
            hideModal={this.hideModal}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
