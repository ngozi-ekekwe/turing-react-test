import { all, fork } from 'redux-saga/effects';
import { watchGetAllDepartments } from './departments';
import { watchGetAllCategories} from './category';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllDepartments),
    fork(watchGetAllCategories)
  ]);
}