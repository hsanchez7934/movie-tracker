import React, { Component } from 'react';
import { getNowPlaying, getMovies } from '../../actions';

export default class App extends Component {
  constructor() {
    super();
  }

  // const { movies, getMovies } = this.props
  //
  // getNowPlaying(){
  //   return (dispatch) => {
  //     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${jenKey.jenKey}`)
  //     .then(response => response.json())
  //     .then((parsedResponse) => dispatch(getMovies(parsedResponse.results)))
  //   }
  // }


  componentDidMount() {
    console.log('app props: ', this.props);
    this.props.getMovies()
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
      </div>
    )
  }
}
