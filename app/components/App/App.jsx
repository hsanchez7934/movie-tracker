import React, { Component } from 'react';
import { getNowPlaying, getMovies } from '../../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import CardCatalogContainer from './../../containers/CardCatalogContainer.js';
import { Switch } from 'react-router';
import Login from './Login/Login';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>

            <Route exact path='/' render={() => {
              return (
                <div>
                  <button>Login</button>
                  <CardCatalogContainer />
                </div>
              )
            }} />

            <Route exact path='/login' component={Login}/>
          </Switch>

      </div>
      </BrowserRouter>
    )
  }
}
