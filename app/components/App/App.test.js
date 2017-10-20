import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import fetchMock from 'fetch-mock';
import renderer from 'react-test-renderer';
import { Route } from 'react-router';
import { shallow, mount, render } from 'enzyme';
import { Router } from 'react-router/MemoryRouter';
import createHistory from 'history/createMemoryHistory';


describe('App', () => {
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  });

})
