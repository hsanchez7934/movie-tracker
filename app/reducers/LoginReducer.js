const login = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.currUser;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}

export default login;
