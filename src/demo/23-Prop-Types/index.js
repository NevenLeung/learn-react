import React, { Component } from "react";
import PropType from "prop-types";

function Title() {
  return <h1>Prop Types</h1>;
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: "Origin text",
      number: 0
    };
  }

  handleStringInput = e => {
    const value = e.target.value;
    this.setState({
      string: value
    });
  };

  handleNumberInput = e => {
    const value = e.target.value;
    this.setState({
      number: value
    });
  };

  render() {
    return (
      <div>
        <StringInput
          string={this.state.string}
          handleInput={this.handleStringInput}
        />
        <NumberInput
          number={
            Number(this.state.number)
              ? Number(this.state.number)
              : this.state.number
          }
          handleInput={this.handleNumberInput}
        />
      </div>
    );
  }
}

class StringInput extends Component {
  render() {
    return (
      <div>
        <h3>String Input</h3>
        <input
          type="text"
          value={this.props.string}
          onChange={this.props.handleInput}
        />
      </div>
    );
  }
}

StringInput.propTypes = {
  string: PropType.string,
  handleInput: PropType.func
};

class NumberInput extends Component {
  render() {
    return (
      <div>
        <h3>Number Input</h3>
        <input
          type="text"
          value={this.props.number}
          onChange={this.props.handleInput}
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  number: PropType.number,
  handleInput: PropType.func
};

function Demo() {
  return (
    <div>
      <Title />
      <hr />
      <Form />
    </div>
  );
}

export default Demo;
