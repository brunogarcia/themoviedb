import CONSTANTS from './constants';

const { HOST, KEY, PATH } = CONSTANTS.API;

const api = {
  getPopularMovies: function() {
    const config = {
      path: PATH.POPULAR
    };

    return this.get(config);
  },

  search: function(query) {
    const config = {
      path: PATH.SEARCH,
      params: `&query=${query}&page=1&include_adult=false`,
    };

    return this.get(config);
  },

  get: function({path, params = ''}) {
    const myRequest = new Request(`${HOST}/${path}?api_key=${KEY}${params}`);
    return fetch(myRequest);
  }
}

export default api;
