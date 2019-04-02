import { GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILURE } from '../actionTypes';
import initialState from '../initialState';

export default function category (state = initialState.category, action) {
  switch(action.type) {
    case GET_ALL_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.categories
      }
    }

    case GET_ALL_CATEGORIES_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return state
  }
}