import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SimilarMovie from './index';

const movie = {
  id: 419704,
  title: 'Ad Astra',
  vote_average: 6,
  release_date: '2019-09-17',
  poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
  homepage: 'https://www.foxmovies.com/movies/ad-astra',
  overview: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond.',
  genres: [
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 18,
      name: 'Drama',
    },
  ],
};

test('renders the poster image', () => {
  const { getByAltText } = render(<Router><SimilarMovie movie={movie} /></Router>);
  const image = getByAltText('Poster of Ad Astra');

  expect(image).toBeInTheDocument();
  expect(image.src).toBe('https://image.tmdb.org/t/p/w185/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg');
});

test('renders a badge with the vote average', () => {
  const { getByText } = render(<Router><SimilarMovie movie={movie} /></Router>);
  const badge = getByText('6');

  expect(badge).toBeInTheDocument();
  expect(badge.className).toBe('badge badge-warning');
});

test('renders the title of the movie', () => {
  const { getByText } = render(<Router><SimilarMovie movie={movie} /></Router>);
  const title = getByText('Ad Astra');

  expect(title).toBeInTheDocument();
});

test('renders overview', () => {
  const { getByText } = render(<Router><SimilarMovie movie={movie} /></Router>);
  const overview = getByText(/The near future/i);

  expect(overview).toBeInTheDocument();
});
