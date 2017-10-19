import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className='login'>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="password"/>
        <button>Submit</button>
      </div>
    )
  }
}

export default Login;
