import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  updateState(event, key) {
    if(key === 'email'){
      this.setState({
        [key]: event.target.value.toLowerCase()
      });
    } else {
      this.setState({
        [key]: event.target.value
      });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="login">
        {this.props.currUser.id &&
          <Redirect to="/" />
        }
        {!this.props.currUser.id && (
          <div className='login'>
            <input className="email-input" type="text" value={this.state.email} placeholder="Email" onChange={(event) => this.updateState(event, 'email')}/>
            <input className="password-input" type="text" value={this.state.password} placeholder="Password" onChange={(event) => this.updateState(event, 'password')}/>
            <button className="submit-button" onClick={(event) => this.handleClick(event)}>Submit</button>
            <div className="no-account">
              <h3 className="dont-have-account">Don't have an account?
                <Link to={'/register'}>
                  <span className="register-link">Click here to register.</span>
                </Link>
              </h3>
            </div>
          </div>
        )
        }
      </div>)
  }
}

Login.propTypes = {
  currUser: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func
};

export default Login;
