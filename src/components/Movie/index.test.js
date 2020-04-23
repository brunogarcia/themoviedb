import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Movie from './index';

const movie = {
  id: 419704,
  title: 'Ad Astra',
  vote_average: 8,
  release_date: '2019-09-17',
  poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
  overview: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
};

test('renders the poster image and a link to the movie details', () => {
  const { getByAltText } = render(<Router><Movie movie={movie} /></Router>);
  const image = getByAltText('Poster of Ad Astra');
  const link = image.closest('a');

  expect(image).toBeInTheDocument();
  expect(link.href).toBe('http://localhost/details/419704');
  expect(image.src).toBe('http://image.tmdb.org/t/p/w185/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg');
});

test('renders a badge with the vote average', () => {
  const { getByText } = render(<Router><Movie movie={movie} /></Router>);
  const badge = getByText('8');

  expect(badge).toBeInTheDocument();
  expect(badge.className).toBe('badge badge-success');
});

test('renders the title and a link to the movie details', () => {
  const { getByText } = render(<Router><Movie movie={movie} /></Router>);
  const title = getByText('Ad Astra');
  const link = title.closest('a');

  expect(title).toBeInTheDocument();
  expect(link.href).toBe('http://localhost/details/419704');
});

test('renders release year', () => {
  const { getByText } = render(<Router><Movie movie={movie} /></Router>);
  const releaseYear = getByText('September 17, 2019');

  expect(releaseYear).toBeInTheDocument();
});

test('renders overview', () => {
  const { getByText } = render(<Router><Movie movie={movie} /></Router>);
  const overview = getByText(/The near future/i);

  expect(overview).toBeInTheDocument();
});

test('renders a link to the movie details', () => {
  const { getByText } = render(<Router><Movie movie={movie} /></Router>);
  const smallText = getByText('More info');
  const link = smallText.closest('a');

  expect(link.href).toBe('http://localhost/details/419704');
});

test('renders recommendation', () => {
  const { getByText } = render(<Router><Movie movie={movie} /></Router>);
  const recommendation = getByText('Editor choice');

  expect(recommendation).toBeInTheDocument();
});
