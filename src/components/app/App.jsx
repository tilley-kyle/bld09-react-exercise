import React from 'react';

import Header from '../header/Header';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Kyle',
      todos: [
        { id: 1, description: 'Stop students from using var.', completed: false },
        { id: 2, description: 'Fix asynchronous swim.', completed: false },
        { id: 3, description: 'Use only arrow function.', completed: true },
        { id: 4, description: 'Create a React exercise.', completed: true }
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <Header user={this.state.user}/>
      </div>
    );
  }
}
export default App;
