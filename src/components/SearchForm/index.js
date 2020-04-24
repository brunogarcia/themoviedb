import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import SearchContext from '../../contexts/search';

/**
 * Component for display the search form of the app
 *
 * @returns {SearchForm} - The react component
 */
export default function SearchForm() {
  const {
    query,
    handleChangeInputSearch,
  } = React.useContext(SearchContext);

  return (
    <FormGroup>
      <FormControl
        size="lg"
        type="text"
        value={query}
        className="form-control"
        placeholder="Search a movie"
        onChange={handleChangeInputSearch}
      />
    </FormGroup>
  );
}
