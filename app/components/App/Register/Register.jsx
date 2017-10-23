import React, { Component } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

class Register extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  updateState(event, key) {
    if (key === 'email') {
      this.setState({
        [key]: event.target.value.toLowerCase()
      })
    } else {
      this.setState({
        [key]: event.target.value
      })
    }
  }

  handleClick(event) {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='register'>
        <h2 className="register-here">Don't have an account? Register here!</h2>
        <input className="name-input" type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.updateState(event, 'name')}/>
        <input className="email-input" type="text" placeholder="Email" value={this.state.email} onChange={(event) => this.updateState(event, 'email')}/>
        <input className="password-input" type="text" placeholder="Password"
          value={this.state.password} onChange={(event) => this.updateState(event, 'password')}/>
        <button className="submit-button" onClick={(event) => this.handleClick(event)}>Submit</button>
      </div>
    )
  }
}

Register.propTypes = {
  addUser: PropTypes.func,
  user: PropTypes.object
}

export default Register
