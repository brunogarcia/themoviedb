import React, { Component } from 'react';
import api from '../../api/index';
import Movies from '../../components/Movies';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

/**
 * Container for display the home of the app
 *
 * @returns {Home} - The react component
 */
class Home extends Component {
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
    this.getPopularMovies();
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getPopularMovies() {
    api.getPopularMovies()
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            movies: data.results.slice(),
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

  render() {
    const { error, loading, movies } = this.state;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    return <Movies movies={movies} />;
  }
}

export default Home;
