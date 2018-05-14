import React, { Component } from 'react';
import api from '../api';

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
      console.log(data.results);
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

  render () {
    return 'Home';
  }
}

export default Home;
