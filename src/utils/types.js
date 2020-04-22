import {
  shape,
  number,
  string,
  array,
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

export default { movie };
