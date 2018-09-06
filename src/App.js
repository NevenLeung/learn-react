import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import HelloWorld from './demo/01-Hello-World';
import JSXExamples from "./demo/02-JSX";
import ComposingComponents from './demo/03-Composing-Components';
import ExtractingComponents from './demo/04-Extracting-Components';
import StateAndLifecycle from './demo/05-State-and-Lifecycle';
import HandlingEvents from './demo/06-Handling-Events';
import ConditionalRendering from './demo/07-Conditional-Rendering';
import ListsAndKeys from './demo/08-Lists-and-Keys';
import Forms from './demo/09-Forms';
import LiftingStateUp from './demo/10-Lifting-State-Up';
import CompositionVsInheritance from './demo/11-Composition-vs-Inheritance';
import ThinkingInReact from './demo/12-Thinking-in-React';
import Tutorial from './demo/13-Tutorial';
import Context from './demo/14-Context';

function HomeTips() {
  return (
    <h1>Click the sidebar to see the examples.</h1>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='sidebar'>
            <Sidebar/>
          </div>
          <div className='Example-view'>
            <Route path="/" exact component={HomeTips}/>
            <Route path="/hello-world" component={HelloWorld}/>
            <Route path="/jsx-examples" component={JSXExamples}/>
            <Route path="/composing-components" component={ComposingComponents}/>
            <Route path="/extracting-components" component={ExtractingComponents}/>
            <Route path="/state-and-lifecycle" component={StateAndLifecycle}/>
            <Route path="/handling-events" component={HandlingEvents}/>
            <Route path="/conditional-rendering" component={ConditionalRendering}/>
            <Route path="/lists-and-keys" component={ListsAndKeys}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/lifting-state-up" component={LiftingStateUp}/>
            <Route path="/composition-vs-inheritance" component={CompositionVsInheritance}/>
            <Route path="/thinking-in-react" component={ThinkingInReact}/>
            <Route path="/tutorial" component={Tutorial}/>
            <Route path="/context" component={Context}/>
            {/*<Route path="" component={}/>*/}
          </div>
        </div>
      </Router>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">Learn React</h1>
        </header>
        <ol className='nav'>
          <li>
            <Link to='/hello-world'>Hello World</Link>
          </li>
          <li>
            <Link to='/jsx-examples'>JSX Examples</Link>
          </li>
          <li>
            <Link to="/composing-components">Composing Components</Link>
          </li>
          <li>
            <Link to='/extracting-components'>Extracting Components</Link>
          </li>
          <li>
            <Link to='/state-and-lifecycle'>State and Lifecycle</Link>
          </li>
          <li>
            <Link to='/handling-events'>Handling Events</Link>
          </li>
          <li>
            <Link to='/conditional-rendering'>Conditional Rendering</Link>
          </li>
          <li>
            <Link to='/lists-and-keys'>Lists and Keys</Link>
          </li>
          <li>
            <Link to='/forms'>Forms</Link>
          </li>
          <li>
            <Link to='/lifting-state-up'>Lifting State Up</Link>
          </li>
          <li>
            <Link to='/composition-vs-inheritance'>Composition vs Inheritance</Link>
          </li>
          <li>
            <Link to='/thinking-in-react'>Thinking in React</Link>
          </li>
          <li>
            <Link to='/tutorial'>Tutorial</Link>
          </li>
          {/*<li>*/}
            {/*<Link to='/context'>Context</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to='/context'>Context</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to='/context'>Context</Link>*/}
          {/*</li>*/}
        </ol>
      </div>
    );
  }
}

export default App;
