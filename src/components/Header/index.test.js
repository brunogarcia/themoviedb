import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import Search from '../../containers/Search';

describe('Header render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('must render Search component', () => {
    expect(wrapper.find(Search).exists()).toBeTruthy();
  });
});
