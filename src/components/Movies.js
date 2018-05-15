import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import Movie from './Movie';

const Movies = props => (
  <Grid>
    <Row>
      {props.data.map(movie => <Movie key={movie.id} data={movie} />)}
    </Row>
  </Grid>
);

Movies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
  })).isRequired,
};

export default Movies;
