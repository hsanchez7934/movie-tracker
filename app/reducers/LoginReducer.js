const login = (state = [], action) => {
  switch(action.type) {
    case 'LOGIN':
      return [...state, action.currUser];
      default:
      return state;
  }
}

export default login;
