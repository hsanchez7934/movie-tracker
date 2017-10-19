import { connect } from 'react-redux';
import { getMovies, getNowPlaying } from './../actions/index.js';
import CardCatalog from './../components/App/CardCatalog/CardCatalog.jsx';

const mapStateToProps = (store) => ({
  movies: store.movies })

const mapDispatchToProps = (dispatch) => ({
  // debugger
  getMovies: (movies) => {
    console.log('mapDTP: ', movies);
    return dispatch(getNowPlaying(movies))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardCatalog);
