import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import App from './App';
import HelloWorld from './demo/01-Hello-World';
import JSXExamples from "./demo/02-JSX";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
);

export default BasicExample;

// class AppRouter extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route path="/" component={App}/>
//           <Route path="hello-world" component={HelloWorld} />
//           <Route path="jsx-examples" component={JSXExamples}/>
//         </div>
//       </Router>
//     );
//   }
// }

// export default AppRouter;