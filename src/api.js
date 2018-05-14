import CONSTANTS from './constants';

const { HOST, KEY, PATH } = CONSTANTS.API;

const { POPULAR, MOVIE, SEARCH} = PATH;

const api = {
  getPopularMovies: function() {
    const config = {
      path: POPULAR
    };

    return this.get(config);
  },

  getMovie: function(id) {
    const config = {
      path: MOVIE,
      subpath: `/${id}`,
    };

    return this.get(config);
  },

  search: function(query) {
    const config = {
      path: SEARCH,
      params: `&query=${query}&page=1&include_adult=false`,
    };

    return this.get(config);
  },

  get: function({path, subpath = '', params = ''}) {
    const myRequest = new Request(`${HOST}/${path}${subpath}?api_key=${KEY}${params}`);
    return fetch(myRequest);
  }
}

export default api;
