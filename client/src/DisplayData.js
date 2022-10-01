import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      id
      age
      name
      nationality
      username
    }
  }
`;
const GET_ALL_Movies = gql`
  query Movies {
    movies {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query FindMovieByName($name: String!) {
    findMovieByName(name: $name) {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const DisplayData = () => {
  const [inputData, setInputData] = useState('');
  const { data, loading } = useQuery(GET_ALL_USERS);
  const { data: movies } = useQuery(GET_ALL_Movies);
  const [fetchMovie, { data: movieSearched }] = useLazyQuery(GET_MOVIE_BY_NAME);

  // console.log(data?.users);
  // console.log(movies?.movies);
  // console.log(movieSearched);

  if (loading) return <div>Loading</div>;
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 3 }}>
        <div>{data && data.users.map((user) => <h4>{user.name}</h4>)}</div>
        <div>
          {movies && movies?.movies.map((movie) => <h4>{movie.name}</h4>)}
        </div>
      </div>
      <div style={{ flex: 2 }}>
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
