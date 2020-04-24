import React from 'react';
import PropTypes from 'prop-types';
import { FaBan } from 'react-icons/fa';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import Types from '../../utils/types';
import SearchResults from '../SearchResults';
import CONSTANTS from '../../utils/constants';
import './styles.css';

const { SEARCH } = CONSTANTS;

/**
 * Component for display the search of the app
 *
 * @param {object} props - The component props
 * @returns {Search} - The react component
 */
export default function Search(props) {
  const {
    error,
    query,
    movies,
    loading,
    handleResetSearch,
    handleChangeInputSearch,
  } = props;

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

              {
                (query.length >= SEARCH.MIN_LENGTH)
                  ? (
                    <FaBan
                      tabIndex="0"
                      role="button"
                      className="Search-clear"
                      onClick={handleResetSearch}
                      onKeyPress={handleResetSearch}
                    />
                  ) : null
              }

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

Search.propTypes = {
  error: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  handleResetSearch: PropTypes.func.isRequired,
  handleChangeInputSearch: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(Types.movie.isRequired).isRequired,
};
