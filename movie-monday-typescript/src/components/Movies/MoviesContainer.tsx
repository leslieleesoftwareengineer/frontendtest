import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MOVIES_QUERY } from "../../graphyql/Queries";
import Movies from "./Movies";

interface Props {
  movieName: string;
}

const MoviesContainer = ({ movieName }: Props) => {
  const { loading, data } = useQuery(GET_MOVIES_QUERY, {
    variables: { title: movieName },
  });

  return (
    <Movies loading={loading} movies={loading ? [] : data.Actor[0].movies} />
  );
};

export default MoviesContainer;
