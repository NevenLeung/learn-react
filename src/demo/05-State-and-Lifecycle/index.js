import React from 'react';

function Title() {
  return <h1>State and Lifecycle</h1>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // 为什么this.tick()
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

function Clocks() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

function Demo() {
  return(
    <div>
      <Title/>
      <hr />
      <Clocks/>
    </div>
  );
}

export default Demo;