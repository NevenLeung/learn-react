import React from 'react';

function Title() {
  return <h1>Lists and Keys</h1>
}

function ListItem(props) {
  return (
    <li>
      {props.value}
    </li>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
  //const listItems = numbers.map((n) =>
  //  <ListItem key={n.toString()} value={n}>
  //);

  // Embedded the ListItem variable in curly braces
  return (
    <ul>
      {
        numbers.map((n) =>
          <ListItem key={n.toString()} value={n} />
        )
      }
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

//---------------

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content= props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}

const posts = [
  {
    id: 1,
    title: 'Hello World!',
    content: 'Welcome to learning React!'
  },
  {
    id: 2,
    title: 'Installation',
    content: 'You can install React from npm.'
  }
];

function Demo() {
  return (
    <div>
      <Title/>
      <hr/>
      <NumberList numbers={numbers} />
      <br/>
      <Blog posts={posts} />
    </div>
  )
}

export default Demo;