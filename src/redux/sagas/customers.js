import { put, take, call } from 'redux-saga/effects';

import { createCustomer } from '../../services/api';
import { createCustomerSuccess, createCustomerFailure } from '../actions/customers';


export function* createCustomerSaga(customer) {
  try {
    const response = yield call(createCustomer, customer);
    if(response.accessToken) {
      localStorage.setItem('user-key', response.accessToken)
      yield put(createCustomerSuccess(response))
    }
    yield put(createCustomerFailure(response))
  }catch(err) {
    yield put(createCustomerFailure(err))
  }
}

export function* watchCreateCustomer() {
  while (true) {
    const action = yield take('CREATE_CUSTOMER');
    yield call(createCustomerSaga, action.customer);
  }
}
