import { 
  GET_ALL_SHIPPING_REGIONS_SUCCESS,
  GET_ALL_SHIPPING_REGIONS_FAILURE,
 } from '../actionTypes';
import initialState from '../initialState';
import update from "immutability-helper";

export default function shipment (state = initialState.regions, action) {
  switch(action.type) {
    case GET_ALL_SHIPPING_REGIONS_SUCCESS: {
      return update(state, {
        shipping_regions: { $set: action.regions}
      });
    }

    case GET_ALL_SHIPPING_REGIONS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }

    default:
      return state
  }
}