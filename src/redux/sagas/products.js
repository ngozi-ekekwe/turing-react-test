import { put, take, call } from 'redux-saga/effects';

import { getAllProducts, productSearch, getProductsByCategory } from '../../services/api';
import { getAllProductsSuccess, getAllProductsFailure, searchProductSuccess, searchProductFailure } from '../actions/products';


export function* getProducts(page) {
  try {
    const  products = yield call(getAllProducts, page);
    yield put(getAllProductsSuccess(products))
  }catch(err) {
    yield put(getAllProductsFailure(err))
  }
}

export function* getProductsByCategorySaga(category) {
  try {
    const products = yield call(getProductsByCategory, category)
    yield put(getAllProductsSuccess(products))
  } catch(err) {
    yield put(getAllProductsFailure(err))
  }
}

export function* watchGetProductsByCategory() {
  while(true) {
    const action = yield take('SET_CATEGORY');
    yield call(getProductsByCategorySaga, action.category);
  }
}

export function* searchProducts(term) {
  try{
    const products = yield call(productSearch, term)
    yield put(searchProductSuccess(products))
  }catch(err) {
    yield put(searchProductFailure(error))
  }
}

export function* watchSearchProducts() {
  while(true) {
    const action = yield take('SEARCH_PRODUCT');
    yield call(searchProducts, action.term);
  }
}

export function* watchSetPage() {
  while(true) {
    const action = yield take('SET_PAGE');
    yield call(getProducts, action.page);
  }
}

export function* watchGetProducts() {
  while (true) {
    yield take('GET_ALL_PRODUCTS');
    yield call(getProducts);
  }
}
