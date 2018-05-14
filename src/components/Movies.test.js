import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

const movies = [
    {
      id: 1,
      vote_average: 5,
      title: 'example 1'
    },
    {
      id: 2,
      vote_average: 5,
      title: 'example 2'
    },
    {
      id: 3,
      vote_average: 9,
      title: 'example 3'
    }
  ];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Movies data={movies} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
