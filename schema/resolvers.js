const { UserList, MovieList } = require('../FakeData');
const _ = require('lodash');

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
      const movies = _.filter(MovieList, { isInTheaters: value });
      return movies;
    },

    findMovieByName: (parent, { name }) => {
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },
};

module.exports = { resolvers };
