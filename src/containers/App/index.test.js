import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders header message', () => {
  const { getByAltText } = render(<App />);
  const headerMessage = getByAltText(/The Movie DB/i);
  expect(headerMessage).toBeInTheDocument();
});


test('renders footer message', () => {
  const { getByText } = render(<App />);
  const footerMessage = getByText(/© The Movie DB - 2020/i);
  expect(footerMessage).toBeInTheDocument();
});
