import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../utils/constants';

const { HOST } = CONSTANTS.IMAGE;

const getNoPosterSrc = size => size.NO_POSTER;

const getDefaultSrc = (size, path) => `${HOST}${size.DEFAULT}${path}`;

const Image = (props) => {
  const { size, path, title } = props;
  const src = path ? getDefaultSrc(size, path) : getNoPosterSrc(size);

  return <img src={src} alt={title} title={title} />;
};

Image.propTypes = {
  size: PropTypes.shape({
    DEFAULT: PropTypes.string.isRequired,
    NO_POSTER: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Image.defaultProps = {
  path: '',
};

export default Image;
