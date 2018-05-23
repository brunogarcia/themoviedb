import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Search from '../components/Search';
import Movies from '../components/Movies';
import Loading from '../components/Loading';
import Error from '../components/Error';

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
  },
  {
    id: 2,
    title: 'test',
    vote_average: 5,
    overview: 'test',
    poster_path: '',
    release_date: 'test',
  },
];

describe('Home component', () => {
  it('renders differently with default state', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders differently with some error', () => {
    const wrapper = shallow(<Home />);

    wrapper.setState({
      loading: false,
      error: true,
      movies: {},
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });

  it('must render Movies component when has movies', () => {
    const wrapper = shallow(<Home {...props} />);

    wrapper.setState({
      loading: false,
      error: false,
      movies,
    });

    expect(wrapper.find(Movies).exists()).toBeTruthy();
  });

  it('must render Search component when has movies', () => {
    const wrapper = shallow(<Home {...props} />);

    wrapper.setState({
      loading: false,
      error: false,
      movies,
    });

    wrapper.setProps({ history: { push: () => {} } });

    expect(wrapper.find(Search).exists()).toBeTruthy();
  });

  it('should call getPopularMovies when the component did mount', () => {
    const getPopularMoviesMocked = jest.spyOn(Home.prototype, 'getPopularMovies');

    shallow(<Home />);

    expect(getPopularMoviesMocked).toHaveBeenCalledTimes(1);

    getPopularMoviesMocked.mockClear();
  });
});
