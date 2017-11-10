import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import Page from '../index.js'

describe('SE_Home', () => {
  global.__CLIENT__ = true
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page/>, div)
  })
});