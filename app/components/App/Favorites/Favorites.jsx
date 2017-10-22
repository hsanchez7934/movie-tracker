import React, { Component } from 'react';
import MovieCardContainer from './../../../containers/MovieCardContainer';

const Favorites = (props) => {
  const { favorites , addFavorite, login, deleteFavorite } = props;
  const mappedCards = favorites.map( (movie, index) => {
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


export default Favorites;
