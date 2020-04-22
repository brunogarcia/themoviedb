import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie';
import Types from '../../utils/types';
import './styles.css';

const Movies = ({ data }) => (
  <Container className="Movies-main">
    <Row>
      {data.map((movie) => <Movie key={movie.id} data={movie} />)}
    </Row>
  </Container>
);

Movies.propTypes = {
  data: PropTypes.arrayOf(Types.movie.isRequired).isRequired,
};

export default Movies;
