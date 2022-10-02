import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
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
export const GET_ALL_Movies = gql`
  query Movies {
    movies {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

export const GET_MOVIE_BY_NAME = gql`
  query FindMovieByName($name: String!) {
    findMovieByName(name: $name) {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      username
      age
    }
  }
`;
