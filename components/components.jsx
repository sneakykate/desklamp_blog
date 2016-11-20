import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the home page</h1>
    </div>
  );
};
const InputName = ({ updateUser, User }) => {
  return (
    <div>
      <form onSubmit={updateUser}>
        <input type="text" placeholder="Enter your Name" />
        <button type="submit" className="myButton">Submit</button>
      </form>
    </div>
  );
};

const NestedRoute = ({ state, powers }) => {
  return (
    <div className="home">
      <h1>Enter a username below.</h1>
      <InputName User={state.UserName} updateUser={powers.updateUser} />
    </div>
  );
};

const ShowState = ({ state }) => {
  return (
    <div className="home">
      <h1>Show State</h1>
      <p>Username is {state.UserName || "(enter a userName in the form on Page 1)"}</p>
      <p>State is: <code>{JSON.stringify(state).replace(/\"/g,'')}</code></p>
    </div>
  );
};

const Posts = ({ state }) => {
  return (
    <div className="postPage">
      <h1>Got Data</h1>
      {state.posts.map((message) => {
        return (
        [
          <div className="posts">
            <h3> {message.title}</h3>
            <div>{message.body}</div>
          </div>,
        ]);
      })}
    </div>
  );
};

const StateDisplay = ({ state, powers }) => {
  return (
    <div className="display">
      <p>UserName: </p>
      <p className="func">{state.UserName}</p>
      <p>Posts: </p>
      <p className="func">{JSON.stringify(state.posts)}</p>
      <p>Powers: </p>
      {Object.keys(powers).map((func) => {
        return (
          <p className="func">{`${func}()`}</p>
        );
      })}
    </div>
  );
};

export { Home, InputName, ShowState, NestedRoute, Posts, StateDisplay };


// <p>Powers: <code>{powers}</code></p>