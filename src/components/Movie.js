import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

function Movie(props) {
  const {
    id, 
    title, 
    vote_average,
    overview,
    poster_path,
    release_date,
  } = props.data;

  return (
    <Col sm={12} md={6}>
        {title}
    </Col>
  );
}

Movie.propTypes = {
  data: PropTypes.object.isRequired
}

export default Movie;
