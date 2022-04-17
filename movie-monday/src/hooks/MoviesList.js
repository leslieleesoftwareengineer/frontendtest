import { gql, useQuery } from "@apollo/client";

const MOVIES_GQL = gql`
  query Actor {
    Actor(name: "Tom Cruise") {
      name
      movies(first: 9, offset: 0, filter: { title_contains: "" }) {
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
    }
  }
`;

const buildQAL = (movieName = "", offset = 0) => gql`
query Actor {
  Actor(name: "Tom Cruise") {
    name
    movies(first: 9, offset: ${offset}, filter: { title_contains: "${movieName}" }) {
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
  }
}
`;

export default function MoviesList({ movieName, offset }) {
  const { loading, data } = useQuery(buildQAL(movieName, offset));

  return { loading, data };
}
