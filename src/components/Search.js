import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchResults from './SearchResults';
import api from '../api/';
import './Search.css';

const MIN_LENGTH_SEARCH = 3;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      query: '',
      movies: [],
    };

    this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this);
    this.handleMovieSelected = this.handleMovieSelected.bind(this);
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  handleChangeInputSearch(event) {
    const query = event.target.value;
    this.setState({ query });
    this.resetSearch(query);
  }

  handleMovieSelected() {
    this.setState({
      query: '',
      movies: [],
    });
  }

  resetSearch(query) {
    const { length } = query;

    if (length < MIN_LENGTH_SEARCH) {
      this.setState({
        movies: [],
      });
    }

    if (length >= MIN_LENGTH_SEARCH) {
      this.searchMovie(query);
    }
  }

  searchMovie(query) {
    api.search(query)
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

  render() {
    const {
      query,
      error,
      loading,
      movies,
    } = this.state;

    return (
      <Grid className="Search-main">
        <Row>
          <Col xs={12}>
            <form className="Search-form form-inline">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  value={query}
                  onChange={this.handleChangeInputSearch}
                  placeholder="Search a movie"
                  className="Search-input form-control"
                />
                <SearchResults
                  error={error}
                  movies={movies}
                  loading={loading}
                  onMovieSelected={this.handleMovieSelected}
                />
              </div>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Search;
