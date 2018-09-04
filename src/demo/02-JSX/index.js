import React from 'react';

function Title() {
  return <h1>JSX</h1>
}

const arr = [
  <h2 key="1">Hello React!</h2>,
  <h1 key="2">Hello world!</h1>
];

function Example1() {
  return <div>{arr}</div>
}

const names = ['Alice', 'Emily', 'Kate'];

function Example2(){
  return (
    <div>
      {
        names.map((name, index) => {
          return <div key={index}>Hello, {name}!</div>
        })
      }
    </div>
  )
}

function JSXExamples() {
  return (
    <div>
      <Title/>
      <hr/>
      <Example1/>
      <br/>
      <Example2/>
    </div>
  )
}

export default JSXExamples;


