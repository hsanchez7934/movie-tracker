import * as actions from './index.js';

describe(`actions unit testing`, () => {
  let movie;

  beforeEach(() => {
    movie = {
      "id": 54,
      "movie_id": 346364,
      "user_id": 4,
      "title": "It",
      "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
      "release_date": "2017-09-05",
      "vote_average": "7.4",
      "overview": "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise."
      }
  })

  it(`should create an addUser action`, () => {
    const user = {
      name: 'jason',
      password: 'pickles',
      email: 'jason@email.com'
    }

    const expectation = actions.addUser(user);

    expect(expectation.type).toEqual('ADD_USER');
    expect(expectation.user.name).toEqual('jason');
    expect(expectation.user.password).toEqual('pickles');
    expect(expectation.user.email).toEqual('jason@email.com')
  });

  it(`should create a login action`, () => {
    const user = {
      email: 'jason@email.com',
      password: 'pickles'
    }

    const expectation = actions.login(user);

    expect(expectation.currUser.email).toEqual('jason@email.com');
    expect(expectation.currUser.password).toEqual('pickles');
  });

  it(`should create a logout action`, () => {
    const user = {};

    const expectation = actions.logout(user);
    expect(expectation.type).toEqual('LOGOUT');
    expect(expectation.currUser).toEqual(user);
  });

  it(`should create a getFavorites action`, () => {
      const expectation = actions.getFavorites(movie);

      expect(expectation.type).toEqual('GET_FAVORITES');
      expect(expectation.favoritesDB.title).toEqual('It');
      expect(expectation.favoritesDB.vote_average).toEqual('7.4');
    });

  it(`should create a getMovies action`, () => {
    const expectation = actions.getMovies(movie);

    expect(expectation.type).toEqual('GET_MOVIES');
    expect(expectation.movies.title).toEqual('It');
    expect(expectation.movies.vote_average).toEqual('7.4');
  });

  it(`should create a favorite action`, () => {
    const expectation = actions.favorite(movie);

    expect(expectation.type).toEqual('ADD_FAVORITE');
    expect(expectation.movie.title).toEqual('It');
    expect(expectation.movie.vote_average).toEqual('7.4');
  });

  it(`should create a deleteFavorite actions`, () => {
    const expectation = actions.deleteFavorite(movie);

    expect(expectation.type).toEqual('DELETE_FAVORITE');
    expect(expectation.favorite.title).toEqual('It');
    expect(expectation.favorite.vote_average).toEqual('7.4');
  });
})
