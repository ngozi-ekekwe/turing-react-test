import { 
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_SUCCESS,

  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_FAILURE,

  LOGOUT_CUSTOMER,
  UPDATE_CUSTOMER_ADDRESS_FAILURE
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

    case UPDATE_CUSTOMER_ADDRESS_FAILURE: {
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

    case LOGIN_CUSTOMER_SUCCESS: {
      return update(state, {
        customer: { $set: action.customer},
        error: { $set: []}
      });
    }

    case LOGIN_CUSTOMER_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }

    case LOGOUT_CUSTOMER: {
      return update(state, {
        customer: { $set: {}},
        error: { $set: []}
      });
    }
    default:
      return state
  }
}