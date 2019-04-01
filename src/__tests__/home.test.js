/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../pages/home'

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const home = shallow(<Home />)
    expect(home.find('p').text()).toEqual('Hello World!')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<Home />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
