import { combineReducers } from 'redux';
import department from './department';
import category from './category';

const rootReducer = combineReducers({
  department,
  category
});

export default rootReducer;
