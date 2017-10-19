import React, { Component } from 'react';
import { getNowPlaying, getMovies } from '../../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import CardCatalogContainer from './../../containers/CardCatalogContainer.js';
import { Switch } from 'react-router';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>

            <Route path='/' render={() => {
              return (
                <div>
                  <button>Login</button>
                  <CardCatalogContainer />
                </div>
              )
            }} />

            <Route path='/login' render={() =>
              <h2>
                LOGIN
              </h2>
            } />
          </Switch>

      </div>
      </BrowserRouter>
    )
  }
}
