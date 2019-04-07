import { combineReducers } from 'redux';
import department from './department';
import category from './category';
import product from './products';
import customer from './customer';
import auth from './auth';
import attribute from './attributes';
import cart from './cart';
import order from './order';
import shipment from './shipment';

const rootReducer = combineReducers({
  department,
  category,
  product,
  customer,
  auth,
  attribute,
  cart,
  order,
  shipment
});

export default rootReducer;
