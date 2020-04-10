import React from 'react';
import Header from '../header/Header';
import './App.css';
import TodoList from '../TodoList/TodoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Kyle',
      todos: [
        { id: 1, description: 'Stop students from using var.', completed: false },
        { id: 2, description: 'Fix asynchronous swim.', completed: false },
        { id: 3, description: 'Use only arrow function.', completed: false },
        { id: 4, description: 'Create a React exercise.', completed: true }
      ]
    }
  }

  handleOnClick(e) {
    this.state.todos.forEach((element) => {
      if (element.id === e.id) {
        this.setState({
          todos[element]:
        })
      }
    })

    console.log(e.id);
    console.log(this.state.todos[0].id)
  }

  render() {
    return (
      <div>
        <div className="app">
          <Header user={this.state.user}/>
        </div>
        <div className="TodoList">
          <TodoList todos={this.state.todos} clicky={this.handleOnClick.bind(this)} />
        </div>
      </div>
    );
  }
}
export default App;
