import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';
import getImageSrc from '../../utils/getImageSrc';

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
  const src = getImageSrc(size, path);
  const altText = `Poster of ${title}`;
  return (
    <Figure>
      <Figure.Image
        alt={altText}
        src={src}
      />
    </Figure>
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
