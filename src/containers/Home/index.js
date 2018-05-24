import React, { Component } from 'react';
import api from '../../api/';
import Search from '../Search';
import Movies from '../../components/Movies';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

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

  renderHome() {
    const { movies } = this.state;

    return (
      <div className="Home-main">
        <Search />
        <Movies data={movies} />
      </div>
    );
  }

  render() {
    const { error, loading } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    return this.renderHome();
  }
}

export default Home;
