import React from 'react';
import api from '../../api/index';
import SearchComponent from '../../components/Search';
import CONSTANTS from '../../utils/constants';

const { SEARCH } = CONSTANTS;

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

    if (length >= SEARCH.MIN_LENGTH) {
      api.search(query)
        .then((data) => {
          const { results } = data;
          setMovies(results);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <SearchComponent
      error={error}
      query={query}
      movies={movies}
      loading={loading}
      handleResetSearch={handleResetSearch}
      handleChangeInputSearch={handleChangeInputSearch}
    />
  );
}
