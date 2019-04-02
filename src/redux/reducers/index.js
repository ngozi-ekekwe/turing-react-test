import { combineReducers } from 'redux';
import department from './department';
import category from './category';
import product from './products'

const rootReducer = combineReducers({
  department,
  category,
  product
});

export default rootReducer;
