import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Image from '../components/Image';
import { Grid, Row, Col } from 'react-bootstrap';
import Details from './Details';

const props = {
  match: {
    params: {
      id: '1234',
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
  it('renders Loading component with default state', () => {
    const wrapper = shallow(<Details {...props} />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders Error component with some error', () => {
    const wrapper = shallow(<Details {...props} />);

    wrapper.setState({
      loading: false,
      error: true,
      movie: {},
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });
});

describe('Details lifecycle', () => {
  it('should call getMovie when did mount', () => {
    const getMovieMocked = jest.spyOn(Details.prototype, 'getMovie');

    shallow(<Details {...props} />);

    expect(getMovieMocked).toHaveBeenCalledTimes(1);

    getMovieMocked.mockClear();
  });
});

describe('Details render a movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Details {...props} />);

    wrapper.setState({
      loading: false,
      error: false,
      movie,
    });
  });


  it('must render Grid component', () => {
    expect(wrapper.find(Grid).exists()).toBeTruthy();
  });

  it('must render Row component', () => {
    expect(wrapper.find(Row).exists()).toBeTruthy();
  });

  it('must render Col component', () => {
    expect(wrapper.find(Col).exists()).toBeTruthy();
  });

  it('must render Image component', () => {
    expect(wrapper.find(Image).exists()).toBeTruthy();
  });
});
