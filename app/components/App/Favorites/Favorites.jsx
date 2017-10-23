import React, { Component } from 'react';
import MovieCardContainer from './../../../containers/MovieCardContainer';


export default class Favorites extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getFavoritesDB(this.props.login.id);
  }

  render() {
    const { addFavorite, login, deleteFavorite, favoritesDB } = this.props;

    const mappedCards = favoritesDB.map( (movie, index) => {
      return (
        <MovieCardContainer movie={movie}
                            key={index} />
      )
    });
    return (
      <div className="card-catalog">
        {mappedCards}
      </div>
    )
  }
}
