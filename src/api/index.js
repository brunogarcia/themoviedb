import CONSTANTS from '../utils/constants';

const { HOST, KEY, PATH } = CONSTANTS.API;

const { POPULAR, MOVIE, SEARCH } = PATH;

const handleErrors = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
};

const get = ({ path, subpath = '', params = '' }) => {
  const config = `${HOST}/${path}${subpath}?api_key=${KEY}${params}`;
  const req = new Request(config);
  return fetch(req).then(res => handleErrors(res));
};

const api = {
  getPopularMovies: () => {
    const config = {
      path: POPULAR,
    };

    return get(config);
  },

  getMovie: (id) => {
    const config = {
      path: MOVIE,
      subpath: `/${id}`,
    };

    return get(config);
  },

  search: (query) => {
    const config = {
      path: SEARCH,
      params: `&query=${query}&page=1&include_adult=false`,
    };

    return get(config);
  },
};

export default api;
