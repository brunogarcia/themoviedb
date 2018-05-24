import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Search from '../Search';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Image from '../../components/Image';
import CONSTANTS from '../../utils/constants';
import api from '../../api/';
import './styles.css';

const { SIZE } = CONSTANTS.IMAGE;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      loading: true,
      error: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getMovie();
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;

    if (prevState.id !== id) {
      this.getMovie();
    }
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getMovie() {
    const { id } = this.props.match.params;

    api.getMovie(id)
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            id,
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
      <div className="Details-wrapper">
        <Search />
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
