import React, { Component } from 'react';
import MovieCard from './MovieCard/MovieCard';


export default class CardCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const { movies, addFavorite, login } = this.props;
    const mappedCards = movies.map( (movie, index) => {
    const { title, release_date, poster_path, vote_average, overview, movie_id } = movie;
      return ( <MovieCard
              key={index}
              title={title}
              releaseDate={release_date}
              image={poster_path}
              addFavorite={addFavorite}
              voteAverage={vote_average}
              overview={overview}
              movieID={movie_id}
              login={login}
              movie={movie}
            />)
    })
    return (
      <div className="card-catalog">
        {mappedCards}
      </div>
    )
  }
}
