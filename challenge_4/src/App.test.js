import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';


import { Provider } from 'react-redux';
import store from './store/store.js';
import AppContainer from './containers/AppContainer.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests component rendering', () => {
  const wrapper = mount(<Provider store={store}><AppContainer /></Provider>);

  test('The title renders', () => {
    expect(wrapper.find('h1').text()).toEqual('Minesweeper');
  });

  test('The minefield appears', () => {
    expect(wrapper.find('div.field')).toHaveLength(1);
  });

  test('Minefield has 10 mines', () => {
    wrapper.find('div.cell').forEach((element) => {
      expect(element.hasClass('true')).toHaveLength(10);
    });
  });

  test('Minefield has 10 columns', () => {
    wrapper.find('div.col').forEach((element) => {
      expect(element.hasClass('cell')).toHaveLength(10);
    });
  });

});

