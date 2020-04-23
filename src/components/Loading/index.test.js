import React from 'react';
import { render } from '@testing-library/react';
import Loading from './index';

test('renders spinner', () => {
  const { getByText } = render(<Loading />);
  const spinner = getByText('Loading...');

  expect(spinner).toBeInTheDocument();
});
