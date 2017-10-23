import { shallow } from 'enzyme';
import Favorites from './Favorites';
import ReactDOM from 'react-dom';
import React from 'react';

describe('Favorites snapshot', () => {

  it('should always match the snapshot', () => {
    const addFavorite = jest.fn();
    const deleteFavorite = jest.fn();
    const getFavoritesDB = jest.fn();
    const wrapper = shallow(<Favorites />);

    expect(wrapper).toMatchSnapshot();
  });
});
