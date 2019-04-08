
import {
  GET_ALL_SHIPPING_REGIONS_SUCCESS,
  GET_ALL_SHIPPING_REGIONS_FAILURE,

  GET_SHIPPING_ID_SUCCESS,
  GET_SHIPPING_ID_FAILURE
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

export function getShipmentIdSuccess(shipment) {
  return {
    type: GET_SHIPPING_ID_SUCCESS,
    shipment
  }
}

export function getShipmentIdFailure(error) {
  return {
    type: GET_SHIPPING_ID_FAILURE,
    error
  }
}