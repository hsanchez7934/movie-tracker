import React, { Component } from 'react';
import { getNowPlaying, getMovies } from '../../actions';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route path='/' render={() => {
            <div>
              <button>Login</button>
              <CardCatalogContainer />
            </div>
          }} />
        </div>
      </BrowserRouter>
    )
  }
}
