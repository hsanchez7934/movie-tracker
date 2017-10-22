import { connect } from 'react-redux';
import { login, logout, loginUser, addFavorite, favorite } from './../actions/index.js';
import MovieCard from './../components/App/CardCatalog/MovieCard/MovieCard.jsx';


const mapStateToProps = (store) => ({
  currUser: store.login,
  favorite: store.favorites
})


const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFavorite(movie))
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
