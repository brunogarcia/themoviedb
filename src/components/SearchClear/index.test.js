import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchProvider } from '../../contexts/search';
import SearchClear from './index';

/**
 * Get the components tree to testing
 *
 * @param {object} options - the options
 * @param {string} options.query - the value of the search input
 * @param {Function} options.handleResetSearch - the handler when the user will reset the search
 * @returns {SearchClear} - The components tree to testing
 */
function getTree(options) {
  return (
    <SearchProvider
      value={{
        query: options.query,
        handleResetSearch: options.handleResetSearch,
      }}
    >
      <SearchClear />
    </SearchProvider>
  );
}

test('If the query is empty the button is hidden', () => {
  const handler = jest.fn();

  const tree = getTree({
    query: '',
    handleResetSearch: handler,
  });

  const { queryByRole } = render(tree);

  const button = queryByRole('button');

  expect(button).toBeNull();
});

test('When click on the button the handler is called', () => {
  const handler = jest.fn();

  const tree = getTree({
    query: 'Ad Astra',
    handleResetSearch: handler,
  });

  const { getByRole } = render(tree);

  fireEvent.click(getByRole('button'));

  expect(handler).toHaveBeenCalled();
});
