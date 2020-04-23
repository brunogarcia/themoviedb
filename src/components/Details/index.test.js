import React from 'react';
import { render } from '@testing-library/react';
import Details from './index';

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

test('renders image alt', () => {
  const { getByAltText } = render(<Details movie={movie} />);
  const image = getByAltText('Ad Astra');
  expect(image).toBeInTheDocument();
});

test('renders vote average', () => {
  const { getByText } = render(<Details movie={movie} />);
  const vote = getByText('6');
  expect(vote).toBeInTheDocument();
});

test('renders title', () => {
  const { getByText } = render(<Details movie={movie} />);
  const title = getByText('Ad Astra');
  expect(title).toBeInTheDocument();
});

test('renders release year', () => {
  const { getByText } = render(<Details movie={movie} />);
  const releaseYear = getByText('(2019)');
  expect(releaseYear).toBeInTheDocument();
});

test('renders overview', () => {
  const { getByText } = render(<Details movie={movie} />);
  const overview = getByText('The near future, a time when both hope and hardships drive humanity to look to the stars and beyond.');
  expect(overview).toBeInTheDocument();
});

test('renders genres', () => {
  const { getByText } = render(<Details movie={movie} />);
  const genre1 = getByText('Science Fiction');
  const genre2 = getByText('Drama');

  expect(genre1).toBeInTheDocument();
  expect(genre2).toBeInTheDocument();
});

test('renders homepage link', () => {
  const { getByText } = render(<Details movie={movie} />);
  const link = getByText('https://www.foxmovies.com/movies/ad-astra');
  expect(link).toBeInTheDocument();
});
