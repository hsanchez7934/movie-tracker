import jenKey from './../key.js';
import { cleanData } from './../helper.js'

export const getFavorites = (favoritesDB) => {
  return {
    type: 'GET_FAVORITES',
    favoritesDB
  }
}

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

export const deleteFavorite = (favorite) => {
  return {
    type: 'DELETE_FAVORITE',
    favorite
  }
}


export const getFavoritesDB = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/users/${id}/favorites`)
    .then(response => response.json())
    .then(parsedResponse => {
      console.log(parsedResponse);
      return dispatch(getFavorites(parsedResponse.data))
    })
  }
}


export const deleteFavoriteDB = (favorite) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/users/${favorite.user_id}/favorites/${favorite.movie_id}`, {
      method: 'DELETE',
      body: JSON.stringify([favorite.user_id, favorite.movie_id]),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(parsedResponse => console.log('delete response: ', parsedResponse))
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
