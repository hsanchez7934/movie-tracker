import { shallow } from 'enzyme';
import Login from './Login';
import ReactDOM from 'react-dom';
import React from 'react';

describe('Login snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});
