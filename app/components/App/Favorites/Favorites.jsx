import React, { Component } from 'react'
import MovieCardContainer from './../../../containers/MovieCardContainer'
import PropTypes from 'prop-types'

class Favorites extends Component {
  constructor() {
    super()
  }

  activeClass(movie, favoritesDB) {
    const cardIndex = favoritesDB.findIndex(
      (movieObject) => movieObject.movie_id === movie.movie_id
    )
    return cardIndex === -1 ? 'fav-button' : 'remove-fav'
  }

  componentDidMount () {
    this.props.getFavoritesDB(this.props.login.id)
  }

  render () {
    const { addFavorite, login, deleteFavorite, favoritesDB } = this.props;

    const mappedCards = favoritesDB.map((movie, index) => {
      console.log('movie ', movie);
      return (
        <MovieCardContainer
          movie={movie}
          key={index}
          activeClass={this.activeClass(movie, favoritesDB)}/>
      )
    })

    if (favoritesDB.length <= 0)  {
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

Favorites.propTypes = {
  addFavorite: PropTypes.func,
  deleteFavorite: PropTypes.func,
  favoritesDB: PropTypes.array,
  getFavoritesDB: PropTypes.func,
  login: PropTypes.object
}

export default Favorites
