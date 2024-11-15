import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from './reducers/productReducer';
import productSaga from './sagas/productSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productSaga);

export default store;
