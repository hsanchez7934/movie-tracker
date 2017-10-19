import { combineReducers } from 'redux'
import movies from './GetMoviesReducer.js'
import user from './AddUserReducer.js'

const rootReducer = combineReducers({
  movies,
  user
});

export default rootReducer
