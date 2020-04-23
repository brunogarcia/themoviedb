import React from 'react';
import { render } from '@testing-library/react';
import Error from './index';

test('renders message', () => {
  const { getByText } = render(<Error />);
  const image = getByText('Looks like there was a problem.');
  expect(image).toBeInTheDocument();
});
