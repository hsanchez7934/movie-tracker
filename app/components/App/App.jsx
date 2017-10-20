import React, { Component } from 'react';
import { getNowPlaying, getMovies } from '../../actions';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CardCatalogContainer from './../../containers/CardCatalogContainer.js';
import { Switch } from 'react-router';
import RegisterContainer from './../../containers/RegisterContainer.js';
import LoginContainer from './../../containers/LoginContainer.js';


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
                  <Link to={'/login'}>
                    <button>Login</button>
                  </Link>
                  <CardCatalogContainer />
                </div>
              )
            }} />

            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register' component={RegisterContainer} />
          </Switch>

      </div>
      </BrowserRouter>
    )
  }
}
