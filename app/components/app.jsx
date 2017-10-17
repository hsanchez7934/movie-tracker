import React, { Component } from 'react';
import jenKey from './../key.js';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${jenKey.jenKey}`)
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
      </div>
    )
  }
}
