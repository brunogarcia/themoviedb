import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Movie from './Movie';

const movie = {
  id: 3,
  vote_average: 9,
  title: 'example 3',
  overview: 'Test',
  poster_path: '/path/to/image',
  release_date: '2017-04-28',
};

test('renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Movie key={movie.key} data={movie} />
    </MemoryRouter>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
