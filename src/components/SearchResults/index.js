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

const SearchResults = (props) => {
  const {
    error,
    loading,
    movies,
  } = props;

  const handleMovieSelected = () => {
    props.onMovieSelected();
  };

  if (error) {
    return <p>{messages.error}</p>;
  }

  if (loading) {
    return <p>{messages.loading}</p>;
  }

  if (movies.length === 0) {
    return null;
  }

  return (
    <ListGroup className="SearchResults-main">
      {movies.map((movie) => {
        const { id, title, release_date: releaseDate } = movie;
        const releaseDateNormalized = new Date(releaseDate).getFullYear();

        return (
          <ListGroupItem key={id}>
            <Link onClick={handleMovieSelected} to={`/details/${id}`}>
              {title}
              <br />
              <small>({releaseDateNormalized})</small>
            </Link>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

SearchResults.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onMovieSelected: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(Types.movie.isRequired).isRequired,
};

export default SearchResults;
