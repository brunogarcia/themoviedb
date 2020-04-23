import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';

test('renders link to homepage', () => {
  const { getByAltText } = render(<Router><Header /></Router>);
  const image = getByAltText('The Movie DB');
  const link = image.closest('a');
  expect(link.href).toBe('http://localhost/');
});

test('renders image', () => {
  const { getByAltText } = render(<Router><Header /></Router>);
  const image = getByAltText('The Movie DB');
  expect(image).toBeInTheDocument();
});
