import { gql } from "@apollo/client";
import { MOVIES_FIELDS } from './Fragments';

export const GET_MOVIES_QUERY = gql`
  ${MOVIES_FIELDS}
  query GetMoviesByName($name: String = "Tom Cruise", $title: String = "") {
    Actor(name: $name) {
      name
      movies(offset: 0, filter: { title_contains: $title }) {
        ...moviefiedls
      }
    }
  }
`;

