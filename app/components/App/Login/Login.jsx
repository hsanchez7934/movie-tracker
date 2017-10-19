import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
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
        <input type="text" placeholder="name" onChange={(event) => this.updateState(event, 'name')}/>
        <input type="text" placeholder="email" onChange={(event) => this.updateState(event, 'email')}/>
        <input type="text" placeholder="password" onChange={(event) => this.updateState(event, 'password')}/>
        <button>Submit</button>
      </div>
    )
  }
}

export default Login;
