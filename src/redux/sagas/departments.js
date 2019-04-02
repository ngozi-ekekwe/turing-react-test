import { put, take, call } from 'redux-saga/effects';

import { getDepartments, getCategoriesByDepartment, getProductsByDepartment } from '../../services/api';
import { getAllDepartmentsSuccess, getAllDeprtmentsFailure } from '../actions/departments';
import { getAllCategoriesSuccess } from '../actions/categories';
import { getAllProductsSuccess } from '../actions/products';


export function* getAllDepartments() {
  try {
    const departments = yield call(getDepartments);
    yield put(getAllDepartmentsSuccess(departments))
  } catch (err) {
    yield put(getAllDeprtmentsFailure(err))
  }
}

export function* getCategoriesProducts(departmentId) {
  try {
    // const categories = yield call(getCategoriesByDepartment, departmentId)
    // const products = yield call(getProductsByDepartment, departmentId)
    // yield put(getAllCategoriesSuccess(categories))
    // yield put(getAllProductsSuccess(products))
  }
  catch (err) {
    // yield put(getAllDeprtmentsFailure(err))
  }
}

export function* watchGetCategoriesProducts() {
  while (true) {
    const action = yield take('SET_CURRENT_DEPARTMENT')
    yield call(getCategoriesProducts, action.departmentId)
  }
}

export function* watchGetAllDepartments() {
  while (true) {
    const action = yield take('GET_ALL_DEPARTMENTS');
    yield call(getAllDepartments);
  }
}
