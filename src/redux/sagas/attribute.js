import { put, take, call } from 'redux-saga/effects';

import { getProductAttributes } from '../../services/api';
import { getProductAttributeSuccess, getProductAttributeFailure } from '../actions/attributes';


export function* getProductAttributesSaga(productId) {
  try {
    const attributes = yield call(getProductAttributes, productId);
    yield put(getProductAttributeSuccess(attributes))
  }catch(err) {
    yield put(getProductAttributeFailure(err))
  }
}

export function* watchProductAttributes() {
  while (true) {
    const action = yield take('GET_PRODUCT_ATTRIBUTES');
    yield call(getProductAttributesSaga, action.productId);
  }
}
