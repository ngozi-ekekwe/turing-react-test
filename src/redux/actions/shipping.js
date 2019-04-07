
import {
  GET_ALL_SHIPPING_REGIONS_SUCCESS,
  GET_ALL_SHIPPING_REGIONS_FAILURE,
} from '../actionTypes';


export function getAllShippingRegionsSuccess(regions) {
  return {
    type: GET_ALL_SHIPPING_REGIONS_SUCCESS,
    regions
  }
}

export function getAllShippingRegionsFailure(error) {
  return {
    type: GET_ALL_SHIPPING_REGIONS_FAILURE,
    error
  }
}