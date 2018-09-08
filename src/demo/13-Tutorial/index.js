import React from 'react';
import './index.css';

function Title() {
  return <h1>Tutorial</h1>
}

function Square(props) {
  return (
    <button
      className='square'
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

class Board extends React.Component {
  renderSquare(i) {
    return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
  }

  render() {
    return (
      <div className='board-pad'>
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
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    // Q：为什么需要加1？ A: 因为slice()不包括末尾下边的item
    // 这里的handleClick有两种情况
    // 一：连续的点击，没有点击time travel
    // 二：点击了time travel，再来下棋
    // 不管哪一种情况，都是根据stepNumber来更新history
    const history = this.state.history.slice(0 , this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // 如果其中的内容不是null，或者已经决出胜者，则不执行下方的setState()操作
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext? 'X': 'O';

    this.setState({
      history: history.concat([{
        squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  // 点击相应的下棋步骤，修改stepNumber，从而改变传给Board的squares
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    // ↓ stepNumber影响渲染的下棋步骤列表
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // step是item， move是index
    const moves = history.map((step, move) => {
      const desc = move?
        'Go to move #' + move:
        'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext? 'X': 'O');
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <div>{status}</div>
          <br/>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className='game-history-header'>Game History</div>
          <ol>{moves}</ol>
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