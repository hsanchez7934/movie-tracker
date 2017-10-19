import jenKey from './../key.js';

export const getMovies = (movies) => {
  return {
    type: 'GET_MOVIES',
    movies
  };
}


export const getNowPlaying = () => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${jenKey.jenKey}`)
    .then(response => response.json())
    .then((parsedResponse) => (dispatch(getMovies(parsedResponse.results))))
  }
}
