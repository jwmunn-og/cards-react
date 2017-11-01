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
    const cards = [];
    deck.cards.forEach( (card, index) => {
      const htmlElement = (
        <p key={index}>
          {card.rank} of {card.suit}
        </p>
      );
      cards.push(htmlElement);
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Playing Cards</h1>
          <p>
            Object Oriented Programming and Templating in JavaScript
           </p>
        </header>
        {cards}
      </div>
    );
  }
}

export default App;
