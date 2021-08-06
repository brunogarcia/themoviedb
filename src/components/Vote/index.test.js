import React from 'react';
import { render } from '@testing-library/react';
import Vote from './index';

test('renders success vote', () => {
  const vote = 8;
  const { getByText } = render(<Vote vote={vote} />);
  const expected = getByText('8');

  expect(expected).toBeInTheDocument();
  expect(expected.className).toBe('bg-success badge badge-pill');
});

test('renders info vote', () => {
  const vote = 7;
  const { getByText } = render(<Vote vote={vote} />);
  const expected = getByText('7');

  expect(expected).toBeInTheDocument();
  expect(expected.className).toBe('bg-info badge badge-pill');
});

test('renders warning vote', () => {
  const vote = 6;
  const { getByText } = render(<Vote vote={vote} />);
  const expected = getByText('6');

  expect(expected).toBeInTheDocument();
  expect(expected.className).toBe('bg-warning badge badge-pill');
});

test('renders danger vote', () => {
  const vote = 5;
  const { getByText } = render(<Vote vote={vote} />);
  const expected = getByText('5');

  expect(expected).toBeInTheDocument();
  expect(expected.className).toBe('bg-danger badge badge-pill');
});



