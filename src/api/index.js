import CONSTANTS from '../utils/constants';

const { HOST, KEY, PATHS } = CONSTANTS.API;

const {
  POPULAR,
  MOVIE,
  SEARCH,
  SIMILAR,
} = PATHS;

/**
 * Process the API response
 *
 * @param {object} res - the response from the API
 * @returns {object|Error} - could return an Error object or the data on JSON format
 */
function processResponse(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
}

/**
 * Get request info
 *
 * @param {object} config - The configuration to process the request
 * @param {string} config.path - The path to process the request
 * @param {string} config.params - The params to process the request
 * @returns {Promise} - The API response
 */
function getRequestInfo({ path, params = '' }) {
  const config = `${HOST}/${path}?api_key=${KEY}${params}`;
  return new Request(config);
}

/**
 * Get action
 *
 * @param {object} config - The configuration to process the request
 * @returns {Promise} - The API response
 */
async function get(config) {
  const requestInfo = getRequestInfo(config);

  return fetch(requestInfo)
    .then((response) => processResponse(response));
}

/**
 * Get popular movies
 *
 * @returns {Promise} - The API response
 */
function getPopularMovies() {
  const config = {
    path: `${MOVIE}/${POPULAR}`,
  };

  return get(config);
}

/**
 * Get movie
 *
 * @param {string} id - The movie id
 * @returns {Promise} - The API response
 */
function getMovie(id) {
  const config = {
    path: `${MOVIE}/${id}`,
  };

  return get(config);
}

/**
 * Get similar movies
 *
 * @param {string} id - The movie id
 * @returns {Promise} - The API response
 */
function getSimilarMovies(id) {
  const config = {
    path: `${MOVIE}/${id}/${SIMILAR}`,
  };

  return get(config);
}

/**
 * Search movie
 *
 * @param {string} query - The query to request
 * @returns {Promise} - The API response
 */
function search(query) {
  const config = {
    path: `${SEARCH}/${MOVIE}`,
    params: `&query=${query}&page=1&include_adult=false`,
  };

  return get(config);
}

export default {
  getPopularMovies,
  getMovie,
  getSimilarMovies,
  search,
};
