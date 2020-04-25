import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchProvider } from '../../contexts/search';
import SearchForm from './index';

/**
 * Get the components tree to testing
 *
 * @param {object} options - the options
 * @param {string} options.query - the value of the search input
 * @param {Function} options.handler - the handler when the user will change the value to search
 * @returns {SearchForm} - The components tree to testing
 */
function getTree(options) {
  return (
    <SearchProvider
      value={{
        query: options.query,
        handleChangeInputSearch: options.handler,
      }}
    >
      <SearchForm />
    </SearchProvider>
  );
}

test('When the user change the value of the input the handler is called', () => {
  const handler = jest.fn();

  const tree = getTree({
    query: '',
    handler,
  });

  const { getByPlaceholderText } = render(tree);

  const input = getByPlaceholderText('Search a movie');

  fireEvent.change(input, { target: { value: 'Ad Astra' } });

  expect(handler).toHaveBeenCalled();
});
