import React from 'react';
import { render } from '@testing-library/react';
import Recommendation from './index';

test('renders a good choice bagde if the vote if equal or upper than 8', () => {
  const { getByText } = render(<Recommendation vote={8} />);
  const badge = getByText('Editor choice');

  expect(badge).toBeInTheDocument();
});

test('renders a bad choice bagde if the vote if equal or lower than 5', () => {
  const { getByText } = render(<Recommendation vote={5} />);
  const badge = getByText('Bad choice');

  expect(badge).toBeInTheDocument();
});
