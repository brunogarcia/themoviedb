import React from 'react';
import renderer from 'react-test-renderer';
import Image from './index';

it('renders correctly', () => {
  const props = {
    size: {
      DEFAULT: 'w185',
      NO_POSTER: '/path/to/no-poster-image',
    },
    path: '/path/to/image',
    title: 'The Movie',
  };

  const tree = renderer
    .create(<Image size={props.size} path={props.path} title={props.title} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with no poster image', () => {
  const props = {
    size: {
      DEFAULT: 'w185',
      NO_POSTER: '/path/to/no-poster-image',
    },
    path: '',
    title: 'The Movie',
  };

  const tree = renderer
    .create(<Image size={props.size} path={props.path} title={props.title} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
