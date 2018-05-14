import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';

const movie = {
    id: 3,
    vote_average: 9,
    title: 'example 3',
    overview: 'Test',
    poster_path: '/path/to/image',
    release_date: '2017-04-28',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Movie key={movie.key} data={movie} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
