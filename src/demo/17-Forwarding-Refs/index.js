import React, {Component} from 'react';

function Title() {
  return (
    <h1>Forwarding Refs</h1>
  )
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" onClick={props.onClick}>
    {props.children}
  </button>
));

class Case1 extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.buttonRef.current);
  };

  render() {
    return (
      <FancyButton ref={this.buttonRef} onClick={this.handleClick}>Click me!</FancyButton>
    );
  }
}

function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <Case1/>
    </div>
  )
}

export default Demo;