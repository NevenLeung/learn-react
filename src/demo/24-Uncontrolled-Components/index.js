import React, { Component } from "react";

function Title() {
  return <h1>Uncontrolled Components</h1>;
}

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit = event => {
    alert(`The name '${this.input.current.value}' was submitted.`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: &nbsp;
          <input type="text" ref={this.input} defaultValue="Helen" />
        </label>
        &nbsp;
        <input type="submit" value="submit" />
      </form>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title />
      <hr />
      <NameForm />
    </div>
  );
}

export default Demo;
