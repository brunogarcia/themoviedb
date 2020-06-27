import CONSTANTS from './constants';

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
 * Get he image src
 *
 * @param {string} size - The size of the movie image
 * @param {string} path - The path of the movie image
 * @returns {string} - The image src
 */
export default function getImageSrc(size, path) {
  return path ? getDefaultSrc(size, path) : getNoPosterSrc(size);
}
