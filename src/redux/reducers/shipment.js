import { 
  GET_ALL_SHIPPING_REGIONS_SUCCESS,
  GET_ALL_SHIPPING_REGIONS_FAILURE,
  SET_SHIPMENT_REGION_ID,


  GET_SHIPPING_ID_SUCCESS,
  GET_SHIPPING_ID_FAILURE,
  SET_SHIPPING_ID
 } from '../actionTypes';
import initialState from '../initialState';
import update from "immutability-helper";

export default function shipment (state = initialState.regions, action) {
  switch(action.type) {
    case GET_ALL_SHIPPING_REGIONS_SUCCESS: {
      return update(state, {
        shipping_regions: { $set: action.regions},
        error: {$set: false}
      });
    }

    case GET_ALL_SHIPPING_REGIONS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }

    case SET_SHIPMENT_REGION_ID: {
      return update(state, {
        shipping_region_id: {$set: action.id}
      })
    }

    case GET_SHIPPING_ID_SUCCESS: {
      return update(state, {
        shipping: {$set: action.shipment},
        error: {$set: false}
      })
    }

    case GET_SHIPPING_ID_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }

    case SET_SHIPPING_ID: {
      return update(state, {
        shipping_id: {$set: action.shipping_id},
      })
    }

    default:
      return state
  }
}