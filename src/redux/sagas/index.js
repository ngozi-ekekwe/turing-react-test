import { all, fork } from 'redux-saga/effects';
import { watchGetAllDepartments } from './departments';
import { watchGetAllCategories} from './category';
import { watchGetProducts } from './products';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllDepartments),
    fork(watchGetAllCategories),
    fork(watchGetProducts)
  ]);
}