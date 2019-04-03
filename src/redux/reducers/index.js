import { combineReducers } from 'redux';
import department from './department';
import category from './category';
import product from './products';
import customer from './customer';

const rootReducer = combineReducers({
  department,
  category,
  product,
  customer
});

export default rootReducer;
