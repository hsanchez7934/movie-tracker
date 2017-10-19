import React, { Component } from 'react';
import { getNowPlaying, getMovies } from '../../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import CardCatalogContainer from './CardCatalog/CardCatalog.jsx';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props);
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
