import React from 'react';
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

function getChoice(options) {
  const { icon, message } = options;

  return (
    <div className="Recommendation-main">
      <small>
        {icon}
        {message}
      </small>
    </div>
  );
}

const Recommendation = (props) => {
  const { vote } = props;

  if (vote >= VOTE_GOOD) {
    return getChoice(goodChoice);
  }

  if (vote <= VOTE_BAD) {
    return getChoice(badChoice);
  }

  return null;
};

Recommendation.propTypes = {
  vote: PropTypes.number.isRequired,
};

export default Recommendation;
