import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../utils/constants';

const { HOST, DEFAULT, SIZE } = CONSTANTS.IMAGE;

const getDefaultSrc = (size) => {
  const isSmallSize = (size === SIZE.SMALL);
  return isSmallSize ? DEFAULT.SMALL : DEFAULT.LARGE;
};

const getSrc = (size, path) => `${HOST}${size}${path}`;

const Image = (props) => {
  const { size, path, title } = props;
  const src = path ? getSrc(size, path) : getDefaultSrc(size);

  return <img src={src} alt={title} title={title} />;
};

Image.propTypes = {
  size: PropTypes.string.isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Image.defaultProps = {
  path: '',
};

export default Image;
