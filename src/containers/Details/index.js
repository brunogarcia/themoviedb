import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api/index';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import DetailsComponent from '../../components/Details';

/**
 * Container for display the details of a movie
 *
 * @returns {Details} - The react component
 */
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getMovie();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      this.showLoading();
      this.getMovie();
    }
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getMovie() {
    const { match } = this.props;
    const { id } = match.params;

    api.getMovie(id)
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            movie: { ...data },
          });
        }
      })
      .catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  showLoading() {
    const { loading } = this.state;

    if (!loading) {
      this.setState({
        loading: true,
      });
    }
  }

  render() {
    const { movie } = this.state;

    const {
      error,
      loading,
    } = this.state;

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
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
