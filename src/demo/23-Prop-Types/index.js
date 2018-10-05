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

function StringInput(props) {
  return (
    <div>
      <h3>String Input</h3>
      <input type="text" value={props.string} onChange={props.handleInput} />
    </div>
  );
}

StringInput.propTypes = {
  string: PropType.string,
  handleInput: PropType.func
};

function NumberInput(props) {
  return (
    <div>
      <h3>Number Input</h3>
      <input type="text" value={props.number} onChange={props.handleInput} />
      <p>
        If typing some text Not Number, you can check the console panel and see
        the warning message throw by PropTypes.
      </p>
    </div>
  );
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
