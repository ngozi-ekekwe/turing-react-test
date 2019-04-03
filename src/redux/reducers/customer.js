import { 
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS
 } from '../actionTypes';
import initialState from '../initialState';
import update from "immutability-helper";

export default function customer (state = initialState.customer, action) {
  switch(action.type) {
    case CREATE_CUSTOMER_SUCCESS: {
      return update(state, {
        customer: { $set: action.customer}
      });
    }

    case CREATE_CUSTOMER_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return state
  }
}