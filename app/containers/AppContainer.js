import { connect } from 'react-redux';
import { getMovies, getNowPlaying, getFavoritesDB } from './../actions/index.js';
import App from './../components/App/App.jsx';

const mapStateToProps = (store) => ({
  movies: store.movies,
  currUser: store.login
})



const mapDispatchToProps = (dispatch) => ({
  getMovies: movies => dispatch(getNowPlaying(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
