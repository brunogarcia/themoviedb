import React from 'react';
import api from '../../api/index';
import Movies from '../../components/Movies';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

/**
 * Container for display the home of the app
 *
 * @returns {Home} - The react component
 */
export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);

    api.getPopularMovies()
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
  }, []);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return <Movies movies={movies} />;
}
