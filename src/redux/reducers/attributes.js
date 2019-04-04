import update from "immutability-helper";
import { GET_PRODUCT_ATTRIBUTES_SUCCESS, GET_PRODUCT_ATTRIBUTES_FAILURE } from '../actionTypes';
import initialState from '../initialState';

export default function attribute (state = initialState.attribute, action) {
  switch(action.type) {
    case GET_PRODUCT_ATTRIBUTES_SUCCESS: {
      return update(state, {
        attributes: { $set: action.attributes }
      });
    }

    case GET_PRODUCT_ATTRIBUTES_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return state
  }
}