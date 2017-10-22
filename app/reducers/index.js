import { combineReducers } from 'redux';
import movies from './GetMoviesReducer.js';
import user from './AddUserReducer.js';
import login from './LoginReducer.js';
import favorites from './AddFavoriteReducer.js';


const rootReducer = combineReducers({
  movies,
  user,
  login,
  favorites
});

export default rootReducer
