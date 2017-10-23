import { connect } from 'react-redux';
import Favorites from './../components/App/Favorites/Favorites.jsx';
import { getFavoritesDB, addFavorite, deleteFavoriteDB } from './../actions/index.js';

const mapStateToProps = (store) => ({
  favoritesDB: store.favoritesDB,
  login: store.login,
})

const mapDispatchToProps = (dispatch) => ({
  addFavorite: movie => dispatch(addFavorite(movie)),
  deleteFavorite: movie => dispatch(deleteFavoriteDB(movie)),
  getFavoritesDB: favoritesDB => dispatch(getFavoritesDB(favoritesDB))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
