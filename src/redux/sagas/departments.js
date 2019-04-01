import { put, take, call } from 'redux-saga/effects';

import { getDepartments } from '../../services/api';
import { getAllDepartmentsSuccess, getAllDeprtmentsFailure } from '../actions/departments';


export function* getAllDepartments() {
  try {
    const departments = yield call(getDepartments);
    yield put(getAllDepartmentsSuccess(departments))
  }catch(err) {
    yield put(getAllDeprtmentsFailure(err))
  }
}

export function* watchGetAllDepartments() {
  while (true) {
    const action = yield take('GET_ALL_DEPARTMENTS');
    yield call(getAllDepartments);
  }
}
