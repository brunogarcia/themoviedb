import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Search from './Search';

test('renders correctly', () => {
  const props = {
    history: {
      push: () => {},
    }
  };
  
  const component = renderer.create(
    <MemoryRouter>
      <Search {...props} />
    </MemoryRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
