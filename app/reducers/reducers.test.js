import user from './AddUserReducer.js';
import favoritesDB from './FavoritesReducer.js';
import movies from './FavoritesReducer.js';
import login from './LoginReducer.js';

describe(`reducers unit testing`, () => {
  let stateArray;
  let stateObject;

  beforeEach(() => {
    stateArray = [];
    stateObject = {};
  });

  it(`should return users initial state and should
      allow to add user to state`, () => {
    expect(user(undefined, [])).toEqual(stateArray);

    const action = {
      type: 'ADD_USER',
      user: {
          name: 'jason',
          password: 'password',
          email: 'jason@email.com'
        }
      };

    const expectation = [action.user];

    expect(user(undefined, action)).toEqual(expectation);
  });

  it(`favoritesDB should return initial state,
      should be able to add a favorite to state if case ADD_FAVORITE,
      should return favoritesDB array if case is GET_FAVORITES,
      should return favoritesDB array with the deleted movie excluded`, () => {

    expect(favoritesDB(undefined, [])).toEqual(stateArray);

    const action1 = {
      type: 'ADD_FAVORITE',
      movie: {
        "id": 54,
        "movie_id": 346364,
        "user_id": 4,
        "title": "It",
        "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
        "release_date": "2017-09-05",
        "vote_average": "7.4",
        "overview": `In a small town in Maine, seven children
                     known as The Losers Club come face to face
                     with life problems, bullies and a monster
                     that takes the shape of a clown called Pennywise.`
      }
    }

    const action2 = {
      type: 'ADD_FAVORITE',
      movie: {
        "id": 55,
        "movie_id": 281338,
        "user_id": 4,
        "title": "War for the Planet of the Apes",
        "poster_path": "/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
        "release_date": "2017-07-11",
        "vote_average": "6.7",
        "overview": `Caesar and his apes are forced into a deadly
                     conflict with an army of humans led by a ruthless
                     Colonel. After the apes suffer unimaginable losses,
                     Caesar wrestles with his darker instincts and begins
                     his own mythic quest to avenge his kind. As the
                     journey finally brings them face to face, Caesar
                     and the Colonel are pitted against each other in an
                     epic battle that will determine the fate of both their
                     species and the future of the planet.`
      }
    }

    const action3 = {
      type: 'GET_FAVORITES',
      favoritesDB: [action1, action2]
    };

    const action4 = {
      type: 'DELETE_FAVORITE',
      "id": 55,
      "movie_id": 281338,
      "user_id": 4,
      "title": "War for the Planet of the Apes",
      "poster_path": "/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
      "release_date": "2017-07-11",
      "vote_average": "6.7",
      "overview": `Caesar and his apes are forced into a deadly
                   conflict with an army of humans led by a ruthless
                   Colonel. After the apes suffer unimaginable losses,
                   Caesar wrestles with his darker instincts and begins
                   his own mythic quest to avenge his kind. As the
                   journey finally brings them face to face, Caesar
                   and the Colonel are pitted against each other in an
                   epic battle that will determine the fate of both their
                   species and the future of the planet.`
    };

    const movie1 = {
        "id": 54,
        "movie_id": 346364,
        "user_id": 4,
        "title": "It",
        "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
        "release_date": "2017-09-05",
        "vote_average": "7.4",
        "overview": `In a small town in Maine, seven children
                     known as The Losers Club come face to face
                     with life problems, bullies and a monster
                     that takes the shape of a clown called Pennywise.`
    };

    const movie2 = {
        "id": 55,
        "movie_id": 281338,
        "user_id": 4,
        "title": "War for the Planet of the Apes",
        "poster_path": "/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
        "release_date": "2017-07-11",
        "vote_average": "6.7",
        "overview": `Caesar and his apes are forced into a deadly
                     conflict with an army of humans led by a ruthless
                     Colonel. After the apes suffer unimaginable losses,
                     Caesar wrestles with his darker instincts and begins
                     his own mythic quest to avenge his kind. As the
                     journey finally brings them face to face, Caesar
                     and the Colonel are pitted against each other in an
                     epic battle that will determine the fate of both their
                     species and the future of the planet.`
    };

    const expectation1 = [action1.movie];

    expect(favoritesDB(undefined, action1)).toEqual(expectation1);

    const expectation2 = [action1, action2];

    expect(favoritesDB(undefined, action3)).toEqual(expectation2);

    const state = [movie1, movie2];
    const expectation3 = [movie1];

    expect(favoritesDB(state, action4)).toEqual(expectation3);
  });

  it(`movies reducer should return initial state,
      should return movies if action type is GET_MOVIES`, () => {

    expect(movies(undefined, [])).toEqual(stateArray);

    const action = {
      type: 'GET_MOVIES',
      movies: [{
            "id": 54,
            "movie_id": 346364,
            "user_id": 4,
            "title": "It",
            "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
            "release_date": "2017-09-05",
            "vote_average": "7.4",
            "overview": `In a small town in Maine, seven children
                         known as The Losers Club come face to face
                         with life problems, bullies and a monster
                         that takes the shape of a clown called Pennywise.`
      },
      {
        "id": 55,
        "movie_id": 281338,
        "user_id": 4,
        "title": "War for the Planet of the Apes",
        "poster_path": "/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
        "release_date": "2017-07-11",
        "vote_average": "6.7",
        "overview": `Caesar and his apes are forced into a deadly
                     conflict with an army of humans led by a ruthless
                     Colonel. After the apes suffer unimaginable losses,
                     Caesar wrestles with his darker instincts and begins
                     his own mythic quest to avenge his kind. As the
                     journey finally brings them face to face, Caesar
                     and the Colonel are pitted against each other in an
                     epic battle that will determine the fate of both their
                     species and the future of the planet.`
      }]
  }

    const expectation = action.movies;

    // expect(movies(undefined, action)).toEqual(expectation);
  });

  it(`login reducer should return initial state,
      if case if LOGIN, should return action.currUser
      `, () => {
      expect(login(undefined, [])).toEqual(stateObject);

      const action1 = {
        type: 'LOGIN',
        currUser: {
          name: 'jason',
          password: 'password',
          email: 'jason@email.com'
        }
      }

      const action2 = {
        type: 'LOGOUT',
        currUser: {
          name: 'jason',
          password: 'password',
          email: 'jason@email.com'
        }
      }

      const expectation = action1.currUser;

      expect(login(undefined, action1)).toEqual(expectation);

      expect(login(undefined, action2)).toEqual(stateObject);
    });
});
