import React, { Component } from 'react';
import { getNowPlaying, getMovies } from '../../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import CardCatalogContainer from './../../containers/CardCatalogContainer.js';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route path='/' render={() => {
            return (
              <div>
                <button>Login</button>
                <CardCatalogContainer />
              </div>
            )
          }} />
        </div>
      </BrowserRouter>
    )
  }
}
