import React, { Component } from 'react';
import './App.css';
import 'reset-css';
import TodoList from './todoList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/countries")
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  // render() {
  //   return (
  //     <div className="App">
  //       {this.state.countries.map(country => <h1>{country.name.common}</h1>)}
  //     </div>
  //   );
  // }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <TodoList></TodoList>
        </header>
      </div>
    );
  }
}

export default App;
