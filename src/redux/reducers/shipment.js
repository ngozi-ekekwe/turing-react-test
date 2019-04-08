import { 
  GET_ALL_SHIPPING_REGIONS_SUCCESS,
  GET_ALL_SHIPPING_REGIONS_FAILURE,
  SET_SHIPMENT_ID
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

    case SET_SHIPMENT_ID: {
      return update(state, {
        shipping_id: {$set: action.id}
      })
    }

    default:
      return state
  }
}