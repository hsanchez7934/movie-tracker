import { connect } from 'react-redux';
import { login, loginUser } from './../actions/index.js';
import Header from './../components/App/Header/Header.jsx';

const mapStateToProps = (store) => ({
  currUser: store.login
})

const mapDispatchToProps = (dispatch) => ({
  login: (currUser) => {
    return dispatch(loginUser(currUser));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
