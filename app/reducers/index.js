import { combineReducers } from 'redux'
import movies from './GetMoviesReducer.js'
import user from './AddUserReducer.js';
import login from './LoginReducer.js';


const rootReducer = combineReducers({
  movies,
  user,
  login
});

export default rootReducer
