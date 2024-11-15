import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PRODUCTS,
  fetchProductsSuccess,
  ADD_PRODUCT,
  addProductSuccess,
  DELETE_PRODUCT,
  deleteProductSuccess,
  UPDATE_PRODUCT,
  updateProductSuccess,
} from '../actions/productActions';

const API_URL = 'https://localhost:7190/api/Products';

// Fetch all products
function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(fetchProductsSuccess(response.data)); 
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

// Add a product
function* addProductSaga(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(addProductSuccess(response.data)); 
  } catch (error) {
    console.error('Failed to add product:', error);
  }
}

// Delete a product
function* deleteProductSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteProductSuccess(action.payload)); 
  } catch (error) {
    console.error('Failed to delete product:', error);
  }
}

// Update a product
function* updateProductSaga(action) {
  try {
    const response = yield call(
      axios.put,
      `${API_URL}/${action.payload.id}`,
      action.payload
    );
    yield put(updateProductSuccess(response.data));
  } catch (error) {
    console.error('Failed to update product:', error);
  }
}

export default function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga);
  yield takeEvery(ADD_PRODUCT, addProductSaga);
  yield takeEvery(DELETE_PRODUCT, deleteProductSaga);
  yield takeEvery(UPDATE_PRODUCT, updateProductSaga);
}
