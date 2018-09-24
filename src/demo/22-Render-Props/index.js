import React, {Component} from 'react';

function Title() {
  return (
    <h1>Render Props</h1>
  )
}

// The origin mouse tracker component
class MouseTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <div style={{height: '100%', border: '2px solid #eee', borderRadius: '10px'}} onMouseMove={this.handleMouseMove}>
          <p>
            The current mouse position is ({this.state.x}, {this.state.y}).
          </p>
        </div>
        <h3>This example use wraps all thing in one component. It is hard to reuse it.</h3>
      </div>
    );
  }
}

// Another example use render props

function Cat(props) {
  const mouse = props.mouse;

  return (
    <p>The current mouse position is ({mouse.x}, {mouse.y}). The kitty is gonna to catch it.</p>
  );
}

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    return (
      <div style={{height: '100%', border: '2px solid #eee', borderRadius: '10px'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class NewMouseTracker extends Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse}/>
        )}/>
        <h3>This example use 'render props' technique, which is good at reusability.</h3>
      </div>
    );
  }
}

// Test render props with pure component
class MousePure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    return (
      <div style={{height: '100%', border: '2px solid #eee', borderRadius: '10px'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class NewMouseTrackerTest extends Component {
  renderCat = (mouse) => (
    <Cat mouse={mouse}/>
  );

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MousePure render={this.renderCat}/>
        <h3>This example use 'render props' technique and react pure component.</h3>
      </div>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <MouseTracker/>
      <NewMouseTracker/>
      <NewMouseTrackerTest/>
    </div>
  )
}

export default Demo;