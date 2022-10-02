import React, { useState } from 'react';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import {
  GET_ALL_USERS,
  GET_ALL_Movies,
  GET_MOVIE_BY_NAME,
  CREATE_USER_MUTATION,
} from './localHost_gql/query';

const hardCodedUser = {
  name: 'hussein',
  username: 'hhavicci',
  age: 22,
};

const DisplayData = () => {
  const [inputData, setInputData] = useState('');
  const { data, loading, refetch } = useQuery(GET_ALL_USERS);
  const { data: movies } = useQuery(GET_ALL_Movies);
  const [fetchMovie, { data: movieSearched }] = useLazyQuery(GET_MOVIE_BY_NAME);
  const [createUser] = useMutation(CREATE_USER_MUTATION);

  // console.log(data?.users);
  // console.log(movies?.movies);
  // console.log(movieSearched);

  if (loading) return <div>Loading</div>;
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 3 }}>
        <div>
          {data &&
            data.users.map((user) => (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.nationality}</p>
              </div>
            ))}
        </div>
        <div>
          {movies && movies?.movies.map((movie) => <h4>{movie.name}</h4>)}
        </div>
      </div>
      <div style={{ flex: 2 }}>
        <h2>On clicking this btn you will create a new user</h2>
        <button
          onClick={() => {
            createUser({ variables: { input: hardCodedUser } });
            refetch();
          }}
        >
          Create New User
        </button>
        <h3>Search Movies</h3>
        <input
          type='text'
          placeholder='Search...'
          value={inputData}
          name='inputData'
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={() => fetchMovie({ variables: { name: inputData } })}>
          Search
        </button>
        {movieSearched && (
          <>
            <h1>{movieSearched?.findMovieByName?.name}</h1>
            <h2>{movieSearched?.findMovieByName?.yearOfPublication}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayData;
