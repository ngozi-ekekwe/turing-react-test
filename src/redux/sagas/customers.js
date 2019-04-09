import { put, take, call } from 'redux-saga/effects';

import { createCustomer, loginCustomer, updateCustomerAddress } from '../../services/api';
import { createCustomerSuccess, createCustomerFailure, updateCustomerAddressSuccess, updateCustomerAddressFailure } from 
'../actions/customers';
import Router from 'next/router';

export function* createCustomerSaga(customer) {
  try {
    const response = yield call(createCustomer, customer);
    if(response.accessToken) {
      localStorage.setItem('user-key', response.accessToken)
      yield put(createCustomerSuccess(response.customer))
      Router.push('/')
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
      Router.push('/')
    }
    yield put(createCustomerFailure(response))
  }catch(err) {
    yield put(createCustomerFailure(err))
  }
}

export function* updateCustomerProfile(data) {
  try{
    const response = yield call(updateCustomerAddress, data);
    yield put(createCustomerSuccess(data))
    Router.push('/')
  }catch(err) {
    yield put(createCustomerFailure(err))
  }
}
export function* watchUpdate() {
  while (true) {
    const action = yield take('UPDATE_CUSTOMER_PROFILE');
    yield call(updateCustomerProfile, action.customer);
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
