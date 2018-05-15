import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import './Search.css';

const MIN_LENGTH_SEARCH = 3;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmitSearch(e) {
    const { query } = this.state;
    e.preventDefault();
    this.props.history.push(`/results/${query}`);
  }

  render() {
    const { query } = this.state;
    const disabled = !query || query.length < MIN_LENGTH_SEARCH;

    return (
      <Grid className="Search-main">
        <Row>
          <Col xs={12}>
            <form className="Search-form form-inline" onSubmit={this.handleSubmitSearch}>
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  value={query}
                  onChange={this.handleChange}
                  placeholder="Writes a movie name"
                  className="Search-input form-control"
                />
                <span className="input-group-btn">
                  <Link
                    to={`/results/${query}`}
                    disabled={disabled}
                    className="Search-button btn btn-default">
                    <Icon name="search" /> Search
                  </Link>
                </span>
              </div>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Search;
