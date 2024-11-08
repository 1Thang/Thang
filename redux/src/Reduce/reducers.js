import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  EDIT_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  START_EDITING,
  TOGGLE_COMPLETED,
  FETCH_TODOS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  editingTodo: null,
  loading: false,
  error: null,
  message: '',
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_REQUEST':
      return { ...state, loading: true };

    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, items: action.payload, message: 'Fetched todos successfully!' };

    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: 'Failed to fetch todos' };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        message: 'Todo added successfully!',
      };

    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        items: state.items.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
        message: 'Todo updated successfully!',
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
        message: 'Todo deleted successfully!',
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case START_EDITING:
      return { ...state, editingTodo: action.payload };

    default:
      return state;
  }
};

export default todosReducer;
