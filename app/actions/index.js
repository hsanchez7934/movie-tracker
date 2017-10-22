import jenKey from './../key.js';
import { cleanData } from './../helper.js'

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

export const login = (currUser) => {
  return {
    type: 'LOGIN' ,
    currUser
  }
}

export const logout = (currUser) => {
  return {
    type: 'LOGOUT' ,
    currUser
  }
}

export const favorite = (movie) => {
  return {
    type: 'ADD_FAVORITE' ,
    movie
  }
}


export const loginUser = (currUser) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/users', {
      method: 'post',
      body: JSON.stringify(currUser),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(parsedResponse => dispatch(login(parsedResponse.data)))
    .catch(err => alert('Email and Password do not match'))
  }
}

export const postUser = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/users/new', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response =>
    response.ok ? response.json() : alert('Email already exists!'))
    .then(parsedResponse => {
      return cleanData(parsedResponse, user) }).then(cleanedData => dispatch(addUser(cleanedData)))
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

export const addFavorite = fav => {
  console.log(fav);
  return dispatch => {
    fetch('/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(fav),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(parsedResponse => {
        dispatch(favorite(fav))
    })
  }
}
