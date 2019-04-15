/* eslint-env jest */

import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import ProductHero from '../../components/product/ProductHero';
import TopBar from '../../components/template/TopBar';
import Header from '../../components/template/Header';

import Product from '../../pages/product'


describe('Product Page', () => {
  let wrapper;
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockLoginfn = jest.fn();

  beforeEach(() => {
    // pass the mock function as the login prop 
    wrapper = shallow(<Product 
      product={{}}
      productReviews={{}} 
      slug="slug"  />)
  })

  it('should render ProductLayout', () => {
    expect(wrapper.find(TopBar).exists()).toBe(true);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(ProductHero).exists()).toBe(true);
  })
})
