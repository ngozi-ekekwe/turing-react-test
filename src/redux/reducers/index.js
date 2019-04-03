import { combineReducers } from 'redux';
import department from './department';
import category from './category';
import product from './products';
import customer from './customer';
import auth from './auth';

const rootReducer = combineReducers({
  department,
  category,
  product,
  customer,
  auth
});

export default rootReducer;
