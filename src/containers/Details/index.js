import React from 'react';
import PropTypes from 'prop-types';
import api from '../../api/index';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import DetailsComponent from '../../components/Details';

/**
 * Container for display the details of a movie
 *
 * @param {object} props - Th component props
 * @returns {Details} - The react component
 */
export default function Details({ match }) {
  const { id: movieId } = match.params;
  const [id] = React.useState(movieId);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    setLoading(true);

    api.getMovie(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <DetailsComponent movie={movie} />
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
