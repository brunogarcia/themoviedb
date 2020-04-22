import { FaBan } from 'react-icons/fa';
import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import api from '../../api/index';
import SearchResults from '../../components/SearchResults';
import './styles.css';

const MIN_LENGTH_SEARCH = 3;

/**
 * Container for display the search of the app
 *
 * @returns {Search} - The react component
 */
export default function Search() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState([]);

  const handleChangeInputSearch = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleResetSearch = () => {
    setQuery('');
    setMovies([]);
  };

  React.useEffect(() => {
    const { length } = query;

    if (length >= MIN_LENGTH_SEARCH) {
      api.search(query)
        .then((data) => {
          const { results } = data;
          setMovies(results);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [query]);

  const renderCloseIcon = () => {
    if (query.length >= MIN_LENGTH_SEARCH) {
      return (
        <div
          tabIndex="0"
          role="button"
          className="Search-clear"
          onClick={handleResetSearch}
          onKeyPress={handleResetSearch}
        >
          <FaBan />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Search-main navbar-text navbar-right">
      <Row>
        <Col xs={12}>
          <form className="Search-form form-inline">
            <div className="input-group input-group-lg">
              <FormGroup>
                <FormControl
                  size="lg"
                  type="text"
                  value={query}
                  onChange={handleChangeInputSearch}
                  placeholder="Search a movie"
                  className="Search-input form-control"
                />
              </FormGroup>
              {renderCloseIcon()}
              <SearchResults
                error={error}
                movies={movies}
                loading={loading}
                onMovieSelected={handleResetSearch}
              />
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}
