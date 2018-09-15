import React from 'react';

function Title() {
  return <h1>Forms</h1>
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    // this.setState({
    //   value: event.target.value
    // });
    this.setState({
      value: event.target.value.toUpperCase()
    });
  };

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          &nbsp;
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="name" />
        </label>
        &nbsp;
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          &nbsp;
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        &nbsp;
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          &nbsp;
          {/*<select value={['lime', 'mango']} onChange={this.handleChange} multiple={true}>*/}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        &nbsp;
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleInputChange = (event) => {
    const target = event.target;

    const name = target.name;
    const value = target.type === 'checkbox'? target.checked: target.value;

    // 描述一下setState的过程
    // 两个input元素传入两个不同的name，通过target.name获取到name的值
    //注意在构造函数初始化state中，有两个跟name值相同的属性名称
    // 因此，可以通过这个name值作为setState的计算属性名来进行赋值
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

// Uncontrolled component - react doesn't handle the input change. Using this.input to get the input value.
class NameForm2 extends React.Component {
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          &nbsp;
          <input type="text"
                 ref={(input) => this.input = input}
                 defaultValue="Dave"
          />
        </label>
        &nbsp;
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <NameForm/>
      <br/>
      <EssayForm/>
      <br/>
      <FlavorForm/>
      <br/>
      <Reservation/>
      <br/>
      <NameForm2/>
    </div>
  )
}

export default Demo;