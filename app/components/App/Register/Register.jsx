import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='register'>
        REGISTER!
      </div>
    )
  }
}

export default Register;
