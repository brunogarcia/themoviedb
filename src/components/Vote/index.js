import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import getLabel from '../../utils/getLabel';

/**
 * Component for display the average vote of a movie
 *
 * @param {object} props - The props of the component
 * @param {string} props.vote - The average vote of the movie
 * @returns {Image} - The react component
 */
export default function Vote({ vote }) {
  const voteAverageNormalized = Math.floor(vote);

  const label = getLabel(voteAverageNormalized);

  return (
    <Badge pill className={label}>
      {voteAverageNormalized}
    </Badge>
  );
}

Vote.propTypes = {
  vote: PropTypes.number.isRequired,
};
