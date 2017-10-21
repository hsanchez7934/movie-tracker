import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { getNowPlaying, getMovies } from './../../../actions/index.js';

const Header = () => {

    return (
      <div className='header'>
        <h2>Movie Tracker</h2>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
      </div>
        )
  }

export default Header;
