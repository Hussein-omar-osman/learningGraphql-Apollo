import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import RickMorty from './RickMorty';
// import DisplayData from './DisplayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Hello world</h1>
        <RickMorty />
      </div>
    </ApolloProvider>
  );
}

export default App;
