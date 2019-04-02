import { GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE } from '../actionTypes';

export function getAllProductsSuccess(products) {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    products
  }
}

export function getAllProductsFailure(error) {
  return {
    type: GET_ALL_PRODUCTS_FAILURE,
    error
  }
}