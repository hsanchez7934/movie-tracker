import { connect } from 'react-redux'
import { loginUser } from './../actions/index.js'
import Login from './../components/App/Login/Login.jsx'

const mapStateToProps = (store) => ({
  currUser: store.login
})

const mapDispatchToProps = (dispatch) => ({
  login: (currUser) => {
    return dispatch(loginUser(currUser))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
