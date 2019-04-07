import { put, take, call } from 'redux-saga/effects';

import { getAllShippingRegions } from '../../services/api';
import { getAllShippingRegionsSuccess, getAllShippingRegionsFailure } from 
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

export function* watchShipmentRegions() {
  while (true) {
    const action = yield take('GET_ALL_REGIONS');
    yield call(getAllShippingRegionsSaga);
  }
}
