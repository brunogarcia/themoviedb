import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Types from '../../utils/types';
import './styles.css';

const messages = {
  loading: 'Loading movies...',
  error: 'Ups! We found an error. Try again in a few minutes.',
};

/**
 * Render the results
 *
 * @param {Array<object>} movies - The movie list
 * @param {Function} onMovieSelected - The handler when the user selects a movie
 * @returns {ListGroup} - The react-bootstrap component
 */
function renderResults(movies, onMovieSelected) {
  return (
    <ListGroup className="SearchResults-main">
      {movies.map((movie) => {
        const { id, title, release_date: releaseDate } = movie;
        const releaseDateNormalized = new Date(releaseDate).getFullYear();

        return (
          <ListGroupItem key={id}>
            <Link
              to={`/details/${id}`}
              onClick={onMovieSelected}
            >
              {title}
              <br />
              <small>
                (
                {releaseDateNormalized}
                )
              </small>
            </Link>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}

/**
 * Component for display the rearch results
 *
 * @param {object} props - The props of the component
 * @param {boolean} props.error - The error flag
 * @param {boolean} props.loading - The loading flag
 * @param {Array<object>} props.movies - The movie list
 * @param {Function} props.onMovieSelected - The handler when the user selected a movie
 * @returns {SearchResults} - The react component
 */
export default function SearchResults(props) {
  const {
    error,
    loading,
    movies,
    onMovieSelected,
  } = props;

  if (error) {
    return (
      <p className="SearchResults-message">
        {messages.error}
      </p>
    );
  }

  if (loading) {
    return (
      <p className="SearchResults-message">
        {messages.loading}
      </p>
    );
  }

  if (movies.length === 0) {
    return null;
  }

  return renderResults(movies, onMovieSelected);
}

SearchResults.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onMovieSelected: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(Types.movie.isRequired).isRequired,
};
