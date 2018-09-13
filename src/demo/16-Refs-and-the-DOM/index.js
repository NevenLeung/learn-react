import React, {Component} from 'react';

function Title() {
  return (
    <h1>Refs and the DOM</h1>
  )
}

function FnComponent({onClick}) {
  return <button onClick={onClick}>this is a function component</button>
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Good'
    }
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        This a class component
      </button>
    );
  }
}


class TestRefs extends Component {
  constructor(props) {
    super(props);
    this.htmlElementRef = React.createRef();
    this.componentRef = React.createRef();
  }

  logTheHtmlRef = () => {
    console.log(this.htmlElementRef.current);
  };

  logTheComponentRef = () => {
    console.log(this.componentRef.current);
  };

  render() {
    return (
      <div>
        <p>Click the button, and check the console panel to see the result.</p>
        <button ref={this.htmlElementRef} onClick={this.logTheHtmlRef}>This a html element</button>
        <br/>
        <br/>
        <ClassComponent ref={this.componentRef} onClick={this.logTheComponentRef}/>
      </div>
    );
  }
}

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text"
               ref={this.textInput}/>
        &nbsp;
        <input type="button"
               value='Focus the text input'
               onClick={this.focusTextInput}/>
      </div>
    );
  }
}

// 回调refs，ref接收一个回调函数，其中element或者component作为其中的参数
class CustomTextInputWithCallbackRefs extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
  }

  setTextInputRef = (element) => {
    this.textInput = element;
  };

  focusTextInput = () => {
    if (this.textInput) {
      this.textInput.focus();
    }
  };

  componentDidMount() {
    // 当组件被成功挂载时，文本框就会自动获得焦点，而前一个例子需要自己点击
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <input type="text"
               ref={this.setTextInputRef}/>
        &nbsp;
        <input type="button"
               value='Focus the text input'
               onClick={this.focusTextInput}/>
      </div>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <TestRefs/>
      <br/>
      <CustomTextInput/>
      <br/>
      <CustomTextInputWithCallbackRefs/>
    </div>
  )
}

export default Demo;