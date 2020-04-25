import React from 'react';
import { render } from '@testing-library/react';
import Image from './index';

const title = 'Underwater';
const path = '/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg';
const size = {
  DEFAULT: 'w300',
  NO_POSTER: 'https://dummyimage.com/300x450/eeeeee/999999&text=No+poster',
};

test('renders image', () => {
  const { getByAltText } = render(<Image title={title} size={size} path={path} />);
  const image = getByAltText('Poster of Underwater');

  expect(image).toBeInTheDocument();
  expect(image.src).toBe('https://image.tmdb.org/t/p/w300/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg');
});

test('renders no-poster image', () => {
  const { getByAltText } = render(<Image title={title} size={size} />);
  const image = getByAltText('Poster of Underwater');

  expect(image).toBeInTheDocument();
  expect(image.src).toBe('https://dummyimage.com/300x450/eeeeee/999999&text=No+poster');
});
