import jenKey from './../key.js';

export const getMovies = (movies) => {
  console.log('getMovie action creator: ', movies);
  return {
    type: 'GET_MOVIES',
    movies
  };
}


export const getNowPlaying = () => {
  console.log('get now playing func');
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${jenKey.jenKey}`)
    .then(response => response.json())
    .then((parsedResponse) => {console.log(parsedResponse);
      return (dispatch(getMovies(parsedResponse.results)))})
  }
}
