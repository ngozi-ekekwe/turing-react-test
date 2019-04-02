import { GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILURE } from '../actionTypes';

export function getAllCategoriesSuccess (categories) {
  return {
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  }
} 

export function getAllCategoriesFailure (error) {
  return {
    type: GET_ALL_CATEGORIES_FAILURE,
    error
  }
}