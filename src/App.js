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


function Home() {
  return (
    <h1>Click the sidebar to see examples.</h1>
  );
}

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='sidebar'>
            <App/>
          </div>
          <div className='Example-view'>
            <Route path="/" exact component={Home}/>
            <Route path="/hello-world" component={HelloWorld}/>
            <Route path="/jsx-examples" component={JSXExamples}/>
            <Route path="/composing-components" component={ComposingComponents}/>
            <Route path="/extracting-components" component={ExtractingComponents}/>
            <Route path="/state-and-lifecycle" component={StateAndLifecycle}/>
            <Route path="/handling-events" component={HandlingEvents}/>
            {/*<Route path="" component={}/>*/}
            {/*<Route path="" component={}/>*/}
            {/*<Route path="" component={}/>*/}
            {/*<Route path="" component={}/>*/}
            {/*<Route path="" component={}/>*/}
            {/*<Route path="" component={}/>*/}
            {/*<Route path="" component={}/>*/}

          </div>
        </div>
      </Router>
    );
  }
}

class App extends Component {
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
            <Link to='/hello-world'>Hello World!</Link>
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
            <Link to='/hello-world'>Hello World!</Link>
          </li>
          <li>
            <Link to='/hello-world'>Hello World!</Link>
          </li>
          <li>
            <Link to='/hello-world'>Hello World!</Link>
          </li>
          <li>
            <Link to='/hello-world'>Hello World!</Link>
          </li>
          <li>
            <Link to='/hello-world'>Hello World!</Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default AppRouter;
