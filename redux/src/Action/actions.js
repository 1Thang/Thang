import * as actionTypes from './actionTypes';

export const fetchTodosRequest = () => ({ type: actionTypes.FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: actionTypes.FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: actionTypes.FETCH_TODOS_FAILURE, payload: error });

export const addTodoRequest = (todo) => ({ type: actionTypes.ADD_TODO_REQUEST, payload: todo });
export const addTodoSuccess = (todo) => ({ type: actionTypes.ADD_TODO_SUCCESS, payload: todo });

export const editTodoRequest = (todo) => ({ type: actionTypes.EDIT_TODO_REQUEST, payload: todo });
export const editTodoSuccess = (todo) => ({ type: actionTypes.EDIT_TODO_SUCCESS, payload: todo });

export const deleteTodoRequest = (id) => ({ type: actionTypes.DELETE_TODO_REQUEST, payload: id });
export const deleteTodoSuccess = (id) => ({ type: actionTypes.DELETE_TODO_SUCCESS, payload: id });
// Toggle completed action
export const toggleCompleted = (todo) => ({
  type: actionTypes.TOGGLE_COMPLETED,
  payload: { ...todo, completed: !todo.completed },
});

// Start editing action
export const startEditing = (todo) => ({
  type: actionTypes.START_EDITING,
  payload: todo,
});