// import statements
import React from 'react';
import { Link, AsyncLink } from 'desklamp';
import { StateDisplay } from './components';

const Nav = ({ state, powers }) => (
  <nav className="nav">
    <ul>
      <li > <div className="logo"><img src="http://www.desklamp.io/assets/lamp.png" width="60px" className="navlogo" /></div></li>
      <li><Link view={'/home'} tag={'Home'} /></li>
      <li><Link view={'/home/nestedroute'} tag={'Nested'} /></li>
      <li><Link view={'/showuser'} tag={'ShowUser'} /></li>
      <li><AsyncLink view={'/posts'} tag={'Posts'} func={powers.getPosts} /></li>
    </ul>
    <StateDisplay state={state} powers={powers} />
  </nav>
  );

export default Nav;
