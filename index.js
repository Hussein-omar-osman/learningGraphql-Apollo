const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then((url) => {
  console.log(`You Api Server is Running on: ${url}`);
});
