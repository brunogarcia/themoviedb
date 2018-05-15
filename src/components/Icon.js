import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { name } = props;
  return (
    <span className={`glyphicon glyphicon-${name}`} aria-hidden="true" />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
