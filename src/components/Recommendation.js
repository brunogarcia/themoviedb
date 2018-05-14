import React from 'react';
import Icon from './Icon'
import './Recommendation.css';

const VOTE_GOOD = 8;
const VOTE_BAD = 5;

function goodChoice () {
  return getChoice({
    icon: 'thumbs-up',
    message: 'Editor choice'
  });
}

function badChoice() {
  return getChoice({
    icon: 'thumbs-down',
    message: 'Bad choice'
  });
}

function getChoice({icon, message}) {
  return (
    <div className="Recommendation-main">
      <Icon name={icon}/>
      &nbsp;
      <small>{message}</small>
    </div>
  );
}

function Recommendation (props) {
  if (props.vote >= VOTE_GOOD) {
    return goodChoice();
  }

  if (props.vote <= VOTE_BAD) {
    return badChoice();
  }

  return null;
}

export default Recommendation;
