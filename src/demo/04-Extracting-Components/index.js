import React from 'react';

function Title() {
  return <h1>Extracting Components</h1>
}

// origin Comment component
function CommentOrigin(props){
  return (
    <div className="comment">
      <div className="userInfo">
        <img className="avatar"
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
        <div className="userInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <img className="avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <div className="userInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props){
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  )
}

const data = {
  author: {
    name: 'Neven',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/18048923?s=460&v=4'
  },
  text: 'My name is Neven.',
  date: '2018-08-25'
};

function Demo(){
  //return <Comment author={data.author} text={data.text} date={data.date} />
  return (
    <div>
      <Title/>
      <hr/>
      {Comment(data)}
    </div>
  );
}

export default Demo;


