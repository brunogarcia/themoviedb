import React, { Component } from 'react';
import api from '../api';
import Loading from './Loading';
import Error from './Error';

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
    this.getPopularMovies();
  }

  getPopularMovies() {
    api.getPopularMovies()
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(data => {
      this.setState({
        movies: data.results,
        loading: false,
      });
    })
    .catch(error => {
      this.setState({
        error: true
      });
    });
  }

  renderHome() {
    const { movies } = this.state;
    console.log(movies);

    return (
      <div className="Home-main">
        Home
      </div>
    );
  }

  render () {
    const { error, loading } = this.state;

    if (error) {
      return <Error/>;
    } else if (loading) {
      return <Loading/>;
    }

    return this.renderHome();
  }
}

export default Home;