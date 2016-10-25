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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Page1 = ({ state, powers }) => {
  return (
    <div>
      <ul>
        <li>
          Enter a username below.
        </li>
      </ul>
      <InputName User={state.UserName} updateUser={powers.updateUser} />
    </div>
  );
};

const Page2 = ({ state }) => {
  return (
    <div className="page2">
      <h1>Page2</h1>
      <p>Username is {state.UserName || "(enter a userName in the form on Page 1)"}</p>
    </div>
  );
};

const Page3 = ({ state }) => {
  return (
    <div className="page3">
      <h1>Page3</h1>
      <h4>Good thing we loaded these posts already.</h4>
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

export { Home, InputName, Page2, Page1, Page3 };
