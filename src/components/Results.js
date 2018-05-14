import React, { Component } from 'react';
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
    const query = this.props.match.params.query;
    this.searchMovies(query);
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.match.params.query;
    this.searchMovies(query);
  }

  searchMovies(query) {
    api.search(query)
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

  renderResults() {
    const { movies } = this.state;

    return (
      <div className="Results-main">
        <Search {...this.props}/>
        <Alert data={this.props.match.params.query}/>
        <Movies data={movies}/>
      </div>
    );
  }

  render () {
    const {
      error, 
      loading,
    } = this.state;

    if (error) {
      return <Error/>;
    } else if (loading) {
      return <Loading/>;
    }

    return this.renderResults();
  }
}

export default Results;
