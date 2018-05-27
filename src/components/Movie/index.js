import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Media } from 'react-bootstrap';
import Recommendation from '../Recommendation';
import Image from '../Image';
import Types from '../../utils/types';
import CONSTANTS from '../../utils/constants';
import dateNormalized from '../../utils/dateNormalized';
import './styles.css';

const MAX_OVERVIEW_WORDS = 40;
const { SIZE } = CONSTANTS.IMAGE;

const getLabelInfo = (vote) => {
  let label = 'label-danger';

  if (vote > 5) {
    label = 'label-warning';
  }

  if (vote > 6) {
    label = 'label-info';
  }

  if (vote > 7) {
    label = 'label-success';
  }

  return label;
};

const Movie = (props) => {
  const {
    id,
    title,
    vote_average: voteAverage,
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
  } = props.data;

  const overviewSmaller = overview
    .split(' ')
    .splice(0, MAX_OVERVIEW_WORDS)
    .join(' ');

  const releaseDateNormalized = dateNormalized(releaseDate);

  const voteAverageNormalized = Math.floor(voteAverage);

  const labelInfo = getLabelInfo(voteAverageNormalized);

  return (
    <Col sm={12} lg={6}>
      <div className="Movie-card">
        <Row>
          <Col sm={12} md={4}>
            <Link to={`/details/${id}`}>
              <Image size={SIZE.SMALL} path={posterPath} title={title} />
            </Link>
          </Col>

          <Col sm={12} md={8}>
            <div className="Movie-body">

              <Media>
                <Media.Left>
                  <span className={`label ${labelInfo}`}>{voteAverage}</span>
                </Media.Left>

                <Media.Body>
                  <Media.Heading>
                    <Link to={`/details/${id}`}>
                      <span className="Movie-title">{title}</span>
                    </Link>
                    <br />
                    <small>
                      {releaseDateNormalized}
                    </small>
                  </Media.Heading>
                </Media.Body>
              </Media>

              <div className="Movie-overview">
                <p>{overviewSmaller}...</p>
              </div>

              <div className="Movie-details">
                <Link to={`/details/${id}`} className="Movie-details-link">
                  <span className="glyphicon glyphicon-info-sign" aria-hidden="true" />
                  &nbsp;
                  More info
                </Link>

                <Recommendation vote={voteAverageNormalized} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

Movie.propTypes = {
  data: Types.movie.isRequired,
};

export default Movie;