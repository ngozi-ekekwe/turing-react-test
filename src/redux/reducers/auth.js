import initialState from "../initialState";
import update from "immutability-helper";
import { IS_AUTHENTICATED } from '../actionTypes';

export default function auth (state = initialState.auth, action) {
  switch(action.type) {
    case IS_AUTHENTICATED: {
      return update(state, {
        isAuthenticated: { $set: action.isAuthenticated }
      });
    }
    default:
      return state
  }
}