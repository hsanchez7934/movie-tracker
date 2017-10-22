import { connect } from 'react-redux';
import { login, logout, loginUser, addFavorite, favorite, deleteFavorite, deleteFavoriteDB } from './../actions/index.js';
import MovieCard from './../components/App/CardCatalog/MovieCard/MovieCard.jsx';


const mapStateToProps = (store) => ({
  currUser: store.login,
  favorite: store.favorites
})


const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFavorite(movie)),
  deleteFavorite: movie => dispatch(deleteFavoriteDB(movie))
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
