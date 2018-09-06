import React from 'react';
import './index.css';

function Title() {
  return <h1>Tutorial</h1>
}

class Square extends React.Component {
  render() {
    return (
      <button className='square'>
        {/*todo*/}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board/>
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{/*todo*/}</ol>
        </div>
      </div>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <Game/>
    </div>
  )
}

export default Demo;