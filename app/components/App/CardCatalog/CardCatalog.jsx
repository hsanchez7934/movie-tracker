import React, { Component } from 'react';
import { getNowPlaying, getMovies } from './../../../actions/index.js';
import MovieCard from './MovieCard/MovieCard';

export default class CardCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('CardCatalog props: ', this.props);
    this.props.getMovies()
  }

  render() {
    const { movies } = this.props;
    debugger
    const mappedCards = movies.map( movie => {
      return ( <MovieCard
              title={movie.title}
              releaseDate={movie.release_date}
              image={movie.poster_path} />)
    })
    return (
      <div>
        {mappedCards}
      </div>
    )
  }

}
