import { shape, number, string } from 'prop-types';

const movie = shape({
  id: number.isRequired,
  title: string.isRequired,
  vote_average: number.isRequired,
  overview: string.isRequired,
  poster_path: string,
  release_date: string.isRequired,
});

export default { movie };
