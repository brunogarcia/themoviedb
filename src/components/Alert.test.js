import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alert data="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
