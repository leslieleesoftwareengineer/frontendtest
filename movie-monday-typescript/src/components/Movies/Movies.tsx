import React from "react";
import Movie, { MovieProps } from "./Movie";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";

interface Props {
  movies: MovieProps[];
  loading: boolean;
}

const Movies = ({ movies, loading }: Props) => {
  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {movies.map((movie, i) => (
        <Movie {...movie} key={i} />
      ))}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
