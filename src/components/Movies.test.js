import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Movies from './Movies';

const movies = [
    {
      id: 1,
      vote_average: 5,
      title: 'example 1',
      overview: 'Test',
      poster_path: '/path/to/image',
      release_date: '2017-04-28',
    },
    {
      id: 2,
      vote_average: 3,
      title: 'example 2',
      overview: 'Test',
      poster_path: '/path/to/image',
      release_date: '2017-04-28',
    },
    {
      id: 3,
      vote_average: 9,
      title: 'example 3',
      overview: 'Test',
      poster_path: '/path/to/image',
      release_date: '2017-04-28',
    }
  ];

  test('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Movies data={movies} />
      </MemoryRouter>
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });