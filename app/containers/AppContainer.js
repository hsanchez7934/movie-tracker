import { connect } from 'react-redux';
import { getMovies, getNowPlaying } from './../actions/index.js';
import App from './../components/App/App.jsx';

const mapStateToProps = (store) => ({
  movies: store.movies,
  currUser: store.currUser
})



const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => {
    dispatch(getNowPlaying(movies))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
