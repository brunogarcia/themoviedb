import React from 'react';
import ReactDOM from 'react-dom';
import Details from './Details';

const props = {
  match: {
    params: {
      id: '1234',
    },
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Details {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
