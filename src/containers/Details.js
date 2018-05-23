import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Image from '../components/Image';
import CONSTANTS from '../constants';
import api from '../api/';
import './Details.css';

const { SIZE } = CONSTANTS.IMAGE;

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

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getMovie() {
    api.getMovie(this.props.match.params.id)
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            movie: data,
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

  getGenres() {
    const { genres } = this.state.movie;

    if (genres && genres.length > 0) {
      const list = genres.map(genre => genre.name).join(', ');

      return (
        <div className="Details-genres">
          <h2>Genres</h2>
          <p>{list}</p>
        </div>
      );
    }

    return null;
  }

  getHomepage() {
    const { homepage, title } = this.state.movie;

    if (homepage) {
      return (
        <div className="Details-homepage">
          <h2>Homepage</h2>
          <p><a href={homepage} alt={title} title={title}>{homepage}</a></p>
        </div>
      );
    }

    return null;
  }

  renderMovie() {
    const {
      title,
      overview,
      poster_path: posterPath,
      release_date: releaseDate,
      vote_average: voteAverage,
    } = this.state.movie;

    const releaseYear = new Date(releaseDate).getFullYear();

    return (
      <Grid className="Details-main">
        <Row>
          <Col xs={12} md={4}>
            <Image size={SIZE.LARGE} path={posterPath} title={title} />
          </Col>

          <Col xs={12} md={8} className="Details-body">
            <h1>
              <span className="label label-default">{voteAverage}</span>
              &nbsp;
              {title}
              &nbsp;
              <small>({releaseYear})</small>
            </h1>

            <div className="Details-overview">
              <p>{overview}</p>
            </div>

            {this.getGenres()}

            {this.getHomepage()}
          </Col>
        </Row>
      </Grid>
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

    return this.renderMovie();
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
