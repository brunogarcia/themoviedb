import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../constants';

const { HOST, DEFAULT, SIZE } = CONSTANTS.IMAGE;

function Image (props) {
  const { size, path, title } = props;
  const src = path ?
              `${HOST}${size}${path}` :
              (size === SIZE.SMALL) ?
              DEFAULT.SMALL : DEFAULT.LARGE;

  return (
    <img src={src} alt={title} title={title}/>
  );
}

Image.propTypes = {
  size: PropTypes.string.isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Image;
