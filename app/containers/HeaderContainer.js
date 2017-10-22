import { connect } from 'react-redux';
import { login, logout, loginUser } from './../actions/index.js';
import Header from './../components/App/Header/Header.jsx';

const mapStateToProps = (store) => ({
  currUser: store.login
})

const mapDispatchToProps = dispatch => ({
  logout: (currUser) => {
    dispatch(logout(currUser));
  },
  login: (currUser) => {
    dispatch(loginUser(currUser));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
