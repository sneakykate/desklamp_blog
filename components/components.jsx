import React from 'react';
import {library} from './helper';

// see blog tutorial here: https://medium.com/@sneakykate/react-routing-and-state-3-ways-part-3-desklamp-1facca96ac33#.q87b4ava9
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the home page!</h1>
      <div className="homeLamp">
        <img src="http://localhost:3000/desk-lamp.png" width="200px"/>
      </div>
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

const ShowUser = ({ state }) => {
  return (
    <div className="home">
      <div className="homeBox">
        <h1>Show User</h1>
        <p>Hi! { state.UserName || "(Enter a userName in the form on Page 1)"}</p>
        <img src="http://localhost:3000/jared.jpg" width="400px"/>
      </div>
    </div>
  );
};

const Posts = ({ state }) => {
  return (
    <div className="postPage">
      <div className="postBox">
      <h1> Posts </h1>
        {state.posts.map((message) => {
          return (
          [
            <div className="posts">
              <h4> {message.title}</h4>
              <span>~ {message.user}</span>
              <p>{message.body} </p>
              
              
            </div>,
          ]);
        })}
      </div>
    </div>
  );
};


const StateDisplay = ({ state, powers }) => { 
  const Postcode = library.json.prettyPrint( JSON.stringify(state.posts) || {});
  return (
    <div className="display">
      <h4>Application State Tool</h4>
      <hr/>
      <p>UserName: <span className="func">{state.UserName}</span> </p> 
      
      <p>Posts: </p>
      {(state.posts).map((post) => {
        return (
          <p className="postStyle">{library.json.prettyPrint(JSON.stringify(post)).replace(/\"/g, "")}</p>
        );
      })}  
    
      <p>Powers: </p>
      {Object.keys(powers).map((func) => {
        return (
          <p className="func">{`${func}()`}</p>
        );
      })}
    </div>
  );
};


// <p>Powers: <code>{powers}</code></p>



export { Home, InputName, ShowUser, NestedRoute, Posts, StateDisplay };