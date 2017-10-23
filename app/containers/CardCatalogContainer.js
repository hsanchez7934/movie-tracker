import { connect } from 'react-redux';
import { getMovies, getNowPlaying, addFavorite, deleteFavoriteDB, getFavoritesDB } from './../actions/index.js';
import CardCatalog from './../components/App/CardCatalog/CardCatalog.jsx';

const mapStateToProps = (store) => ({
  movies: store.movies,
  login: store.login
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => {
     dispatch(getNowPlaying(movies))
  },
  addFavorite: (movie) => {
     dispatch(addFavorite(movie))
  },
  deleteFavorite: (movie) => {
    dispatch(deleteFavoriteDB(movie))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardCatalog);
