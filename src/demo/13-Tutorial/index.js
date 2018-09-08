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
  // n is the item index in an array
  renderSquare(n, location) {
    return (
        <Square
          key={n}
          value={this.props.squares[n]}
          onClick={() => this.props.onClick(n, location)}
        />
      );
  }

  render() {
    let n = 0;
    let board, row;

    board = [];
    for (let i = 0; i < 3; i++) {
      row = [];
      for (let j = 0; j < 3; j++, n++) {
        let location = `(${i + 1}, ${j + 1})`;
        row = [
          ...row,
          this.renderSquare(n, location)
        ];
      }
      board = [
        ...board,
        <div className="board-row" key={i}>{row}</div>
      ];
    }

    return (
      <div className='board-pad'>{board}</div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        move: {
          player: null,
          location: null
        },
        when: null
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i, location) {
    // Q：为什么需要加1？ A: 因为slice()不包括末尾下边的item

    // 这里的handleClick有两种情况
    // 一：连续的点击，没有点击time travel
    // 二：点击了time travel，再来下棋
    // 不管哪一种情况，都是根据stepNumber来更新history，
    // 如果是连续的下棋，则正常创建新的squares记录，concat到原先的history中
    // 如果有新的点击，则会根据当前的stepNumber来创建新的squares记录，在该步骤之前的历史步骤记录就会被抛弃，这里通过slice到stepNumber + 1的位置来实现
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
        squares,
        move: {
          player: squares[i],
          location: location
        },
        when: Date.now()
      }]),
      // 点击时，同时更新stepNumber的值，这里的history是上面slice()的结果，还没有添加新的square的history，相比之前相当于+1
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
      let stepClassNames = 'step';

      if (move === this.state.stepNumber) {
        // 注意有一个空格--> ↓
        stepClassNames += ' current-step';
      }

      const desc = move?
        `${step.move.player} moved to ${step.move.location}`:
        'Game start';

      return (
        <li key={step.when}>
          <a href='#' className={stepClassNames} onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    });

    let status;
    const nextPlayer = this.state.xIsNext? 'X': 'O';

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + nextPlayer;
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <div>{status}</div>
          <br/>
          <Board
            squares={current.squares}
            onClick={(i, location) => this.handleClick(i, location)}
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