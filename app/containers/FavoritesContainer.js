import { connect } from 'react-redux';
import Favorites from './../components/App/Favorites/Favorites.jsx';
import { favoritesDB, getFavoritesDB, favorite, addFavorite, deleteFavoriteDB, deleteFavorite } from './../actions/index.js';

const mapStateToProps = (store) => ({
  favoritesDB: store.favoritesDB,
  login: store.login,
});


const mapDispatchToProps = (dispatch) => ({
  addFavorite: favorite => dispatch(addFavorite(favorite)),
  deleteFavorite: favorite => dispatch(deleteFavoriteDB(favorite)),
  getFavoritesDB: favoritesDB => dispatch(getFavoritesDB(favoritesDB))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
