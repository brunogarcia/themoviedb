import React from 'react';
import {
  Container,
  Row,
  Col,
  Badge,
} from 'react-bootstrap';
import Image from '../Image';
import CONSTANTS from '../../utils/constants';
import getLabelInfo from '../../utils/getLabelInfo';
import Types from '../../utils/types';
import './styles.css';

const { SIZE } = CONSTANTS.IMAGE;

function renderImage(title, posterPath) {
  return <Image size={SIZE.LARGE} path={posterPath} title={title} />;
}

function renderTitle(title, releaseDate, voteAverage) {
  const voteAverageNormalized = Math.floor(voteAverage);
  const labelInfo = getLabelInfo(voteAverageNormalized);
  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <Container className="Details-title">
      <Row>
        <Col xs={2}>
          <h1>
            <Badge variant={labelInfo}>
              {voteAverage}
            </Badge>
          </h1>
        </Col>
        <Col>
          <h1>
            {title}
            &nbsp;
            <small>
              (
              {releaseYear}
              )
            </small>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

function renderOverview(overview) {
  return (
    <div className="Details-overview">
      <p>{overview}</p>
    </div>
  );
}

function renderGenres(genres) {
  if (genres && genres.length > 0) {
    const list = genres.map((genre) => genre.name).join(', ');

    return (
      <div className="Details-genres">
        <h2>Genres</h2>
        <p>{list}</p>
      </div>
    );
  }

  return null;
}

function renderHomepage(homepage, title) {
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

function Details({ movie }) {
  const {
    overview,
    genres,
    homepage,
    title,
    poster_path: posterPath,
    release_date: releaseDate,
    vote_average: voteAverage,
  } = movie;

  return (
    <Container className="Details-main">
      <Row>
        <Col xs={12} md={4} className="Details-image">
          {renderImage(title, posterPath)}
        </Col>

        <Col xs={12} md={8} className="Details-body">
          {renderTitle(title, releaseDate, voteAverage)}
          {renderOverview(overview)}
          {renderGenres(genres)}
          {renderHomepage(homepage, title)}
        </Col>
      </Row>
    </Container>
  );
}

Details.propTypes = {
  movie: Types.movie.isRequired,
};


export default Details;
