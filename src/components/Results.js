import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../api';
import Search from './Search';
import Movies from './Movies';
import Loading from './Loading';
import Error from './Error';
import Alert from './Alert';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      movies: [],
    };
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    const { query } = this.props.match.params;
    this.searchMovies(query);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps.match.params;
    this.searchMovies(query);
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  searchMovies(query) {
    api.search(query)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            movies: data.results,
            loading: false,
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

  renderResults() {
    const { movies } = this.state;

    return (
      <div className="Results-main">
        <Search {...this.props} />
        <Alert data={this.props.match.params.query} />
        <Movies data={movies} />
      </div>
    );
  }

  render() {
    const {
      error,
      loading,
    } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    return this.renderResults();
  }
}

Results.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Results;
