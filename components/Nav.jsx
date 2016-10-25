import React from 'react';
import { Link, AsyncLink } from 'desklamp';

const Nav = ({ powers }) => (
  <nav className="nav">
    <ul>
      <li><Link view={'/home'} tag={'Home'} /> </li>
      <li><Link view={'/home/page1'} tag={'Page 1'} /></li>
      <li><Link view={'/page2'} tag={'Page 2'} /></li>
      <li><AsyncLink view={'/page3'} tag={'Page 3'} func={powers.getPosts}/></li>
      <a href="https://github.com/desklamp-js/desklamp">Desklamp's Github</a>
    </ul>
  </nav>
  );

export default Nav;
