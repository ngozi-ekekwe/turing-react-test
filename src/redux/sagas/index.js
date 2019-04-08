import { all, fork } from 'redux-saga/effects';
import { watchGetAllDepartments, watchGetCategoriesProducts, watchGetProductsByDepartment, watchGetCategoriesByDepartment } from './departments';
import { watchGetAllCategories} from './category';
import { watchGetProducts, watchSetPage, watchSearchProducts, watchGetProductsByCategory } from './products';
import { watchCreateCustomer, watchLoginCustomer, watchUpdate } from './customers';
import { watchProductAttributes } from './attribute';
import { watchGetAllOrder } from './order';
import { watchShipmentRegions, watchShipmentOptions } from './shipment';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllDepartments),
    fork(watchGetAllCategories),
    fork(watchGetProducts),
    fork(watchSetPage),
    fork(watchCreateCustomer),
    fork(watchLoginCustomer),
    fork(watchProductAttributes),
    fork(watchSearchProducts),
    fork(watchGetProductsByDepartment),
    fork(watchGetCategoriesByDepartment),
    fork(watchGetAllOrder),
    fork(watchShipmentRegions),
    fork(watchShipmentOptions),
    fork(watchUpdate),
    fork(watchGetProductsByCategory)
  ]);
}