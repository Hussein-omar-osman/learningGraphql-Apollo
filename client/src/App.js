import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import RickMorty from './RickMorty';
import TrialDates from './TrialDates';
// import DisplayData from './DisplayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          dispaly: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Pick a Date</h1>

        <TrialDates />
      </div>
    </ApolloProvider>
  );
}

export default App;
