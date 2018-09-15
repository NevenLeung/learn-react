import React from 'react';

function Title() {
  return <h1>Handling Events</h1>
}

function Link() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#link" onClick={handleClick}>Click me</a>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // 将内部的setState到组件Toggle中
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn? 'ON': 'OFF'}
      </button>
    )
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <Link/>
      <br/>
      <br/>
      <Toggle/>
    </div>
  )
}

export default Demo;
