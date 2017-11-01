import React, { Component } from 'react';
import Deck from './helpers/Deck.js';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.setState({
      deck: new Deck()
    });
  }
  render() {
    const deck = this.state.deck;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Playing Cards</h1>
          <p>
            Object Oriented Programming and Templating in JavaScript
           </p>
        </header>
        {JSON.stringify(deck)}
      </div>
    );
  }
}

export default App;
