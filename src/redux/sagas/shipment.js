import { put, take, call } from 'redux-saga/effects';

import { getAllShippingRegions, getDeliveryOptions } from '../../services/api';
import { getAllShippingRegionsSuccess, getAllShippingRegionsFailure, getShipmentIdSuccess, getShipmentIdFailure } from 
'../actions/shipping.js';
import Router from 'next/router';

export function* getAllShippingRegionsSaga() {
  try {
    const response = yield call(getAllShippingRegions);
    yield put(getAllShippingRegionsSuccess(response))
  }catch(err) {
    yield put(getAllShippingRegionsFailure(err))
  }
}

export function* getAllShippingSaga(shiping_region_id) {
  try {
    const response = yield call(getDeliveryOptions, shiping_region_id)
    yield put(getShipmentIdSuccess(response))
  }catch(err) {
    yield put(getShipmentIdFailure(err))
  }
}

export function* watchShipmentOptions() {
  while (true) {
    const action = yield take('GET_SHIPPING_ID');
    yield call(getAllShippingSaga, action.id);
  }
}

export function* watchShipmentRegions() {
  while (true) {
    const action = yield take('GET_ALL_REGIONS');
    yield call(getAllShippingRegionsSaga);
  }
}
