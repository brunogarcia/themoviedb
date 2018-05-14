import CONSTANTS from './constants';

const { HOST, KEY, PATH } = CONSTANTS.API;

const api = {
  getPopularMovies: function() {
    const config = {
      path: PATH.POPULAR
    };

    return this.get(config);
  },

  get: function({path}) {
    const myRequest = new Request(`${HOST}/${path}?api_key=${KEY}`);
    return fetch(myRequest);
  }
}

export default api;
