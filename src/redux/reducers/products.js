import { GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  SET_PAGE,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
  RESET_SEARCH } from '../actionTypes';
import initialState from '../initialState';
import update from "immutability-helper";

export default function product (state = initialState.product, action) {
  switch(action.type) {
    case GET_ALL_PRODUCTS_SUCCESS: {
      return update(state, {
        products: { $set: action.products},
        category: { $set: null}
      });
    }

    // case RESET_CATEGORY: {
    //   return update(state, {
    //     category: { $set: null}
    //   })
    // }
    case GET_ALL_PRODUCTS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }

    case SEARCH_PRODUCT_SUCCESS: {
      return update(state, {
        searchResults: { $set: action.products},
        error: { $set: false }
      });
    }

    case SEARCH_PRODUCT_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }

    case RESET_SEARCH: {
      return update(state, {
        searchResults: {$set: []}
      })
    }

    case SET_PAGE: {
      return update(state, {
        page: { $set: action.page}
      });
    }
    default:
      return state
  }
}