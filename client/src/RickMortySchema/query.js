import { gql } from '@apollo/client';

export const GET_THE_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        gender
        image
      }
    }
  }
`;
