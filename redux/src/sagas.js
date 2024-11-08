import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../Api/Api';
import {
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoSuccess,
  editTodoSuccess,
  deleteTodoSuccess,
} from '../actions/actions';
import * as actionTypes from '../src/Action/actionTypes';

function* fetchTodosSaga() {
  try {
    const response = yield call(api.get, '/Products');
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure('Failed to fetch todos'));
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(api.post, '/Products', action.payload);
    yield put(addTodoSuccess(response.data));
  } catch (error) {
    console.error('Failed to add todo');
  }
}

function* editTodoSaga(action) {
  try {
    yield call(api.put, `/Products/${action.payload.id}`, action.payload);
    yield put(editTodoSuccess(action.payload));
  } catch (error) {
    console.error('Failed to edit todo');
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(api.delete, `/Products/${action.payload}`);
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    console.error('Failed to delete todo');
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_TODOS_REQUEST, fetchTodosSaga);
  yield takeLatest(actionTypes.ADD_TODO_REQUEST, addTodoSaga);
  yield takeLatest(actionTypes.EDIT_TODO_REQUEST, editTodoSaga);
  yield takeLatest(actionTypes.DELETE_TODO_REQUEST, deleteTodoSaga);
}
