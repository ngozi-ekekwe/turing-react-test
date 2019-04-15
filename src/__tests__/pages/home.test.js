/* eslint-env jest */

import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ProductLayout from '../../layouts/ProductLayout';
import LandingPage from '../../components/template/LandingPage';

import { Home } from '../../pages/home'


describe('Home Page', () => {
  let wrapper;
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockLoginfn = jest.fn();

  beforeEach(() => {
    // pass the mock function as the login prop 
    wrapper = shallow(<Home 
      resetFilter={mockLoginfn} 
      setProductPage={mockLoginfn} 
      categories={[{category_id: 1, 
        department_id: 1, 
        description: 'description', 
        name: 'French' }]} 
      getAllDepartments={mockLoginfn}
      products={{count: 101, rows: []}}
      getAllCategoies={mockLoginfn}
      getAllProducts={mockLoginfn} />)
  })

  it('should render ProductLayout', () => {
    expect(wrapper.find(ProductLayout).exists()).toBe(true);
    expect(wrapper.find(LandingPage).exists()).toBe(true);
  })
})
