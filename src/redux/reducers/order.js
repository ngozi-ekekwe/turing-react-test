import { 
  GET_ALL_CUSTOMER_ORDERS,
  GET_ALL_CUSTOMER_ORDERS_SUCCESS,
  GET_ALL_CUSTOMER_ORDERS_FAILURE,

 } from '../actionTypes';
import initialState from '../initialState';
import update from "immutability-helper";

export default function customer (state = initialState.order, action) {
  switch(action.type) {
    case GET_ALL_CUSTOMER_ORDERS_SUCCESS: {
      return update(state, {
        orders: { $set: action.orders}
      });
    }

    case GET_ALL_CUSTOMER_ORDERS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }

    default:
      return state
  }
}