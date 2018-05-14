import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Row, Col, Media } from 'react-bootstrap';
import CONSTANTS from '../constants';
import Image from './Image';
import Recommendation from './Recommendation';
import './Movie.css';

const MAX_OVERVIEW_WORDS = 40;
const { SIZE } = CONSTANTS.IMAGE;

function Movie(props) {
  const {
    id, 
    title, 
    vote_average,
    overview,
    poster_path,
    release_date,
  } = props.data;

  const overviewSmaller = overview
                          .split(' ')
                          .splice(0, MAX_OVERVIEW_WORDS)
                          .join(' ');
  
  const releaseDateNormalized = new Date(release_date)
                                .toLocaleString('en-us', 
                                { 
                                  day: 'numeric', 
                                  month: 'long', 
                                  year: 'numeric'
                                });

  const voteAverageNormalized = Math.floor(vote_average);

  const labelInfo = (voteAverageNormalized > 7) ? 
                    'label-success' : 
                    (voteAverageNormalized > 6) ? 
                    'label-info' :
                    (voteAverageNormalized > 5) ? 
                    'label-warning' : 'label-danger';

  return (
    <Col sm={12} lg={6}>
      <div className="Movie-card">
        <Row>
          <Col sm={12} md={4}>
          < Link to={`/details/${id}`}>
              <Image size={SIZE.SMALL} path={poster_path} title={title}/>
            </Link>
          </Col>

          <Col sm={12} md={8}>
            <div className="Movie-body">

              <Media>
                <Media.Left>
                  <span className={`label ${labelInfo}`}>{vote_average}</span>
                </Media.Left>

                <Media.Body>
                  <Media.Heading>
                    <Link to={`/details/${id}`}>
                      <span className="Movie-title">{title}</span>
                    </Link>
                    <br/>
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
                  <span className="glyphicon glyphicon-info-sign"
                      aria-hidden="true"></span>
                  &nbsp;
                  More info
                </Link>

                <Recommendation vote={voteAverageNormalized}/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

Movie.propTypes = {
  data: PropTypes.object.isRequired
}

export default Movie;
