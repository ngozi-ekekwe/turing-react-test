
import {
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS
} from '../actionTypes';

export function createCustomer(customer) {
  return {
    type: CREATE_CUSTOMER,
    customer
  }
}

export function createCustomerSuccess(customer) {
  return {
    type: CREATE_CUSTOMER_SUCCESS,
    customer
  }
}

export function createCustomerFailure(error) {
  return {
    type: CREATE_CUSTOMER_FAILURE,
    error
  }
}