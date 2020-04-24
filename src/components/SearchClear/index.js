import React from 'react';
import { FaBan } from 'react-icons/fa';
import CONSTANTS from '../../utils/constants';
import SearchContext from '../../contexts/search';
import './styles.css';

const { SEARCH } = CONSTANTS;

/**
 * Component for display the search clear of the app
 *
 * @returns {SearchClear} - The react component
 */
export default function SearchClear() {
  const {
    query,
    handleResetSearch,
  } = React.useContext(SearchContext);

  return (
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
  );
}
