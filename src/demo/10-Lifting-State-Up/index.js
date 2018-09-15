import React from 'react';

function Title() {
  return <h1>Lifting State Up</h1>
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value
    });
  };

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

// Adding a second input
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  // It is no need to maintain the state in this component.
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   temperature: ''
  //   // };
  // }

  handleChange = (e) => {
    // this.setState({
    //   temperature: e.target.value
    // });
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

class NewClaculator extends React.Component {
  constructor(props) {
    super(props);
    // scale is represented the scale currently changed.
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  // 因为这里的事件处理函数使用了箭头函数来声明，
  // 它内部的this绑定在了NewClaculator，
  // 即使作为props传入子组件中，它的this仍然是NewClaculator。
  // 因此它可以正确地设置NewClaculator的state。
  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature
    });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature
    });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f'? tryConvert(temperature, toCesius): temperature;
    const fahrenheit = scale === 'c'? tryConvert(temperature, toFahrenheit): temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}

function toCesius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <Calculator/>
      <br/>
      <NewClaculator/>
    </div>
  )
}

export default Demo;