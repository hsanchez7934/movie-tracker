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

  updateState(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  addUserToDatabase() {
    fetch('http://localhost:3000/api/users/new', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(parsed => console.log('parsed: ', parsed))
    .catch(err => console.log('err: ', err))
  }

  render() {
    return (
      <div className='register'>
        <input type="text" placeholder="Name" onChange={(event) => this.updateState(event, 'name')}/>
        <input type="text" placeholder="Email" onChange={(event) => this.updateState(event, 'email')}/>
        <input type="text" placeholder="Password" onChange={(event) => this.updateState(event, 'password')}/>
        <button onClick={this.addUserToDatabase.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default Register;
