import React from "react";

import styles from "./index.module.css";

function Title() {
  return <h1>React.PureComponent() and React.Memo()</h1>;
}

class CounterWrap extends React.Component {
  state = {
    counter: 0,
    obj: {
      counter: 0
    }
  };

  handleClick = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }));
  };

  handleClick2 = () => {
    this.setState(preState => ({
      obj: {
        counter: preState.obj.counter + 1
      }
    }));
  };

  render() {
    return (
      <PureCounter2
        counter={this.state.counter}
        data={this.state.obj}
        handleClick={this.handleClick}
        handleClick2={this.handleClick2}
      />
    );
  }
}

class PureCounter2 extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={styles.inlineBlock}>
          <button onClick={this.props.handleClick}>
            Add the normal counter
          </button>
          &nbsp;
          <span>{this.props.counter}</span>
        </div>
        <div className={styles.inlineBlock}>
          <button onClick={this.props.handleClick2}>
            Add the counter in object
          </button>
          &nbsp;
          <span>{this.props.data.counter}</span>
        </div>
      </div>
    );
  }
}

class PureCounter extends React.PureComponent {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(preState => ({
      counter: preState.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <div className={styles.inlineBlock}>
          <button onClick={this.handleClick}>Add</button>
        </div>
        <div className={styles.inlineBlock}>{this.state.counter}</div>
      </div>
    );
  }
}

export default () => (
  <div>
    <Title />
    <hr />
    <CounterWrap />
    <hr />
    <PureCounter />
  </div>
);
