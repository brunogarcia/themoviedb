import {
  shape,
  number,
  string,
  arrayOf,
} from 'prop-types';

const genre = shape({
  id: number.isRequired,
  name: string.isRequired,
});

const movie = shape({
  id: number.isRequired,
  title: string.isRequired,
  vote_average: number.isRequired,
  overview: string.isRequired,
  poster_path: string,
  release_date: string.isRequired,
  homepage: string,
  genres: arrayOf(genre),
});

const movies = arrayOf(movie);

export default {
  movie,
  movies,
};
