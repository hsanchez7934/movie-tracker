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

  handleClick(event) {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  // addUserToDatabase() {
  //   fetch('http://localhost:3000/api/users/new', {
  //     method: 'post',
  //     body: JSON.stringify(this.state),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => response.json())
  //   .then(parsed => console.log('parsed: ', parsed))
  //   .catch(err => console.log('err: ', err))
  // }

  render() {
    console.log("these are props! ", this.props);
    return (
      <div className='register'>
        <input type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.updateState(event, 'name')}/>
        <input type="text" placeholder="Email" value={this.state.email} onChange={(event) => this.updateState(event, 'email')}/>
        <input type="text" placeholder="Password"
          value={this.state.password} onChange={(event) => this.updateState(event, 'password')}/>
        <button onClick={(event) => this.handleClick(event)}>Submit</button>
      </div>
    )
  }
}

export default Register;
