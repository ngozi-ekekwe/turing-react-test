import { GET_PRODUCT_ATTRIBUTES_SUCCESS, GET_PRODUCT_ATTRIBUTES_FAILURE } from '../actionTypes';

export function getProductAttributeSuccess(attributes) {
  return {
    type: GET_PRODUCT_ATTRIBUTES_SUCCESS,
    attributes
  }
}

export function getProductAttributeFailure(error) {
  return {
    type: GET_PRODUCT_ATTRIBUTES_FAILURE,
    error
  }
}