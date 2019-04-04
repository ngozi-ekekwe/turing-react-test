import { put, take, call } from 'redux-saga/effects';

import { getAllProducts } from '../../services/api';
import { getAllProductsSuccess, getAllProductsFailure } from '../actions/products';


export function* getProducts(page) {
  try {
    const  products = yield call(getAllProducts, page);
    yield put(getAllProductsSuccess(products))
  }catch(err) {
    yield put(getAllProductsFailure(err))
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
