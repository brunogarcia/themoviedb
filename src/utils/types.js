import {
  shape,
  number,
  string,
  array,
  arrayOf,
} from 'prop-types';

const movie = shape({
  id: number.isRequired,
  title: string.isRequired,
  vote_average: number.isRequired,
  overview: string.isRequired,
  poster_path: string,
  release_date: string.isRequired,
  homepage: string,
  genres: array,
});

const movies = arrayOf(movie);

export default {
  movie,
  movies,
};
