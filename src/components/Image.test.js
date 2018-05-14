import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

it('renders correctly', () => {
  const props = {
    size: 'w185',
    path: '/path/to/image',
    title: 'The Movie'
  };

  const tree = renderer
    .create(<Image {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
