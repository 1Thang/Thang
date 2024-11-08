// todosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../Api/Api';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await api.get('/Products');
  return response.data;
});

export const addOrEditTodo = createAsyncThunk('todos/addOrEditTodo', async (todo) => {
  if (todo.id) {
    await api.put(`/Products/${todo.id}`, todo);
    return todo;
  } else {
    const response = await api.post('/Products', todo);
    return response.data;
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await api.delete(`/Products/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    editingTodo: null,
    loading: false,
    error: null,
    message: '',
  },
  reducers: {
    startEditing(state, action) {
      state.editingTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.message = 'Fetched todos successfully!';
      })
      .addCase(addOrEditTodo.fulfilled, (state, action) => {
        state.message = action.payload.id ? 'Todo updated successfully!' : 'Todo added successfully!';
        if (action.payload.id) {
          state.items = state.items.map((todo) => (todo.id === action.payload.id ? action.payload : todo));
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
        state.message = 'Todo deleted successfully!';
      })
      .addMatcher(
        (action) => action.type.endsWith('rejected'),
        (state) => {
          state.loading = false;
          state.error = 'Operation failed';
        }
      );
  },
});

export const { startEditing } = todosSlice.actions;
export default todosSlice.reducer;
