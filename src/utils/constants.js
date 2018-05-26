export default {
  APP: {
    PATH: {
      HOME: '/',
      DETAILS: '/details/:id',
    },
  },
  API: {
    HOST: 'https://api.themoviedb.org/3',
    // TODO: move this key to .env file
    KEY: '2fc1c5cdbc3e418d12cc5110714a82eb',
    PATH: {
      POPULAR: 'movie/popular',
      SEARCH: 'search/movie',
      MOVIE: 'movie',
    },
  },
  IMAGE: {
    HOST: 'http://image.tmdb.org/t/p/',
    DEFAULT: {
    },
    SIZE: {
      SMALL: {
        DEFAULT: 'w185',
        NO_POSTER: 'https://dummyimage.com/185x278/eeeeee/999999&text=No+poster',
      },
      LARGE: {
        DEFAULT: 'w300',
        NO_POSTER: 'https://dummyimage.com/300x450/eeeeee/999999&text=No+poster',
      },
    },
  },
};
