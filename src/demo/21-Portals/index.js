import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Title() {
  return (
    <h1>Portals</h1>
  );
}

let $appRoot, $modalRoot;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    $modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    $modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }

  handleClick = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools and check the Element panel to observe that the button is not a child of the div with the onClick handler.
        </p>
        <p>These description content is in the #app-root div, but the modal with a button is in the #modal-root div.
        </p>
        <Modal>
          <Child/>
        </Modal>
      </div>
    );
  }
}

function Child() {
  return (
    <div className={'modal'}>
      <button>Click</button>
    </div>
  );
}

class Demo extends Component {
  // Get the DOM node when they have been rendered.
  componentDidMount() {
    $appRoot = document.getElementById('app-root');
    $modalRoot = document.getElementById('modal-root');
    ReactDOM.render(<Parent/>, $appRoot);
  }

  render() {
    return (
      <div>
        <Title/>
        <hr/>
        <div id='app-root'/>
        <div id="modal-root"/>
      </div>
    );
  }
}

export default Demo;