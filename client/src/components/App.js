import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

import Todos from '../apollo-containers/query/Todos';
import AddTodo from '../apollo-containers/mutation/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h2>Todo Example</h2>
          <AddTodo/>
          <Todos/>
        </div>
      </div>
    );
  }
}

export default App;
