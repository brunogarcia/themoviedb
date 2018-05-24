import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router';
import Movie from './index';

const movie = {
  id: 3,
  vote_average: 9,
  title: 'example 3',
  overview: 'Test',
  poster_path: '/path/to/image',
  release_date: '2017-04-28',
};

test('renders correctly', () => {
  const component = renderer.create(<Router><Movie key={movie.key} data={movie} /></Router>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
