import React, { Component } from 'react';
import MovieCardContainer from './../../../containers/MovieCardContainer';


export default class Favorites extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getFavoritesDB(this.props.login.id);
  }

  // haveFavorites(favoritesDB, mappedCards) {
  //     if(favoritesDB.length <= 0)  {
  //           return (
  //               <div className="card-catalog">
  //                 {'No favorite cards found.'}
  //               </div>
  //             )
  //           } else {
  //             return (
  //             favoritesDB.length > 0 &&
  //               <div className="card-catalog">
  //                 {mappedCards}
  //               </div>
  //           )
  //           }
  //
  // }

  render() {
    const { addFavorite, login, deleteFavorite, favoritesDB } = this.props;

    const mappedCards = favoritesDB.map( (movie, index) => {
      return (
        <MovieCardContainer movie={movie}
                            key={index} />
      )
    });

    if(favoritesDB.length <= 0)  {
          return (
              <div className="card-catalog no-faves">
                {'No favorite cards found.'}
              </div>
            )
          } else {
            return (
            favoritesDB.length > 0 &&
              <div className="card-catalog">
                {mappedCards}
              </div>
          )
          }
  }
}
