
import {
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS,

  LOGIN_CUSTOMER,
  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_FAILURE
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

export function loginCustomer(customer) {
  return {
    type: LOGIN_CUSTOMER,
    customer
  }
}

export function loginCustomerSuccess(customer) {
  return {
    type: LOGIN_CUSTOMER_SUCCESS,
    customer
  }
}

export function loginCustomerFailure(error) {
  return {
    type: LOGIN_CUSTOMER_FAILURE,
    error
  }
}