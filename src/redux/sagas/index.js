import { all, fork } from 'redux-saga/effects';
import { watchGetAllDepartments, watchGetCategoriesProducts } from './departments';
import { watchGetAllCategories} from './category';
import { watchGetProducts, watchSetPage } from './products';
import { watchCreateCustomer, watchLoginCustomer } from './customers';
import { watchProductAttributes } from './attribute';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllDepartments),
    fork(watchGetAllCategories),
    fork(watchGetProducts),
    fork(watchGetCategoriesProducts),
    fork(watchSetPage),
    fork(watchCreateCustomer),
    fork(watchLoginCustomer),
    fork(watchProductAttributes)
  ]);
}