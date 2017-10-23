import { connect } from 'react-redux';
import { addFavorite, deleteFavoriteDB } from './../actions/index.js';
import MovieCard from './../components/App/CardCatalog/MovieCard/MovieCard.jsx';


const mapStateToProps = (store) => ({
  login: store.login,
  favoritesDB: store.favoritesDB
});


const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFavorite(movie)),
  deleteFavorite: movie => dispatch(deleteFavoriteDB(movie)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
