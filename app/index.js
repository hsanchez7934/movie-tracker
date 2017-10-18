import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.js';
import MovieIndex from './components/movieIndex';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <AppContainer  />
  </Provider>,
     document.getElementById('main'))
