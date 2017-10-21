import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { getNowPlaying, getMovies } from './../../../actions/index.js';

const Header = (props) => {
  const { logout } = props;
console.log('header props: ', props);
    return (
      <div className="not-logged-in-user">
        <h2 className="movie-tracker-title">Movie Tracker</h2>
        {!props.currUser.id &&
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        }
        {
          props.currUser.id &&
          <div className="logged-in-user">
            <h3>Hello, <span>{props.currUser.name}</span></h3>
            <button onClick={() => logout()}>Log Out</button>
          </div>
        }
      </div>
      )
        }


export default Header;
