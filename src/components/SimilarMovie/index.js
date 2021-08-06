import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Vote from '../Vote';
import Image from '../Image';
import Types from '../../utils/types';
import CONSTANTS from '../../utils/constants';
import getOverviewSmaller from '../../utils/getOverviewSmaller';
import './styles.css';

const { SIZE } = CONSTANTS.IMAGE;

/**
 * Component for display the similar movie
 *
 * @param {object} props - The props of the component
 * @param {object} props.movie - The similar movie data
 * @returns {SimilarMovie} - The react component
 */
export default function SimilarMovie({ movie }) {
  const {
    id,
    overview,
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
  } = movie;

  return (
    <Col
      sm={12}
      lg={4}
      data-cy="similar-movie-item"
    >
      <Row noGutters>
        <Col sm={12} md={4}>
          <Link to={`/details/${id}`}>
            <Image size={SIZE.SMALL} path={posterPath} title={title} />
          </Link>
        </Col>
        <Col sm={12} md={8}>
          <div className="SimilarMovie-body">
            <Row>
              <Col xs={2}>
                <Vote vote={voteAverage} />
              </Col>
              <Col xs={10}>
                <Link to={`/details/${id}`}>
                  <span className="SimilarMovie-title">{title}</span>
                </Link>
              </Col>
            </Row>

            <p className="SimilarMovie-overview">
              {getOverviewSmaller(overview)}
              ...
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  );
}

SimilarMovie.propTypes = {
  movie: Types.movie.isRequired,
};
