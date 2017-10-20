import React, { Component } from 'react';
import { getNowPlaying, getMovies } from './../../../actions/index.js';
import MovieCard from './MovieCard/MovieCard';

export default class CardCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const mappedCards = this.props.movies.map( (movie, index) => {
      return ( <MovieCard
              key={index}
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
