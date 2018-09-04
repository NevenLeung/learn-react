import React from 'react';
import './styles.css';

function Title() {
  return <h1>Composition vs Inheritance</h1>
}

function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Example2() {
  return (
    <SplitPane
      left={
        <p>Left</p>
      }
      right={
        <p>Right</p>
      } />
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function NewWelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      login: e.target.value
    });
  };

  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}`);
  };

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange}/>
        &nbsp;
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <WelcomeDialog/>
      <br/>
      <Example2/>
      <br/>
      <NewWelcomeDialog/>
      <br/>
      <SignUpDialog/>
    </div>
  )
}

export default Demo;