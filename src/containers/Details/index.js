import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/index';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import DetailsComponent from '../../components/Details';

/**
 * Container for display the details of a movie
 *
 * @returns {Details} - The react component
 */
export default function Details() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    setLoading(true);

    api.getMovie(id)
      .then((data) => {
        setMovie(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
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
