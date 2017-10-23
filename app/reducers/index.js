import { combineReducers } from 'redux';
import movies from './GetMoviesReducer.js';
import user from './AddUserReducer.js';
import login from './LoginReducer.js';
import favoritesDB from './FavoritesReducer.js';

const rootReducer = combineReducers({
  movies,
  user,
  login,
  favoritesDB
});

export default rootReducer
