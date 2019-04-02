import { put, take, call } from 'redux-saga/effects';

import { getCategories } from '../../services/api';
import { getAllCategoriesSuccess, getAllCategoriesFailure } from '../actions/categories';


export function* getAllCategories() {
  try {
    const categories = yield call(getCategories);
    yield put(getAllCategoriesSuccess(categories))
  }catch(err) {
    yield put(getAllCategoriesFailure(err))
  }
}

export function* watchGetAllCategories() {
  while (true) {
    const action = yield take('GET_ALL_DEPARTMENTS');
    yield call(getAllCategories);
  }
}
