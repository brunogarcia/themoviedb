import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Search from './index';

test('renders correctly', () => {
  const history = {
    push: () => {},
  };

  const component = renderer.create(<MemoryRouter><Search history={history} /></MemoryRouter>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
