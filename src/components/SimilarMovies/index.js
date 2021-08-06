import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Types from '../../utils/types';
import SimilarMovie from '../SimilarMovie';
import './styles.css';

/**
 * Component for display the similar movies
 *
 * @param {object} props - The props of the component
 * @param {Array<object>} props.movies - The similar movies data
 * @returns {SimilarMovies} - The react component
 */
export default function SimilarMovies({ movies }) {
  return (
    <Container>
      <Row>
        <Col className="SimilarMovies-header">
          <h2 className="h3">Similar movies</h2>
        </Col>
      </Row>
      <Row>
        {
          movies.map((movie) => <SimilarMovie key={movie.id} movie={movie} />)
        }
      </Row>
    </Container>
  );
}

SimilarMovies.propTypes = {
  movies: Types.movies.isRequired,
};
