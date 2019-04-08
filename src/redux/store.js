import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { omit as _omit } from 'lodash';

import rootReducer from './reducers/index'
import initialState from './initialState'
import rootSaga from './sagas/index'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// saves state to local storage

function saveToLocalStorage(state = {}) {
  try {
    const data = JSON.stringify(_omit(state, ['department', 'category', 'product', 'attribute', 'order', 'customer.error' ]));
    const serializedData = btoa(`turing:${data}`);
    localStorage.setItem('state', serializedData);
  } catch (e) {}
}

// loads state from local storage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const state = atob(serializedState).replace(/^turing:/, '');
    
    return JSON.parse(state);
  } catch (e) {
    try { localStorage.removeItem('state'); } catch (err) {}
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

function configureStore (preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    { ...preloadedState, ...persistedState },
    bindMiddleware([sagaMiddleware])
  )

  store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore