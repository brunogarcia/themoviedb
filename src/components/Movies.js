import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import Movie from './Movie';
import Types from '../utils/types';

const Movies = props => (
  <Grid>
    <Row>
      {props.data.map(movie => <Movie key={movie.id} data={movie} />)}
    </Row>
  </Grid>
);

Movies.propTypes = {
  data: PropTypes.arrayOf(Types.movie.isRequired).isRequired,
};

export default Movies;
