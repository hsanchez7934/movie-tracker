import React, { Component } from 'react';
import MovieCardContainer from './../../../containers/MovieCardContainer';


export default class CardCatalog extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const { movies, addFavorite, login, deleteFavorite, favorite } = this.props;
    const mappedCards = movies.map( (movie, index) => {
      return (
        <MovieCardContainer movie={movie}
                            key={index} />
      )
    })
    return (
      <div className="card-catalog">
        {mappedCards}
      </div>
    )
  }
}
