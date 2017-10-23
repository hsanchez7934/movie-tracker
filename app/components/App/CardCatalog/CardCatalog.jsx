import React, { Component } from 'react';
import MovieCardContainer from './../../../containers/MovieCardContainer';
import css from './MovieCard/MovieCard.scss';



export default class CardCatalog extends Component {
  constructor() {
    super();
  }

  activeClass(movie, favoritesDB) {
  const cardIndex = favoritesDB.findIndex(
    (movieObject) => movieObject.movie_id === movie.id
  );
  return cardIndex !== -1 ? '.fav-button' : '.remove-fav';
};

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const { movies, addFavorite, login, deleteFavorite, favoritesDB } = this.props;
    const mappedCards = movies.map( (movie, index) => {
      console.log('movie: ', movie);
      return (
        <MovieCardContainer movie={movie}
                            key={index}
                            activeClass={this.activeClass(movie, favoritesDB)}
                          />
      )
    })
    return (
      <div className="card-catalog">
        {mappedCards}
      </div>
    )
  }
}
