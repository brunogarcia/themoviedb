import React from 'react';
import PropTypes from 'prop-types'
import Movie from './Movie';
import { Grid, Row } from 'react-bootstrap';

function Movies(props) {
  const movies = props.data.map((movie) => {
    return <Movie key={movie.id} data={movie} />;
  });

  return (
    <Grid>
      <Row>
        {movies}
      </Row>
    </Grid>
  );
}

Movies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Movies;
