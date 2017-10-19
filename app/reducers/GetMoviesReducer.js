const movies = (state = [], action) => {
  console.log('get movies reducer: ', action);
  switch (action.type) {
    case "GET_MOVIES":
      return action.movies;
    default:
      return state;
  }
};

export default movies;
