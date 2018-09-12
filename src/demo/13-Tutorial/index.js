import React from 'react';
import './index.css';

function Title() {
  return <h1>Tutorial</h1>
}

function Square(props) {
  return (
    <button
      className={props.winMark? 'square square-win': 'square'}
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

    if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
      // 使符合获胜条件的一组square中的内容，高亮显示
      return {
        winner: squares[a].value,
        winningLineIndexArray: [a, b, c]
      };
    }
  }

  return null;
}

function gamemIsDraw(squares) {
  const gameResult = calculateWinner(squares);

  // 判断所有格式是否已经填满
  const allSquareIsFilled = squares.every((item) => {
    return item.value;
  });

  // 不需要9个格子填满，就可能决出胜负
  if (gameResult) {
    return gameResult;
  }

  // 需要9个格子填满，才比较好判断是否是平局
  if (allSquareIsFilled) {
    return 'This is a draw!'
  }

  return null;
}

class Board extends React.Component {
  // n is the item index in an array
  renderSquare(n, location) {
    return (
        <Square
          key={n}
          value={this.props.squares[n].value}
          winMark={this.props.squares[n].winMark}
          onClick={() => this.props.onClick(n, location)}
        />
      );
  }

  render() {
    let n = 0;
    let board = [];
    let row;

    // render the 3x3 squares
    for (let i = 0; i < 3; i++) {
      row = [];
      for (let j = 0; j < 3; j++, n++) {
        let location = `(${i + 1}, ${j + 1})`;
        row.push(this.renderSquare(n, location));
      }
      board.push(<div className="board-row" key={i}>{row}</div>);
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
        squares: Array(9).fill(null).map(() => ({value: null, winMark: false})),
        move: {
          player: null,
          location: null
        },
        when: Date.now()
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

    // 由于每一个squares内部的值从字符串变成了对象，因此仅仅使用slice()是不够的，slice()是浅拷贝，对于Boolean，Number，String是可以，
    // 但对于Object，则要使用JSON.parse()和JSON.stringify()
    const squares =  JSON.parse(JSON.stringify(current.squares));

    // 如果其中的内容不是null，或者已经决出胜者，则不执行下方的setState()操作
    if (calculateWinner(squares) || squares[i].value) {
      return;
    }

    const nextPlayer = this.state.xIsNext? 'X': 'O';

    squares[i].value = nextPlayer;

    this.setState({
      history: history.concat([{
        squares,
        move: {
          player: nextPlayer,
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
    const result = gamemIsDraw(current.squares);
    let gameIsEnd = false;

    // step是每一个步骤的记录， move是步骤在history中的index
    const moves = history.map((step, move) => {
      let stepStyle = 'step';

      if (move === this.state.stepNumber) {
        // 注意有一个空格--> ↓
        stepStyle += ' current-step';
      }

      // 使用记录在state中的信息作为history list中item的描述内容
      const desc = move?
        `${step.move.player} moved to ${step.move.location}`:
        'Game start';

      return (
        <li key={step.when}>
          <button className={stepStyle} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    let status;
    const nextPlayer = this.state.xIsNext? 'X': 'O';

    if (typeof result === "string") {
      // The draw message
      status = result;
      gameIsEnd = true;
    } else if (result){
      // The winner info object
      status = 'Winner: ' + result.winner;

      // 这里设置的winMark，没有更新到state中，只是改变了传递给Board的对象属性而已，在state中，所有winMark都是false
      // 其实可能没有必要在state中设置winMark，但这样不利于数据的跟踪，所以还是保留winMark
      // 不管是否在state中设置winMark，squares内部都需要是一个对象，而不仅仅是一个String，因为需要把winMark的信息一起传递给square
      result.winningLineIndexArray.map((item) => {
        current.squares[item].winMark = true;
      });

      gameIsEnd = true;
    } else {
      status = 'Next player: ' + nextPlayer;
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <div className={gameIsEnd? 'game-is-end': ''}>{status}</div>
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