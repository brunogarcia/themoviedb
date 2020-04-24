import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchContext from '../../contexts/search';
import './styles.css';

const messages = {
  loading: 'Loading movies...',
  error: 'Ups! We found an error. Try again in a few minutes.',
};

/**
 * Component for display the rearch results
 *
 * @returns {SearchResults} - The react component
 */
export default function SearchResults() {
  const {
    error,
    loading,
    movies,
    handleResetSearch,
  } = React.useContext(SearchContext);

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

  return (
    <ListGroup className="SearchResults-main">
      {movies.map((movie) => {
        const { id, title, release_date: releaseDate } = movie;
        const releaseDateNormalized = new Date(releaseDate).getFullYear();

        return (
          <ListGroupItem key={id}>
            <Link
              to={`/details/${id}`}
              onClick={handleResetSearch}
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
