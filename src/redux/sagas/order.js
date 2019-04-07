import { put, take, call } from 'redux-saga/effects';

import { getAllCustomerOrders } from '../../services/api';
import { getAllCustomerOrdersSuccess, getAllCustomerOrdersFailure } from 
'../actions/orders.js';
import Router from 'next/router';

export function* getAllOrdersSaga(customerId) {
  try {
    const response = yield call(getAllCustomerOrders);
    yield put(getAllCustomerOrdersSuccess(response))
  }catch(err) {
    yield put(getAllCustomerOrdersFailure(err))
  }
}

export function* watchGetAllOrder() {
  while (true) {
    const action = yield take('GET_ALL_CUSTOMER_ORDERS');
    yield call(getAllOrdersSaga, action.customerId);
  }
}
