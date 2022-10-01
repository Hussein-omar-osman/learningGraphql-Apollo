import React from 'react';
import { gql, useQuery } from '@apollo/client';

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

const DisplayData = () => {
  const { data, loading } = useQuery(GET_ALL_USERS);
  const { data: movies } = useQuery(GET_ALL_Movies);

  console.log(data?.users);
  console.log(movies?.movies);

  if (loading) return <div>Loading</div>;
  return (
    <>
      <div>{data && data.users.map((user) => <h4>{user.name}</h4>)}</div>
      <div>
        {movies && movies?.movies.map((movie) => <h4>{movie.name}</h4>)}
      </div>
    </>
  );
};

export default DisplayData;
