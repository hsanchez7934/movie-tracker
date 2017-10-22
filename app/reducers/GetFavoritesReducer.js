const favoritesDB = (state = [], action) => {
  switch(action.type) {
    case 'GET_FAVORITES':
      return action.favoritesDB;
    default:
      return state;
  }
}

export default favoritesDB;
