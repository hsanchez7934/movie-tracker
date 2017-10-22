import { connect } from 'react-redux';
import { getMovies, getNowPlaying, addFavorite } from './../actions/index.js';
import CardCatalog from './../components/App/CardCatalog/CardCatalog.jsx';

const mapStateToProps = (store) => ({
  movies: store.movies,
  favorite: store.favorites,
  login: store.login
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => {
     dispatch(getNowPlaying(movies))
  },
  addFavorite: (movie) => {
     dispatch(addFavorite(movie))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardCatalog);
