import jenKey from './../key.js';

export const getMovies = (movies) => {
  return {
    type: 'GET_MOVIES',
    movies
  };
}


export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  };
}


export const postUser = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/users/new', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(parsedResponse => dispatch(addUser(parsedResponse)))
    .catch(err => console.log('err: ', err))
  }
}


export const getNowPlaying = () => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${jenKey.jenKey}`)
    .then(response => response.json())
    .then((parsedResponse) => (dispatch(getMovies(parsedResponse.results))))
  }
}
