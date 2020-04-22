import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie';
import Types from '../../utils/types';
import './styles.css';

/**
 * Component for display the movie list
 *
 * @param {object} props - The props of the component
 * @param {object} props.movies - The movie list
 * @returns {Movies} - The react component
 */
export default function Movies({ movies }) {
  return (
    <Container className="Movies-main">
      <Row>
        {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </Row>
    </Container>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(Types.movie.isRequired).isRequired,
};
