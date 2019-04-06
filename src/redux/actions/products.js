import { GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,

  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE
} from '../actionTypes';

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

export function searchProductSuccess(products) {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    products
  }
}

export function searchProductFailure(err) {
  return {
    type: SEARCH_PRODUCT_FAILURE,
    err
  }
}