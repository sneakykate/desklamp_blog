// import statements
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Desklamp } from 'desklamp';
import { Home, NestedRoute, ShowUser, Posts } from './components/components';
import Nav from './components/Nav';

ReactDOM.render((
  <Container>
    <Home>
      <NestedRoute />
    </Home>
    <ShowUser />
    <Posts />
  </Container>
), document.getElementById('app'));

Desklamp.defaultRoute('/home');

const initState = {
  UserName: '',
  posts: [],
};

const funcs = {
  updateUser: (e) => {
    e.preventDefault();
    const event = e.nativeEvent;
    const newUser = event.target[0].value;
    Desklamp.changeView('showuser', {
      UserName: newUser,
    });
  },
  getPosts: () => {
    $.get('http://localhost:3000/posts', (data) => {
      Desklamp.changeView('posts', { posts: data });
    });
  },
};

Desklamp.on(initState, funcs, Nav);
