import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardCatalogContainer from './containers/CardCatalogContainer';
import App from './components/App/App.jsx';
import MovieIndex from './components/movieIndex';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import './main.scss';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
     document.getElementById('main'))
