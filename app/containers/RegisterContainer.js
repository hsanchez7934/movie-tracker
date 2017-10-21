import { connect } from 'react-redux';
import { addUser, postUser } from './../actions/index.js';
import Register from './../components/App/Register/Register.jsx';

const mapStateToProps = (store) => ({
  user: store.user,
  currUser: store.currUser
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => {
    return dispatch(postUser(user))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
