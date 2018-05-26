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

const renderMessage = message => <p className="SearchResults-message">{message}</p>;

const renderResults = (movies, onMovieSelected) => (
  <ListGroup className="SearchResults-main">
    {movies.map((movie) => {
      const { id, title, release_date: releaseDate } = movie;
      const releaseDateNormalized = new Date(releaseDate).getFullYear();

      return (
        <ListGroupItem key={id}>
          <Link onClick={onMovieSelected} to={`/details/${id}`}>
            {title}
            <br />
            <small>({releaseDateNormalized})</small>
          </Link>
        </ListGroupItem>
      );
    })}
  </ListGroup>
);

const SearchResults = (props) => {
  const {
    error,
    loading,
    movies,
    onMovieSelected,
  } = props;

  if (error) {
    return renderMessage(messages.error);
  }

  if (loading) {
    return renderMessage(messages.loading);
  }

  if (movies.length === 0) {
    return null;
  }

  return renderResults(movies, onMovieSelected);
};

SearchResults.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onMovieSelected: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(Types.movie.isRequired).isRequired,
};

export default SearchResults;
