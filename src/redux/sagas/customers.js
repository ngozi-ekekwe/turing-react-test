import { put, take, call } from 'redux-saga/effects';

import { createCustomer, loginCustomer } from '../../services/api';
import { createCustomerSuccess, createCustomerFailure } from '../actions/customers';

import { ToastContainer, toast } from "react-toastify";


export function* createCustomerSaga(customer) {
  try {
    const response = yield call(createCustomer, customer);
    if(response.accessToken) {
      localStorage.setItem('user-key', response.accessToken)
      yield put(createCustomerSuccess(response.user))
    }
    yield put(createCustomerFailure(response))
  }catch(err) {
    yield put(createCustomerFailure(err))
  }
}

export function* loginCustomerSaga(customer) {
  try {
    const response = yield call(loginCustomer, customer);
    if(response.accessToken) {
      localStorage.setItem('user-key', response.accessToken)
      yield put(createCustomerSuccess(response.user))
    }
    if(response.error.message) {
      toast(response.error.message)
      yield put(createCustomerFailure(response))
    }
    else {
      toast(response.error)
    }
   
    yield put(createCustomerFailure(err))
  }catch(err) {

  }
}

export function* watchLoginCustomer() {
  while (true) {
    const action = yield take('LOGIN_CUSTOMER');
    yield call(loginCustomerSaga, action.customer);
  }
}

export function* watchCreateCustomer() {
  while (true) {
    const action = yield take('CREATE_CUSTOMER');
    yield call(createCustomerSaga, action.customer);
  }
}
