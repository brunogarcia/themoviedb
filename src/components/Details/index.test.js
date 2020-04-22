import React from 'react';
import { shallow } from 'enzyme';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../Image';
import Details from './index';

const match = {
  params: {
    id: '1234',
  },
};

const movie = {
  id: 1,
  title: 'test',
  vote_average: 8,
  overview: 'test',
  homepage: 'path/to',
  poster_path: 'path/to',
  release_date: '10/10/2018',
  genres: [
    { id: '123', name: 'test1' },
    { id: '456', name: 'test2' },
    { id: '789', name: 'test3' },
  ],
};

describe('Details render a movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Details movie={movie} match={match} />);
  });

  it('must render Container component', () => {
    expect(wrapper.find(Container).exists()).toBeTruthy();
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
