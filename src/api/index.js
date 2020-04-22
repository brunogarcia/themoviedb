import CONSTANTS from '../utils/constants';

const { HOST, KEY, PATH } = CONSTANTS.API;

const { POPULAR, MOVIE, SEARCH } = PATH;

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
 * Get action
 *
 * @param {object} config - The config to process the request
 * @param {string} config.path - The path to process the request
 * @param {string} config.subpath - The subpath to process the request
 * @param {string} config.params - The params to process the request
 * @returns {Promise} - The API response
 */
async function get({ path, subpath = '', params = '' }) {
  const config = `${HOST}/${path}${subpath}?api_key=${KEY}${params}`;
  const req = new Request(config);
  return fetch(req).then((res) => processResponse(res));
}

/**
 * Get popular movies
 *
 * @returns {Promise} - The API response
 */
function getPopularMovies() {
  const config = {
    path: POPULAR,
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
    path: MOVIE,
    subpath: `/${id}`,
  };

  return get(config);
}

/**
 * Get popular movies
 *
 * @param {string} query - The query to request
 * @returns {Promise} - The API response
 */
function search(query) {
  const config = {
    path: SEARCH,
    params: `&query=${query}&page=1&include_adult=false`,
  };

  return get(config);
}

export default {
  getPopularMovies,
  getMovie,
  search,
};
