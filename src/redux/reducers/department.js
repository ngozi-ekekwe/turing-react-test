import { GET_ALL_DEPARTMENTS_SUCCESS, GET_ALL_DEPARTMENTS_FAILURE } from '../actionTypes';
import initialState from '../initialState';

export default function department (state = initialState.department, action) {
  switch(action.type) {
    case GET_ALL_DEPARTMENTS_SUCCESS: {
      return {
        ...state,
        departments: action.departments
      }
    }

    case GET_ALL_DEPARTMENTS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return state
  }
}