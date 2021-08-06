import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import Vote from '../Vote';
import Image from '../Image';
import Recommendation from '../Recommendation';
import Types from '../../utils/types';
import CONSTANTS from '../../utils/constants';
import getDateNormalized from '../../utils/getDateNormalized';
import getOverviewSmaller from '../../utils/getOverviewSmaller';

import './styles.css';

const { SIZE } = CONSTANTS.IMAGE;

/**
 * Component for display the movie
 *
 * @param {object} props - The props of the component
 * @param {object} props.movie - The movie data
 * @returns {Movie} - The react component
 */
export default function Movie({ movie }) {
  const {
    id,
    title,
    vote_average: voteAverage,
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
  } = movie;

  const releaseDateNormalized = getDateNormalized(releaseDate);

  return (
    <Col sm={12} lg={6}>
      <div
        className="Movie-card"
        data-cy="movie-item"
      >
        <Row>
          <Col sm={12} md={4}>
            <Link to={`/details/${id}`}>
              <Image size={SIZE.SMALL} path={posterPath} title={title} />
            </Link>
          </Col>

          <Col sm={12} md={8}>
            <div className="Movie-body">
              <Row>
                <Col xs={2}>
                  <Vote vote={voteAverage} />
                </Col>
                <Col xs={10}>
                  <Link to={`/details/${id}`}>
                    <span className="Movie-title">{title}</span>
                  </Link>
                  <br />
                  <small>
                    {releaseDateNormalized}
                  </small>
                </Col>
              </Row>

              <p className="Movie-overview">
                {getOverviewSmaller(overview)}
                ...
              </p>

              <div className="Movie-details">
                <Link to={`/details/${id}`} className="Movie-details-link">
                  <FaInfoCircle />
                  &nbsp;
                  <small>
                    More info
                  </small>
                </Link>

                <Recommendation vote={voteAverage} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

Movie.propTypes = {
  movie: Types.movie.isRequired,
};
