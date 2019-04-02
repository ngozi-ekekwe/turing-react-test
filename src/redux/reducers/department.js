import { GET_ALL_DEPARTMENTS_SUCCESS, GET_ALL_DEPARTMENTS_FAILURE, SET_CURRENT_DEPARTMENT } from '../actionTypes';
import initialState from '../initialState';

export default function department (state = initialState.department, action) {
  switch(action.type) {
    case GET_ALL_DEPARTMENTS_SUCCESS: {
      return {
        ...state,
        departments: action.departments
      }
    }

    case SET_CURRENT_DEPARTMENT: {
      return {
        ...state,
        departmentId: action.departmentId
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