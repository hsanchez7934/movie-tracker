import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { getNowPlaying, getMovies } from './../../../actions/index.js';

const Header = (props) => {
  const { logout } = props;
    return (
      <div className="not-logged-in-user">
        <h2 className="movie-tracker-title">Movie <span className="tracker">Tracker</span></h2>
        {!props.currUser.id &&
          <Link to={'/login'}>
            <button className="login-button">Login</button>
          </Link>
        }
        {
          props.currUser.id &&
          <div className="logged-in-user">
            <h3 className="welcome-user">Hello, <span>{props.currUser.name}</span></h3>
            <Link to={'/favorites'}>
            <button className="favorites-button">Favorites</button>
          </Link>
            <button className="logout-button" onClick={() => logout()}>Log Out</button>
          </div>
        }
      </div>
      )
        }


export default Header;
