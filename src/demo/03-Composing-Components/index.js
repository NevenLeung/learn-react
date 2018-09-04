import React from 'react';

function Title() {
  return <h1>Composing Components</h1>
}

function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}

function Demo() {
  return (
  <div>
    <Title/>
    <hr/>
    <Hello name="Sara" />
    <Hello name="Carter" />
    <Hello name="Edison" />
  </div>
  );
}

export default Demo;