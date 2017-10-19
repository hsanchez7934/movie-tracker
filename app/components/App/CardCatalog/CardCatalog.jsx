import React, { Component } from 'react';
import { getNowPlaying, getMovies } from './../../../actions/index.js';
import MovieCard from './MovieCard/MovieCard';

export default class CardCatalog extends Component {
  constructor(props) {
    super(props);
    console.log('cc', props)
  }

  componentDidMount() {

    this.props.getMovies()
  }

  render() {
    console.log('CardCatalog props: ', this.props);
    const { movies } = this.props;
    // debugger
    const mappedCards = (movies || []).map( movie => {
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
