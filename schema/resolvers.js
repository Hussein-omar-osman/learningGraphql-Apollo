const { UserList, MovieList } = require('../FakeData');
const _ = require('lodash');

// Lodash is a popular javascript based library which provides 200+ functions to facilitate web development. It provides helper functions like map, filter,

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, { id }) => {
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return MovieList;
    },

    movie: (parent, { id }) => {
      const movie = _.find(MovieList, { id: Number(id) });
      return movie;
    },

    inTheaterOrNot: (parent, { value }) => {
      const movies = MovieList.filter((movie) => movie.isInTheaters === value);
      return movies;
    },

    findMovieByName: (parent, { name }) => {
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },

  User: {
    favoriteMovies: () => {
      return MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2020
      );
    },
  },
};

module.exports = { resolvers };
