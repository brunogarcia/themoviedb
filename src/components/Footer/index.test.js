import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('renders message', () => {
  const { getByText } = render(<Footer />);
  const message = getByText('© The Movie DB - 2020');
  expect(message).toBeInTheDocument();
});
