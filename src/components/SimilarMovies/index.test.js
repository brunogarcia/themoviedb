import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SimilarMovies from './index';

const movies = [
  {
    id: 419704,
    title: 'Ad Astra',
    vote_average: 8,
    release_date: '2019-09-17',
    poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    overview: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
  },
  {
    id: 443791,
    title: 'Underwater',
    vote_average: 6.4,
    release_date: '2020-01-08',
    poster_path: '/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg',
    overview: 'After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.',
  },
];

test('renders a list of movies', () => {
  const { queryAllByAltText } = render(<Router><SimilarMovies movies={movies} /></Router>);
  const images = queryAllByAltText(/Poster of/i);

  expect(images.length).toBe(2);
});
