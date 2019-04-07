import { put, take, call } from 'redux-saga/effects';

import { getDepartments, getCategoriesByDepartment, getProductsByDepartment, getAllProducts } from '../../services/api';
import { getAllDepartmentsSuccess, getAllDeprtmentsFailure } from '../actions/departments';
import { getAllCategoriesSuccess, getAllCategoriesFailure } from '../actions/categories';
import { getAllProductsSuccess, getAllProductsFailure } from '../actions/products';


export function* getAllDepartments() {
  try {
    const departments = yield call(getDepartments);
    yield put(getAllDepartmentsSuccess(departments))
  } catch (err) {
    yield put(getAllDeprtmentsFailure(err))
  }
}

export function* getProductsByDepartmentSaga(departmentId) {
  try {
    const departments = yield call(getProductsByDepartment, departmentId)
    yield put(getAllProductsSuccess(departments))
  }catch(err) {
    yield put(getAllProductsFailure(err))
  }
}

export function* getCategoriesByDepartmentSaga(departmentId) {
  try {
    const categories = yield call(getCategoriesByDepartment, departmentId);
    yield put(getAllCategoriesSuccess(categories))
  }catch(err) {
    yield put(getAllCategoriesFailure(err))
  }
}

// export function* watchGetProductsByDepartment() {
//   try {

//   }catch(err) {

//   }
// }


// export function* getCategoriesProducts(departmentId) {
//   let products
//   try {
//     products = yield call(getAllProducts)
//     if (departmentId) {
//       products = yield call(getProductsByDepartment, departmentId)
//     }
//     yield put(getAllProductsSuccess(products))
//   }
//   catch (err) {
//     yield put(getAllDeprtmentsFailure(err))
//   }
// }

// export function* watchGetCategoriesProducts() {
//   while (true) {
//     const action = yield take('SET_CURRENT_DEPARTMENT')
//     yield call(getCategoriesProducts, action.departmentId)
//   }
// }

export function* watchGetAllDepartments() {
  while (true) {
    const action = yield take('GET_ALL_DEPARTMENTS');
    yield call(getAllDepartments);
  }
}

export function* watchGetProductsByDepartment() {
  while(true) {
    const action = yield take('GET_PRODUCTS_BY_DEPARTMENT');
    yield call(getProductsByDepartmentSaga, action.departmentId)
  }
}

export function* watchGetCategoriesByDepartment() {
  while(true) {
    const action = yield take('GET_CATEGORIES_BY_DEPARTMENT');
    yield call(getCategoriesByDepartmentSaga, action.departmentid)
  }
}
