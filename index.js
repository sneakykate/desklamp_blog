import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Desklamp } from 'desklamp';
import { Home, Page1, Page2, Page3 } from './components/components';
import Nav from './components/Nav';

ReactDOM.render((
  <Container>
    <Home>
      <Page1 />
    </Home>
    <Page2 />
    <Page3 />
  </Container>
), document.getElementById('app'));

// Desklamp.defaultRoute('page1');

const initState = {
  UserName: '',
  posts: [],
};

const funcs = {
  updateUser: (e) => {
    e.preventDefault();
    const event = e.nativeEvent;
    const newUser = event.target[0].value;
    Desklamp.changeView('page2', {
      UserName: newUser,
    });
  },
  getPosts: () => {
    $.get('http://localhost:3000/posts', (data) => {
      Desklamp.changeView('page3', { posts: data });
    });
  },
};

Desklamp.on(initState, funcs, Nav);
