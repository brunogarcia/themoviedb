import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Details from './index';
import DetailsComponent from '../../components/Details';

const match = {
  params: {
    id: '1234',
  },
};

const newProps = {
  match: {
    params: {
      id: '56789',
    },
  },
};

const movie = {
  id: 1,
  title: 'test',
  vote_average: 8,
  overview: 'test',
  poster_path: 'path/to',
  release_date: '10/10/2018',
  genres: ['test', 'test'],
  homepage: 'test',
};

describe('Details states', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Details match={match} />);
  });

  it('renders Loading component with default state', () => {
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders Error component with some error', () => {
    wrapper.setState({
      loading: false,
      error: true,
      movie: {},
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });
});

describe('Details lifecycle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Details match={match} />);
  });

  it('should call getMovie when did mount', () => {
    const getMovieMocked = jest.spyOn(Details.prototype, 'getMovie');

    shallow(<Details match={match} />);

    expect(getMovieMocked).toHaveBeenCalledTimes(1);

    getMovieMocked.mockClear();
  });

  it('should call getMovie after recives new props', () => {
    const getMovieMocked = jest.spyOn(Details.prototype, 'getMovie');

    wrapper.setProps(newProps);

    expect(getMovieMocked).toHaveBeenCalledTimes(2);

    getMovieMocked.mockClear();
  });

  it('should call showLoading after recives new props', () => {
    const showLoadingMocked = jest.spyOn(Details.prototype, 'showLoading');

    wrapper.setProps(newProps);

    expect(showLoadingMocked).toHaveBeenCalledTimes(1);

    showLoadingMocked.mockClear();
  });
});

describe('Details render a movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Details match={match} />);

    wrapper.setState({
      loading: false,
      error: false,
      movie,
    });
  });

  it('must render Details component', () => {
    expect(wrapper.find(DetailsComponent).exists()).toBeTruthy();
  });
});
