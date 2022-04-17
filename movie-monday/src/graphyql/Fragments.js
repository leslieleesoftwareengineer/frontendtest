import { gql } from "@apollo/client";

export const MOVIES_FIELDS = gql`
fragment moviefiedls on Movie {
  movieId
  title
  year
  plot
  poster
  imdbRating
  _id
  genres {
    name
  }
  actors {
    name
  }
}
`;