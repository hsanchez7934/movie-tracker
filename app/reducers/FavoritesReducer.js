const favoritesDB = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.movie];
    case 'GET_FAVORITES':
      return action.favoritesDB;
    case 'DELETE_FAVORITE':
      return state.filter(movie => movie.movie_id !== action.favorite.movie_id);
    default:
      return state;
  }
};

export default favoritesDB;
