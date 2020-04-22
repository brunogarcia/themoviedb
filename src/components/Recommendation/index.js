import React from 'react';
import isNil from 'lodash.isnil';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './styles.css';

const VOTE_GOOD = 8;
const VOTE_BAD = 5;

const goodChoice = {
  message: 'Editor choice',
  icon: <FaThumbsUp className="Recommendation-icon" />,
};

const badChoice = {
  message: 'Bad choice',
  icon: <FaThumbsDown className="Recommendation-icon" />,
};

/**
 * Get the recommendation data
 *
 * @param {number} vote - The movie vote
 * @returns {object|null} -The recommendation data
 */
function getRecommendation(vote) {
  if (vote >= VOTE_GOOD) {
    return goodChoice;
  }

  if (vote <= VOTE_BAD) {
    return badChoice;
  }

  return null;
}

/**
 * Component for display the recommendation of a movie
 *
 * @param {object} props - The props of the component
 * @param {number} props.vote - The movie vote
 * @returns {Recommendation|null} - The react component
 */
export default function Recommendation({ vote }) {
  const recommendation = getRecommendation(vote);

  if (isNil(recommendation)) {
    return null;
  }

  return (
    <div className="Recommendation-main">
      <small>
        {recommendation.icon}
        {recommendation.message}
      </small>
    </div>
  );
}

Recommendation.propTypes = {
  vote: PropTypes.number.isRequired,
};
