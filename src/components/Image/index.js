import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../utils/constants';

const { HOST } = CONSTANTS.IMAGE;

/**
 * Get the no-poster image source
 *
 * @param {string} size - The size of the movie image
 * @returns {string} - The no-poster image source
 */
function getNoPosterSrc(size) {
  return size.NO_POSTER;
}

/**
 * Get the default image source
 *
 * @param {string} size - The size of the movie image
 * @param {string} path - The path of the movie image
 * @returns {string} - The default image source
 */
function getDefaultSrc(size, path) {
  return `${HOST}${size.DEFAULT}${path}`;
}

/**
 * Component for display the image of a movie
 *
 * @param {object} props - The props of the component
 * @param {string} props.size - The size of the movie image
 * @param {string} props.path - The path of the movie image
 * @param {string} props.title - The title of the movie
 * @returns {Image} - The react component
 */
export default function Image({ size, path, title }) {
  const src = path ? getDefaultSrc(size, path) : getNoPosterSrc(size);
  return (
    <img src={src} alt={title} title={title} />
  );
}

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
