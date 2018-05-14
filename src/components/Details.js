import React, { Component } from 'react';
import Loading from './Loading';
import Error from './Error';
import Image from './Image';
import CONSTANTS from '../constants';
import { Grid, Row, Col } from 'react-bootstrap';
import api from '../api';
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
    this.getMovie();
  }

  getMovie() {
    api.getMovie(this.props.match.params.id)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(data => {
      this.setState({
        loading: false,
        movie: data,
      });
    })
    .catch(error => {
      this.setState({
        error: true
      });
    });
  }

  getGenres () {
    const { genres } = this.state.movie;

    if (genres.length > 0) {
      const list = genres.map(genre => genre.name).join(', ');
      
      return (
        < div className="Details-genres">
          <h2>Genres</h2>
          <p>{list}</p>
        </div>
      );
    }

    return null;
  }

  getHomepage () {
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
      poster_path,
      overview,
      release_date,
      vote_average,
    } = this.state.movie;

    const releaseYear = new Date(release_date).getFullYear();
    
    return (
      <Grid className="Details-main">
      <Row>
        <Col xs={12} md={4}>
          <Image size={SIZE.LARGE} path={poster_path} title={title}/>
        </Col>

        <Col xs={12} md={8} className="Details-body">
          <h1>
            <span className={`label label-default`}>{vote_average}</span>
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

    return this.renderMovie();
  }
}

export default Details;
