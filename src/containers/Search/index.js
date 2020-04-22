import React, { Component } from 'react';
import { FaBan } from 'react-icons/fa';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import SearchResults from '../../components/SearchResults';
import api from '../../api/index';
import './styles.css';

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
    this.handleResetSearch = this.handleResetSearch.bind(this);
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
    this.checkMinLength(query);
  }

  handleResetSearch() {
    this.setState({
      query: '',
      movies: [],
    });
  }

  checkMinLength(query) {
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

  renderCloseIcon() {
    const { query } = this.state;

    if (query.length >= MIN_LENGTH_SEARCH) {
      return (
        <div
          tabIndex="0"
          role="button"
          className="Search-clear"
          onClick={this.handleResetSearch}
          onKeyPress={this.handleResetSearch}
        >
          <FaBan />
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      query,
      error,
      loading,
      movies,
    } = this.state;

    return (
      <div className="Search-main navbar-text navbar-right">
        <Row>
          <Col xs={12}>
            <form className="Search-form form-inline">
              <div className="input-group input-group-lg">
                <FormGroup>
                  <FormControl
                    size="lg"
                    type="text"
                    value={query}
                    onChange={this.handleChangeInputSearch}
                    placeholder="Search a movie"
                    className="Search-input form-control"
                  />
                </FormGroup>
                {this.renderCloseIcon()}
                <SearchResults
                  error={error}
                  movies={movies}
                  loading={loading}
                  onMovieSelected={this.handleResetSearch}
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
