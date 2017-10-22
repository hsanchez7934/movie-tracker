import { connect } from 'react-redux';
import Favorites from './../components/App/Favorites/Favorites.jsx';
import { favorite, addFavorite } from './../actions/index.js';

const mapStateToProps = (store) => ({
  favorites: store.favorites
});


const mapDispatchToProps = (dispatch) => ({
  addFavorite: (favorite) => {
    return dispatch(addFavorite(favorite))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
