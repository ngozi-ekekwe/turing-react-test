
import {
  GET_ALL_CUSTOMER_ORDERS,
  GET_ALL_CUSTOMER_ORDERS_SUCCESS,
  GET_ALL_CUSTOMER_ORDERS_FAILURE,

} from '../actionTypes';


export function getAllCustomerOrdersSuccess(orders) {
  return {
    type: GET_ALL_CUSTOMER_ORDERS_SUCCESS,
    orders
  }
}

export function getAllCustomerOrdersFailure(error) {
  return {
    type: GET_ALL_CUSTOMER_ORDERS_FAILURE,
    error
  }
}