import { GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE } from '../actionTypes';
import initialState from '../initialState';

export default function product (state = initialState.product, action) {
  switch(action.type) {
    case GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.products
      }
    }

    case GET_ALL_PRODUCTS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return state
  }
}