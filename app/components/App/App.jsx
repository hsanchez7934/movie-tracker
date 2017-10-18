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
          <Route path='/' render={() => <h1>Movie Watcher</h1> } />
          <Route path='/test' render={() => <h1>Test</h1> } />

        </div>
      </BrowserRouter>
    )
  }
}
