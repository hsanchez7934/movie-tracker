import { shallow } from 'enzyme';
import Header from './Header';
import ReactDOM from 'react-dom';
import React from 'react';

describe('Header snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
