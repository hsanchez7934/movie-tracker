import { connect } from 'react-redux';
import { getMovies } from './../actions/index.js';
import App from './../components/App/App.jsx';

const mapStateToProps = (store) => ({
  movies: store.movies })



const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => {
    dispatch(getMovies(movies))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
