import { put, take, call } from 'redux-saga/effects';

import { getAllProducts } from '../../services/api';
import { getAllProductsSuccess, getAllProductsFailure } from '../actions/products';


export function* getProducts() {
  try {
    const products = yield call(getAllProducts);
    yield put(getAllProductsSuccess(products))
  }catch(err) {
    yield put(getAllProductsFailure(err))
  }
}

export function* watchGetProducts() {
  while (true) {
    yield take('GET_ALL_PRODUCTS');
    yield call(getProducts);
  }
}
