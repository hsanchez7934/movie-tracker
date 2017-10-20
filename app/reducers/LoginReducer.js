const login = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.currUser;
      default:
      return state;
  }
}

export default login;
