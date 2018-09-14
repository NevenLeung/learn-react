import React, {Component} from 'react';

function Title() {
  return (
    <h1>Forwarding Refs</h1>
  )
}

function Desc() {
  return (
    <p>Check the console panel to see the result.</p>
  )
}


// case No.1
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


// case No.2
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      // 使用对象的解构赋值，提取forwardRef的值
      const {forwardedRef, ...rest} = this.props;

      // 将外部传入的ref绑定到想要的元素上
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 这里使用forwardRef来将接收传入的ref，
  // 在通过props.forwardRef来将这个ref传递给相应的元素或组件
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

class CustomButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

class Case2 extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.buttonRef.current);
  };

  render() {
    const Component = logProps(CustomButton);

    return (
      <Component
        className='button'
        ref={this.buttonRef}
        onClick={this.handleClick}
      >
        Button using HOC
      </Component>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <Desc/>
      <Case1/>
      <br/>
      <br/>
      <Case2/>
    </div>
  )
}

export default Demo;