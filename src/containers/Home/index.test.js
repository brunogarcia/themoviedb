import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import Search from '../Search';
import Movies from '../../components/Movies';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const props = {
  history: {
    push: () => {},
  },
};

const movies = [
  {
    id: 1,
    title: 'test',
    vote_average: 8,
    overview: 'test',
    poster_path: '',
    release_date: 'test',
    genres: ['test', 'test'],
    homepage: 'test',
  },
  {
    id: 2,
    title: 'test',
    vote_average: 5,
    overview: 'test',
    poster_path: '',
    release_date: 'test',
    genres: ['test', 'test'],
    homepage: 'test',
  },
];

describe('Home states', () => {
  it('renders Loading component with default state', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders Error component with some error', () => {
    const wrapper = shallow(<Home />);

    wrapper.setState({
      loading: false,
      error: true,
      movies: {},
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });
});

describe('Home lifecycle', () => {
  it('should call getPopularMovies when the component did mount', () => {
    const getPopularMoviesMocked = jest.spyOn(Home.prototype, 'getPopularMovies');

    shallow(<Home />);

    expect(getPopularMoviesMocked).toHaveBeenCalledTimes(1);

    getPopularMoviesMocked.mockClear();
  });
});

describe('Home render movies', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);

    wrapper.setState({
      loading: false,
      error: false,
      movies,
    });
  });

  it('must render Movies component', () => {
    expect(wrapper.find(Movies).exists()).toBeTruthy();
  });

  it('must render Search component', () => {
    wrapper.setProps({ history: { push: () => {} } });
    expect(wrapper.find(Search).exists()).toBeTruthy();
  });
});
