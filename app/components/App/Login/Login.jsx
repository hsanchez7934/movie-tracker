import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  updateState(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  render() {
    return (
      <div className='login'>
        <input type="text" placeholder="email" onChange={(event) => this.updateState(event, 'email')}/>
        <input type="text" placeholder="password" onChange={(event) => this.updateState(event, 'password')}/>
        <button>Submit</button>
        <div className="no-account">
          <h3>Don't have an account?
            <Link to={'/register'}>
              <span className="register-link">Click here to register.</span>
            </Link>
          </h3>
        </div>
      </div>
    )
  }
}

export default Login;
