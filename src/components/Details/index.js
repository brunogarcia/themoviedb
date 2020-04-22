import React from 'react';
import isNil from 'lodash.isnil';
import {
  Container,
  Row,
  Col,
  Badge,
} from 'react-bootstrap';
import Image from '../Image';
import CONSTANTS from '../../utils/constants';
import getLabel from '../../utils/getLabel';
import Types from '../../utils/types';
import './styles.css';

const { SIZE } = CONSTANTS.IMAGE;

/**
 * Render the movie poster
 *
 * @param {string} title - the title
 * @param {string} posterPath - the poster path
 * @returns {Image} - the image
 */
function renderImage(title, posterPath) {
  return <Image size={SIZE.LARGE} path={posterPath} title={title} />;
}

/**
 * Render the movie title
 *
 * @param {string} title - the title
 * @param {string} releaseDate - the release date
 * @param {number} voteAverage - the vote average
 * @returns {Container} - the container with the title
 */
function renderTitle(title, releaseDate, voteAverage) {
  const voteAverageNormalized = Math.floor(voteAverage);
  const label = getLabel(voteAverageNormalized);
  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <Container className="Details-title">
      <Row>
        <Col xs={2}>
          <h1>
            <Badge variant={label}>
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

/**
 * Render the movie overview
 *
 * @param {string} overview - the overview
 * @returns {object} - the overview
 */
function renderOverview(overview) {
  return (
    <div className="Details-overview">
      <p>{overview}</p>
    </div>
  );
}

/**
 * Render the movie genres
 *
 * @param {Array} genres - the genres list
 * @returns {object|null} - the genres list
 */
function renderGenres(genres) {
  if (!isNil(genres) && genres.length > 0) {
    return (
      <div className="Details-genres">
        <h2>Genres</h2>
        <p>
          { genres.map((genre) => {
            const { id, name } = genre;
            return (
              <Badge
                key={id}
                variant="dark"
                className="Details-genre"
              >
                {name}
              </Badge>
            );
          })}
        </p>
      </div>
    );
  }

  return null;
}

/**
 * Render the movie homepage
 *
 * @param {string} homepage - the movie hompeage
 * @param {string} title - the movie title
 * @returns {object|null} - the homepage
 */
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

/**
 * Component for display the details of a movie
 *
 * @param {object} props - The props of the component
 * @param {object} props.movie - The movie data
 * @returns {Details} - The react component
 */
export default function Details({ movie }) {
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
        <Col sm={12} md={4} className="Details-image">
          {renderImage(title, posterPath)}
        </Col>

        <Col sm={12} md={8} className="Details-body">
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
