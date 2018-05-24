import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './styles.css';

const VOTE_GOOD = 8;
const VOTE_BAD = 5;

const goodChoice = {
  icon: 'thumbs-up',
  message: 'Editor choice',
};

const badChoice = {
  icon: 'thumbs-down',
  message: 'Bad choice',
};

const getChoice = ({ icon, message }) => (
  <div className="Recommendation-main">
    <Icon name={icon} /> <small>{message}</small>
  </div>
);

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
