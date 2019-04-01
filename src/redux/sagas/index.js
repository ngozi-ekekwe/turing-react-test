import { all, fork } from 'redux-saga/effects';
import { watchGetAllDepartments } from './departments'

export default function* rootSaga() {
  yield all([
    fork(watchGetAllDepartments)
  ]);
}