import React, { Component } from 'react'
import MovieCardContainer from './../../../containers/MovieCardContainer'
import PropTypes from 'prop-types'

class Favorites extends Component {
  constructor() {
    super()
  }
  componentDidMount () {
    this.props.getFavoritesDB(this.props.login.id)
  }

  render () {
    const { addFavorite, login, deleteFavorite, favoritesDB } = this.props;

    const mappedCards = favoritesDB.map((movie, index) => {
      return (
        <MovieCardContainer
          movie={movie}
          key={index} />
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
