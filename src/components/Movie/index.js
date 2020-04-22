import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Badge,
} from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import Recommendation from '../Recommendation';
import Image from '../Image';
import Types from '../../utils/types';
import CONSTANTS from '../../utils/constants';
import dateNormalized from '../../utils/dateNormalized';
import getLabelInfo from '../../utils/getLabelInfo';
import './styles.css';

const MAX_OVERVIEW_WORDS = 35;
const { SIZE } = CONSTANTS.IMAGE;

const Movie = ({ data }) => {
  const {
    id,
    title,
    vote_average: voteAverage,
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
  } = data;

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

              <Row>
                <Col xs={1}>
                  <Badge
                    variant={labelInfo}
                  >
                    {voteAverage}
                  </Badge>
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
                {overviewSmaller}
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
