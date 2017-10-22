import { connect } from 'react-redux';
import Favorites from './../components/App/Favorites/Favorites.jsx';
import { favorite, addFavorite, deleteFavoriteDB, deleteFavorite } from './../actions/index.js';

const mapStateToProps = (store) => ({
  favorites: store.favorites,
  login: store.login
});


const mapDispatchToProps = (dispatch) => ({
  addFavorite: (favorite) => {
    return dispatch(addFavorite(favorite))
  },
  deleteFavorite: (favorite) => {
    return dispatch(deleteFavoriteDB(favorite))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
