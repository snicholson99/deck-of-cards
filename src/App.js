import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      row1: [
        { index: 40,  value: '2',  suit: 'D' },
        { index: 41,  value: '3',  suit: 'D' },
        { index: 42,  value: '4',  suit: 'D' },
        { index: 43,  value: '5',  suit: 'D' },
        { index: 44,  value: '6',  suit: 'D' },
        { index: 45,  value: '7',  suit: 'D' },
        { index: 46,  value: '8',  suit: 'D' },
        { index: 47,  value: '9',  suit: 'D' },
        { index: 48,  value: '10', suit: 'D' },
        { index: 49,  value: 'J',  suit: 'D' },
        { index: 50,  value: 'Q',  suit: 'D' },
        { index: 51,  value: 'K',  suit: 'D' },
        { index: 52,  value: 'A',  suit: 'D' },

        { index: 27,  value: '2',  suit: 'H' },
        { index: 28,  value: '3',  suit: 'H' },
        { index: 29,  value: '4',  suit: 'H' },
        { index: 30,  value: '5',  suit: 'H' },
        { index: 31,  value: '6',  suit: 'H' },
        { index: 32,  value: '7',  suit: 'H' },
        { index: 33,  value: '8',  suit: 'H' },
        { index: 34,  value: '9',  suit: 'H' },
        { index: 35,  value: '10', suit: 'H' },
        { index: 36,  value: 'J',  suit: 'H' },
        { index: 37,  value: 'Q',  suit: 'H' },
        { index: 38,  value: 'K',  suit: 'H' },
        { index: 39,  value: 'A',  suit: 'H' },
        
        { index: 14,  value: '2',  suit: 'S' },
        { index: 15,  value: '3',  suit: 'S' },
        { index: 16,  value: '4',  suit: 'S' },
        { index: 17,  value: '5',  suit: 'S' },
        { index: 18,  value: '6',  suit: 'S' },
        { index: 19,  value: '7',  suit: 'S' },
        { index: 20,  value: '8',  suit: 'S' },
        { index: 21,  value: '9',  suit: 'S' },
        { index: 22,  value: '10', suit: 'S' },
        { index: 23,  value: 'J',  suit: 'S' },
        { index: 24,  value: 'Q',  suit: 'S' },
        { index: 25,  value: 'K',  suit: 'S' },
        { index: 26,  value: 'A',  suit: 'S' },

        { index: 1,   value: '2',  suit: 'C' },
        { index: 2,   value: '3',  suit: 'C' },
        { index: 3,   value: '4',  suit: 'C' },
        { index: 4,   value: '5',  suit: 'C' },
        { index: 5,   value: '6',  suit: 'C' },
        { index: 6,   value: '7',  suit: 'C' },
        { index: 7,   value: '8',  suit: 'C' },
        { index: 8,   value: '9',  suit: 'C' },
        { index: 9,   value: '10', suit: 'C' },
        { index: 10,  value: 'J',  suit: 'C' },
        { index: 11,  value: 'Q',  suit: 'C' },
        { index: 12,  value: 'K',  suit: 'C' },
        { index: 13,  value: 'A',  suit: 'C' },
      ],
      row2: []
    }
  }

  shuffleCards = (row) => {
    this.setState({ row: row.sort(() => Math.random() - 0.5) })
  }
  
  drawCard = (card_index, pushingRow, receivingRow) => {
    const card = pushingRow.find(card => card.index === card_index);
    const row2 = receivingRow.concat(card);
    const row1 = pushingRow.filter(card => card.index !== card_index);
    this.setState({ row1, row2 })
  }

  sortLowToHigh = (array) => {
    this.setState({ array: array.sort((a, b) => a.index - b.index) });
  }

  render(){
    const { row1, row2 } = this.state;
    return (
      <div className="App">
        <div className="card-row">
          <h3>Row 1</h3>
          <div className="cards">
            {row1.map((card) => (
              <div key={card.index} className="card" onClick={() => this.drawCard(card.index, row1, row2)}>
                <h4>{card.value.toUpperCase()}<i>{card.suit}</i></h4>
              </div>       
            ))}
          </div>
          <div className="buttons">
            <button onClick={() => this.shuffleCards(row1)}>Shuffle</button>
            <button onClick={() => this.sortLowToHigh(row1)}>Sort Cards</button>
          </div>
        </div>
      
        <div className="card-row">
          <h3>Row 2</h3>
          <div className="cards">
            {row2.map((card) => (
              <div key={card.index} className="card">
                <h4>{card.value.toUpperCase()}<i>{card.suit}</i></h4>
              </div>
            ))}
          </div>
          {row2.length > 1 && (
            <div className="buttons">
              <button onClick={() => this.shuffleCards(row2)}>Shuffle</button>
              <button onClick={() => this.sortLowToHigh(row2)}>Sort Cards</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
