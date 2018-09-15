import React, {Component} from 'react';
import './index.css';

function Title() {
  return (
    <h1>Fragments</h1>
  )
}

// <></> is not supported by this version
class Columns extends Component {
  render() {
    return (
      <React.Fragment>
        <td>This</td>
        <td>is</td>
        <td>a</td>
        <td>table.</td>
      </React.Fragment>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns/>
          </tr>
        </tbody>
      </table>
    );
  }
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <Table/>
    </div>
  )
}

export default Demo;