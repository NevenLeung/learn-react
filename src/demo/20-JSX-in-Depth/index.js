import React from 'react';

function Title() {
  return (
    <h1>JSX in Depth</h1>
  )
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <ul>{items}</ul>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <li key={index}>This is item {index} in the list</li>}
    </Repeat>
  );
}

// The 0 value will be displayed, instead of not displaying.
function FalsyValueTest(props) {
  return (
    <div>
      {props.messages.length && <div>{props.messages}</div>}
    </div>
  )
}

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <ListOfTenThings/>
      <br/>
      <FalsyValueTest messages={[]}/>
    </div>
  )
}

export default Demo;