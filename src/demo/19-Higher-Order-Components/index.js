import React, {Component} from 'react';

function Title() {
  return (
    <h1>Higher-Order Components</h1>
  )
}

class Case1 extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
    </div>
  )
}

export default Demo;