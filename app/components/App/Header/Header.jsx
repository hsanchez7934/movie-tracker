import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { getNowPlaying, getMovies } from './../../../actions/index.js';

const Header = (props) => {
console.log('route: ', Route);
    return (
      <div className='header'>
        <h2>Movie Tracker</h2>
        {!props.currUser.id &&
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        }
        {
          props.currUser.id &&
          <div>
            <p>Hello, <span>{props.currUser.name}</span></p>
            <button>Logout</button>
          </div>
            }
          </div>
          )
  }

export default Header;
