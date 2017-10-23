import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CardCatalogContainer from './../../containers/CardCatalogContainer.js'
import { Switch } from 'react-router'
import RegisterContainer from './../../containers/RegisterContainer.js'
import LoginContainer from './../../containers/LoginContainer.js'
import HeaderContainer from './../../containers/HeaderContainer.js'
import FavoritesContainer from './../../containers/FavoritesContainer.js'
import PropTypes from 'prop-types'

class App extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>

            <Route exact path='/' render={() => {
              return (
                <div>
                  <HeaderContainer />
                  <CardCatalogContainer />
                </div>
              )
            }} />

            <Route exact path='/login'
              render={() => {
                return (
                  <div>
                    <h2 className="movie-tracker-title">Movie Tracker</h2>
                    <LoginContainer />
                  </div>
                )
              }}/>
            <Route exact path='/register'
              render={() => {
                return (
                  <div>
                    <HeaderContainer />
                    <RegisterContainer />
                  </div>
                )
              }}/>

            <Route exact path='/favorites'
              render={() => {
                return (
                  <div>
                    <h2 className="movie-tracker-title">Movie Tracker</h2>
                    <FavoritesContainer />
                  </div>
                )
              }}/>
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  currUser: PropTypes.object,
  getMovies: PropTypes.func,
  movies: PropTypes.array
}

export default App
