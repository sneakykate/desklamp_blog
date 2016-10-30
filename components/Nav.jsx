// import statements
  import React from 'react';
  import { Link, AsyncLink } from 'desklamp';

const Nav = ({ powers }) => (
  <nav className="nav">
    
    <ul>
      <li > <div className="logo"><img src="http://www.desklamp.io/assets/lamp.png" width="60px" className="navlogo"/></div></li>
      <li><Link view={'/home'} tag={'Home'} /></li>
      <li><Link view={'/home/nestedroute'} tag={'Nested'} /></li>
      <li><Link view={'/showstate'} tag={'ShowState'} /></li>
      <li><AsyncLink view={'/posts'} tag={'Posts'} func={powers.getPosts} /></li>
    </ul>
  </nav>
  );

export default Nav;
