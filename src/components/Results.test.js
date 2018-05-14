import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

const props = {
  match: {
    params: {
      query: 'test'
    }
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
